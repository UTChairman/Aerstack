import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 810, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/contact-us", { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise(r => setTimeout(r, 1500));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    const h1 = document.querySelector("h1");
    const cs = getComputedStyle(h1);
    return { text: JSON.stringify(h1.innerText), html: h1.innerHTML.slice(0, 120),
      lineBoxes: h1.getClientRects().length, maxW: cs.maxWidth, ta: cs.textAlign,
      ls: cs.letterSpacing, ws: cs.whiteSpace, ff: cs.fontFamily.split(",")[0], col: cs.color,
      parentPad: getComputedStyle(h1.parentElement).padding };
  })));
  await p.close();
}
await b.close();
