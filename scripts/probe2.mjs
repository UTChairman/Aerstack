import puppeteer from "puppeteer";
const url = process.argv[2] || "https://www.aerstack.com";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1000 });
await p.goto(url, { waitUntil: "networkidle2" });
await p.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => { window.scrollBy(0, 500); y += 500;
      if (y < document.body.scrollHeight + 800) setTimeout(step, 80); else res(); };
    step();
  });
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 2000));
const out = await p.evaluate(() => {
  const path = (el) => {
    const parts = [];
    let n = el;
    while (n && n !== document.body) {
      const cls = (n.className || "").toString().trim().split(/\s+/)[0];
      parts.unshift(n.tagName.toLowerCase() + (cls ? "." + cls : ""));
      n = n.parentElement;
    }
    return parts.join(" > ");
  };
  const main = document.querySelector("main");
  const res = { mainPath: main ? path(main) : null, siblings: [] };
  if (main?.parentElement) {
    [...main.parentElement.children].forEach((c) => {
      const r = c.getBoundingClientRect();
      res.siblings.push({
        tag: c.tagName, cls: (c.className || "").toString().slice(0, 70),
        y: Math.round(r.y + scrollY), h: Math.round(r.height), kids: c.children.length,
        pos: getComputedStyle(c).position,
      });
    });
  }
  return res;
});
console.log(JSON.stringify(out, null, 1));
await b.close();
