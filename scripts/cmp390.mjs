// Print the top-level section/child rects of a live page vs mine at a given width.
import puppeteer from "puppeteer";
const path = process.argv[2], w = Number(process.argv[3] || 390);
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
async function dump(base) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto(base + path, { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1000));
  const out = await p.evaluate(() => {
    const rows = [];
    const walk = (el, d) => {
      if (d > 4) return;
      for (const c of el.children) {
        const r = c.getBoundingClientRect();
        const cs = getComputedStyle(c);
        if (cs.position === "fixed" || r.height === 0) { walk(c, d); continue; }
        const t = (c.innerText || "").replace(/\s+/g, " ").trim().slice(0, 40);
        rows.push({ d, tag: c.tagName.toLowerCase(), y: Math.round(r.top + scrollY), h: Math.round(r.height),
          w: Math.round(r.width), fs: cs.fontSize, lh: cs.lineHeight, pad: cs.padding, gap: cs.gap, t });
        if (rows.length < 90) walk(c, d + 1);
      }
    };
    walk(document.body, 0);
    return rows;
  });
  await p.close();
  return out;
}
const L = await dump("https://www.aerstack.com"), M = await dump("http://localhost:3000");
const fmt = (r) => `${"  ".repeat(r.d)}${r.tag} y=${r.y} h=${r.h} w=${r.w} fs=${r.fs} lh=${r.lh} gap=${r.gap} pad=${r.pad}  «${r.t}»`;
console.log("############ LIVE ############");
console.log(L.slice(0, 45).map(fmt).join("\n"));
console.log("\n############ MINE ############");
console.log(M.slice(0, 45).map(fmt).join("\n"));
await b.close();
