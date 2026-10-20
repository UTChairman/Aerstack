import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const path of ["/service-ilr","/about"]) {
    const p = await b.newPage();
    await p.setViewport({ width: Number(process.argv[2]||1440), height: 900, isMobile: Number(process.argv[2]||1440) < 810, hasTouch: Number(process.argv[2]||1440) < 810 });
    await p.goto(base + path, { waitUntil: "networkidle2", timeout: 60000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1500));
    console.log(label + " " + path + " => " + JSON.stringify(await p.evaluate(() => {
      const leaf = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && /^Step$/i.test((e.textContent||"").trim()))[0];
      if (!leaf) return "no step pill";
      let card = leaf;
      // climb until we reach the rounded panel with a background
      while (card && !(getComputedStyle(card).backgroundColor !== "rgba(0, 0, 0, 0)" && card.getBoundingClientRect().height > 150)) card = card.parentElement;
      if (!card) return "no card";
      const r = card.getBoundingClientRect(), cs = getComputedStyle(card);
      const texts = [...card.querySelectorAll("*")].filter(e => e.children.length === 0 && (e.textContent||"").trim().length > 25)
        .slice(0, 3).map(e => ({ fs: getComputedStyle(e).fontSize, lh: getComputedStyle(e).lineHeight, h: Math.round(e.getBoundingClientRect().height), n: (e.textContent||"").trim().length }));
      const title = [...card.querySelectorAll("h2,h3,h4")].slice(0,1).map(e => ({ fs: getComputedStyle(e).fontSize, lh: getComputedStyle(e).lineHeight }));
      return { card: { h: Math.round(r.height), w: Math.round(r.width), pad: cs.padding, gap: cs.gap, radius: cs.borderRadius, bg: cs.backgroundColor }, title, texts };
    }), null, 0));
    await p.close();
  }
}
await b.close();
