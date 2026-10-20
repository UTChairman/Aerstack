import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 810, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/contact-us", { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise(r => setTimeout(r, 2500));
  const o = await p.evaluate(() => {
    const cal = document.querySelector("cal-inline") || document.querySelector("iframe");
    const calBox = cal && cal.parentElement ? cal.parentElement.getBoundingClientRect() : null;
    const h1 = document.querySelector("h1");
    // "OR !" is rendered as a fit-text SVG
    const orSvg = [...document.querySelectorAll("svg")].find(s => (s.textContent || "").includes("OR"));
    const orP = orSvg ? orSvg.querySelector("p") : null;
    const R = (e) => e ? { y: Math.round(e.getBoundingClientRect().top + scrollY), h: Math.round(e.getBoundingClientRect().height), w: Math.round(e.getBoundingClientRect().width) } : null;
    const banner = h1 ? h1.closest("div").parentElement : null;
    return {
      cal: R(cal), calWrap: calBox ? { y: Math.round(calBox.top + scrollY), h: Math.round(calBox.height), w: Math.round(calBox.width) } : null,
      h1: R(h1), h1cs: h1 ? { fs: getComputedStyle(h1).fontSize, lh: getComputedStyle(h1).lineHeight } : null,
      banner: R(banner), bannerPad: banner ? getComputedStyle(banner).padding : null,
      or: R(orSvg), orCs: orP ? { fs: getComputedStyle(orP).fontSize, lh: getComputedStyle(orP).lineHeight } : null,
    };
  });
  console.log(w + " => " + JSON.stringify(o));
  await p.close();
}
await b.close();
