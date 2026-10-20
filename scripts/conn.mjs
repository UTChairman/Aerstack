import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const path of ["/service-ilr", "/about"]) {
    const p = await b.newPage();
    await p.setViewport({ width: 1440, height: 900 });
    await p.goto(base + path, { waitUntil: "networkidle2", timeout: 60000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1500));
    console.log(label + " " + path + " => " + JSON.stringify(await p.evaluate(() => {
      // the connector is a tall, ~3px wide element
      const lines = [...document.querySelectorAll("div,span")].map(e => ({ e, r: e.getBoundingClientRect() }))
        .filter(({ r }) => r.width > 0 && r.width <= 5 && r.height > 60)
        .map(({ r }) => ({ h: Math.round(r.height), w: Math.round(r.width), y: Math.round(r.top + scrollY) }));
      // and the step cards (rounded panels holding "STEP 0n")
      const cards = [...document.querySelectorAll("*")].filter(e => /^STEP 0\d/i.test((e.innerText||"").trim()))
        .map(e => e.closest("div")).filter(Boolean)
        .map(e => { let c = e; while (c && c.getBoundingClientRect().height < 100) c = c.parentElement;
          return c ? Math.round(c.getBoundingClientRect().height) : 0; });
      return { connectors: lines.slice(0, 5), cardHeights: [...new Set(cards)].slice(0, 6) };
    }), null, 0));
    await p.close();
  }
}
await b.close();
