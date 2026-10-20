import puppeteer from "puppeteer";
const url = process.argv[2] || "https://www.aerstack.com";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1000 });
await p.goto(url, { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 2500));
const out = await p.evaluate(() => {
  const res = [];
  document.querySelectorAll("*").forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.backgroundImage && cs.backgroundImage.includes("data:image/svg")) {
      const r = el.getBoundingClientRect();
      res.push({
        rect: { w: Math.round(r.width), h: Math.round(r.height) },
        backgroundSize: cs.backgroundSize,
        backgroundRepeat: cs.backgroundRepeat,
        backgroundPosition: cs.backgroundPosition,
        backgroundAttachment: cs.backgroundAttachment,
        opacity: cs.opacity,
        transform: cs.transform,
        zoom: cs.zoom,
      });
    }
  });
  return res;
});
console.log(JSON.stringify(out, null, 1));
await b.close();
