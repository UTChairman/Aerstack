import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 810, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/contact-us", { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    const leaf = (re) => [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && re.test((e.textContent||"").trim()));
    const M = leaf(/^Message$/)[0], U = leaf(/^Us$/)[0];
    const R = (e) => { if (!e) return null; const r = e.getBoundingClientRect(), c = getComputedStyle(e);
      return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height), fs: c.fontSize, lh: c.lineHeight, col: c.color }; };
    const form = document.querySelector("form");
    const fr = form ? form.getBoundingClientRect() : null;
    const sec = form ? form.closest("section,div").parentElement : null;
    const sr = sec ? sec.getBoundingClientRect() : null;
    return { Message: R(M), Us: R(U),
      form: fr ? { x: Math.round(fr.x), y: Math.round(fr.y + scrollY), w: Math.round(fr.width), h: Math.round(fr.height) } : null,
      block: sr ? { y: Math.round(sr.top + scrollY), h: Math.round(sr.height), w: Math.round(sr.width), pad: getComputedStyle(sec).padding, gap: getComputedStyle(sec).gap, dir: getComputedStyle(sec).flexDirection } : null };
  }), null, 0));
  await p.close();
}
await b.close();
