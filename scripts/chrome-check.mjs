// Does each page have nav / footer / contact section, and what layout width does it claim?
import puppeteer from "puppeteer";
const ROUTES = ["/licensed-assets","/contact-us","/case-studies","/about"];
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
async function chk(base, path, w) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto(base + path, { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise(r => setTimeout(r, 800));
  const o = await p.evaluate(() => ({
    vp: (document.querySelector('meta[name=viewport]') || {}).content || "NONE",
    cw: document.documentElement.clientWidth,
    bw: Math.round(document.body.getBoundingClientRect().width),
    h: document.body.scrollHeight,
    nav: !!document.querySelector("nav"),
    footer: !!document.querySelector("footer"),
    msgUs: /Message\s*Us/i.test(document.body.innerText),
    iframes: [...document.querySelectorAll("iframe")].map(f => Math.round(f.getBoundingClientRect().height)),
  }));
  await p.close(); return o;
}
for (const r of ROUTES) for (const w of [390, 1440]) {
  const L = await chk("https://www.aerstack.com", r, w), M = await chk("http://localhost:3000", r, w);
  console.log(`${r} @${w}`);
  console.log(`   live: bodyW=${L.bw} clientW=${L.cw} h=${L.h} nav=${L.nav} footer=${L.footer} msgUs=${L.msgUs} iframes=${JSON.stringify(L.iframes)} vp="${L.vp.slice(0,40)}"`);
  console.log(`   mine: bodyW=${M.bw} clientW=${M.cw} h=${M.h} nav=${M.nav} footer=${M.footer} msgUs=${M.msgUs} iframes=${JSON.stringify(M.iframes)}`);
}
await b.close();
