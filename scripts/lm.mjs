import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/case-studies", { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    const els = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && /LEARN MORE/i.test(e.textContent || ""));
    const e = els[0];
    if (!e) return { count: 0 };
    const cs = getComputedStyle(e), r = e.getBoundingClientRect();
    const box = e.closest("div"), bcs = getComputedStyle(box), br = box.getBoundingClientRect();
    return { count: els.length, fs: cs.fontSize, lh: cs.lineHeight, ls: cs.letterSpacing, col: cs.color, fw: cs.fontWeight,
      h: Math.round(r.height), boxH: Math.round(br.height), boxW: Math.round(br.width),
      boxPad: bcs.padding, boxBg: bcs.backgroundColor, boxRadius: bcs.borderRadius, boxGap: bcs.gap,
      hasSvg: !!box.querySelector("svg") };
  }), null, 0));
  await p.close();
}
await b.close();
