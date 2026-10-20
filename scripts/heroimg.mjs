import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  const out = {};
  for (const w of [390, 810, 1440]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
    await p.goto(base + "/", { waitUntil: "networkidle2", timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));
    out[w] = await p.evaluate(() => [...document.querySelectorAll("img")]
      .map(i => i.getBoundingClientRect())
      .filter(r => r.width > 250 && r.top + scrollY < 1700)
      .map(r => ({ y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) })));
    await p.close();
  }
  console.log(label + " => " + JSON.stringify(out));
}
await b.close();
