import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const w of [390, 810]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
    await p.goto(base + "/case-studies", { waitUntil: "networkidle2", timeout: 45000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1200));
    console.log(label + " " + w + " => " + JSON.stringify(await p.evaluate(() => {
      const imgs = [...document.querySelectorAll("img")].map(i => i.getBoundingClientRect())
        .filter(r => r.width > 200).map(r => ({ w: Math.round(r.width), h: Math.round(r.height), y: Math.round(r.top + scrollY) }));
      // metric numbers are the big brand-orange text
      const big = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 &&
        parseFloat(getComputedStyle(e).fontSize) > 28 && getComputedStyle(e).color === "rgb(245, 131, 39)")
        .slice(0, 3).map(e => ({ t: e.textContent.trim().slice(0,8), fs: getComputedStyle(e).fontSize, lh: getComputedStyle(e).lineHeight }));
      const h3 = [...document.querySelectorAll("h2,h3")].slice(0,3).map(e => ({ t: e.textContent.trim().slice(0,22), fs: getComputedStyle(e).fontSize, lh: getComputedStyle(e).lineHeight, h: Math.round(e.getBoundingClientRect().height) }));
      return { covers: imgs.slice(0, 3), metrics: big, heads: h3 };
    }), null, 0));
    await p.close();
  }
}
await b.close();
