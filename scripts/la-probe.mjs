import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto("https://www.aerstack.com/licensed-assets", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 800));
console.log(JSON.stringify(await p.evaluate(() => {
  const bs = getComputedStyle(document.body), hs = getComputedStyle(document.documentElement);
  const root = document.body.firstElementChild;
  const rs = root ? getComputedStyle(root) : {};
  const h2 = document.querySelector("h2"), a = document.querySelector("p");
  const cs = (e) => e ? { fs: getComputedStyle(e).fontSize, lh: getComputedStyle(e).lineHeight,
    ff: getComputedStyle(e).fontFamily.split(",")[0], col: getComputedStyle(e).color,
    fw: getComputedStyle(e).fontWeight } : null;
  return { htmlBg: hs.backgroundColor, bodyBg: bs.backgroundColor, rootBg: rs.backgroundColor,
    rootPad: rs.padding, rootGap: rs.gap, rootW: rs.width,
    bgImage: (rs.backgroundImage || "").slice(0, 60),
    h2: cs(h2), p: cs(a), title: document.title,
    linkTag: (document.querySelector("a") || {}).tagName || "NO <a> — plain text",
    nAnchors: document.querySelectorAll("a").length };
}), null, 1));
await b.close();
