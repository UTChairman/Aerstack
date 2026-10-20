import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 810, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/contact-us", { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise(r => setTimeout(r, 1500));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    const els = [...document.querySelectorAll("*")].filter(e =>
      /Book Your Free Discovery/.test(e.textContent || "") && e.children.length === 0);
    const e = els[els.length - 1];
    if (!e) return "not found";
    const cs = getComputedStyle(e), r = e.getBoundingClientRect();
    const host = e.closest("h1,h2,h3,p,div");
    const hcs = getComputedStyle(host), hr = host.getBoundingClientRect();
    return { tag: e.tagName, text: (e.textContent || "").replace(/\s+/g," ").slice(0,50),
      fs: cs.fontSize, lh: cs.lineHeight, ls: cs.letterSpacing, col: cs.color, fw: cs.fontWeight,
      hostTag: host.tagName, hostH: Math.round(hr.height), hostW: Math.round(hr.width),
      hostMaxW: hcs.maxWidth, hostAlign: hcs.textAlign, lines: Math.round(hr.height / parseFloat(cs.lineHeight)) };
  })));
  await p.close();
}
await b.close();
