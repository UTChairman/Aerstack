// Ordered text + image dump for a page (fast content extraction).
import puppeteer from "puppeteer";
const url = process.argv[2];
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1000 });
await p.goto(url, { waitUntil: "networkidle2" });
await p.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => { window.scrollBy(0, 500); y += 500;
      if (y < document.body.scrollHeight + 800) setTimeout(step, 70); else res(); };
    step();
  });
});
await new Promise((r) => setTimeout(r, 2000));
const rows = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll("body *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    const y = Math.round(r.y + window.scrollY);
    if (el.tagName === "IMG" && el.src) {
      out.push({ y, t: "img", v: el.src.split("/").pop().split("?")[0] });
      return;
    }
    if (el.children.length === 0) {
      const tx = (el.innerText || "").replace(/\s+/g, " ").trim();
      if (tx && tx.length > 1 && !tx.startsWith(":root") && !tx.startsWith("html body")) {
        const cs = getComputedStyle(el);
        out.push({ y, t: el.tagName.toLowerCase(), fs: cs.fontSize,
          ff: cs.fontFamily.split(",")[0].replace(/["']/g, ""), c: cs.color, v: tx.slice(0, 150) });
      }
    }
  });
  return out.sort((a, b2) => a.y - b2.y);
});
const seen = new Set();
for (const r of rows) {
  const k = r.t + r.v;
  if (seen.has(k)) continue;
  seen.add(k);
  console.log(String(r.y).padStart(5), (r.t || "").padEnd(5), (r.fs || "").padEnd(6), (r.ff || "").padEnd(10), r.v);
}
await b.close();
