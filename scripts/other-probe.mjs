import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const w of [1440]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900 });
    await p.goto(base + "/case-studies/content-writing-for-video-grapher", { waitUntil: "networkidle2", timeout: 45000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1200));
    console.log(label + " " + w + " => " + JSON.stringify(await p.evaluate(() => {
      const all = [...document.querySelectorAll("*")];
      const host = all.find(e => /Other Case Studies/.test(e.textContent || "") && e.children.length && e.getBoundingClientRect().height > 400);
      const sec = host ? host.closest("section,div") : null;
      const list = [];
      if (sec) {
        // the row container is the last big flex child
        const walk = (el, d) => { for (const c of el.children) {
          const r = c.getBoundingClientRect();
          if (r.height > 200) list.push({ d, tag: c.tagName.toLowerCase(), h: Math.round(r.height), w: Math.round(r.width), t: (c.innerText||"").replace(/\s+/g," ").slice(0,32) });
          if (d < 3) walk(c, d + 1); } };
        walk(sec, 0);
      }
      return { secH: sec ? Math.round(sec.getBoundingClientRect().height) : null, list: list.slice(0, 14) };
    }), null, 0));
    await p.close();
  }
}
await b.close();
