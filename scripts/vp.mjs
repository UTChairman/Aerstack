import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const path of ["/service-ilr", "/about", "/", "/licensed-assets"]) {
  const p = await b.newPage();
  await p.setViewport({ width: 390, height: 900, isMobile: true, hasTouch: true });
  await p.goto("https://www.aerstack.com" + path, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise(r => setTimeout(r, 800));
  console.log(path.padEnd(18) + JSON.stringify(await p.evaluate(() => ({
    vp: (document.querySelector('meta[name=viewport]')||{}).content || "NONE",
    clientW: document.documentElement.clientWidth,
    bodyW: Math.round(document.body.getBoundingClientRect().width),
  }))));
  await p.close();
}
await b.close();
