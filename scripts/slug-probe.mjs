import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [1440, 810, 390]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/case-studies/content-writing-for-video-grapher", { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    // cards in the "Other Case Studies" list = links to /case-studies/*
    const links = [...document.querySelectorAll('a[href*="/case-studies/"]')]
      .filter(a => a.getBoundingClientRect().height > 100);
    const R = (e) => ({ h: Math.round(e.getBoundingClientRect().height), w: Math.round(e.getBoundingClientRect().width) });
    // hero card = first big rounded panel
    const hero = document.querySelector("main section div div");
    const imgs = [...document.querySelectorAll("img")].filter(i => i.getBoundingClientRect().width > 600)
      .map(i => ({ ...R(i), nat: i.naturalWidth + "x" + i.naturalHeight, fit: getComputedStyle(i).objectFit }));
    return { otherCards: links.length, cardSizes: links.map(R),
      heroCard: hero ? { ...R(hero), pad: getComputedStyle(hero).padding } : null,
      bigImgs: imgs };
  }), null, 0));
  await p.close();
}
await b.close();
