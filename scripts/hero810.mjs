import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  const p = await b.newPage();
  await p.setViewport({ width: 810, height: 900 });
  await p.goto(base + "/", { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise(r => setTimeout(r, 2000));
  console.log(label + " => " + JSON.stringify(await p.evaluate(() => {
    const rows = [];
    const walk = (el, d) => { if (d > 3) return;
      for (const c of el.children) {
        const r = c.getBoundingClientRect(); const cs = getComputedStyle(c);
        if (cs.position === "fixed") continue;
        if (r.top + scrollY > 1600) continue;
        if (r.height > 30) rows.push({ d, tag: c.tagName.toLowerCase(), y: Math.round(r.top + scrollY),
          h: Math.round(r.height), w: Math.round(r.width), pad: cs.padding, gap: cs.gap,
          t: (c.innerText||"").replace(/\s+/g," ").slice(0,26) });
        walk(c, d + 1); } };
    walk(document.body, 0);
    const img = [...document.querySelectorAll("img")].map(i => i.getBoundingClientRect())
      .filter(r => r.width > 250 && r.top + scrollY < 1600)
      .map(r => ({ y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height) }));
    return { rows: rows.slice(0, 16), heroImgs: img };
  }), null, 1));
  await p.close();
}
await b.close();
