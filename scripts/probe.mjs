import puppeteer from "puppeteer";
const url = process.argv[2] || "https://www.aerstack.com";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 1000 });
await p.goto(url, { waitUntil: "networkidle2" });
await p.evaluate(async () => {
  await new Promise((res) => {
    let y = 0;
    const step = () => {
      window.scrollBy(0, 500);
      y += 500;
      if (y < document.body.scrollHeight + 800) setTimeout(step, 80);
      else res();
    };
    step();
  });
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 2500));
const info = await p.evaluate(() => {
  const main = document.querySelector("main") || document.body;
  const out = { mainKids: [] };
  [...main.children].forEach((el, i) => {
    const r = el.getBoundingClientRect();
    out.mainKids.push({
      i, tag: el.tagName, cls: (el.className || "").toString().slice(0, 60),
      w: Math.round(r.width), h: Math.round(r.height), kids: el.children.length,
    });
  });
  const big = [...main.querySelectorAll("*")]
    .filter((e) => { const r = e.getBoundingClientRect(); return r.height > 250 && r.width > 900; })
    .map((e) => {
      const r = e.getBoundingClientRect();
      let d = 0, n = e;
      while (n && n !== document.body) { d++; n = n.parentElement; }
      return { tag: e.tagName, cls: (e.className || "").toString().slice(0, 50),
        y: Math.round(r.y + scrollY), h: Math.round(r.height), depth: d,
        txt: (e.innerText || "").replace(/\s+/g, " ").trim().slice(0, 45) };
    })
    .filter((x) => x.depth <= 6)
    .sort((a, b2) => a.y - b2.y);
  out.big = big;
  return out;
});
console.log(JSON.stringify(info, null, 1));
await b.close();
