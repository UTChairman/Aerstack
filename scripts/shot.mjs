// Screenshot helper with region/element support.
// Usage:
//   node scripts/shot.mjs <url> <outfile> [width] [mode] [arg]
//   mode=full   -> full page (default)
//   mode=clip   -> arg = "x,y,w,h"
//   mode=region -> arg = "yStart,yEnd" (full width strip)
import puppeteer from "puppeteer";

const [, , url, outfile, widthArg, mode = "full", arg] = process.argv;
const width = Number(widthArg) || 1440;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  // Slow scroll so IntersectionObserver (framer-motion whileInView) fires everywhere
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 300);
        y += 300;
        if (y < document.body.scrollHeight + 1000) setTimeout(step, 130);
        else res();
      };
      step();
    });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1800));

  let opts = { path: outfile };
  if (mode === "clip" && arg) {
    const [x, y, w, h] = arg.split(",").map(Number);
    opts.clip = { x, y, width: w, height: h };
  } else if (mode === "region" && arg) {
    const [y0, y1] = arg.split(",").map(Number);
    opts.clip = { x: 0, y: y0, width, height: y1 - y0 };
  } else {
    opts.fullPage = true;
  }
  await page.screenshot(opts);
  console.log("saved", outfile, JSON.stringify(opts.clip || "full"));
} finally {
  await browser.close();
}
