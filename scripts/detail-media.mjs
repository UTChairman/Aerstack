import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
const SLUGS = ["content-writing-for-video-grapher","transforming-barber-buzz","seo-success","seo-solution-for-tech-haven","crafting-copy-crafting-success"];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const out = {};
for (const slug of SLUGS) {
  const p = await b.newPage();
  await p.setViewport({width:1440,height:1000});
  await p.goto(`https://www.aerstack.com/case-studies/${slug}`,{waitUntil:"networkidle2"});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+900)setTimeout(s,55);else r()};s()})});
  await new Promise(r=>setTimeout(r,1800));
  out[slug] = await p.evaluate(()=>{
    const bigImgs=[]; const vids=[];
    document.querySelectorAll("img").forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.width>900 && r.height>400) bigImgs.push({y:Math.round(r.y+scrollY), src:(el.getAttribute("src")||"").split("?")[0], w:Math.round(r.width),h:Math.round(r.height)});
    });
    document.querySelectorAll("iframe").forEach(el=>{
      const s = el.getAttribute("src")||el.getAttribute("href")||"";
      if(s) vids.push({tag:el.tagName.toLowerCase(), src:s.slice(0,140)});
    });
    // youtube thumbnail gives the video id
    const yt=[...document.querySelectorAll("img")].map(i=>i.getAttribute("src")||"").filter(s=>s.includes("ytimg")||s.includes("youtube"));
    return { bigImgs, vids, ytThumbs: yt.slice(0,3), height: document.body.scrollHeight };
  });
  console.log(slug, "| imgs:", out[slug].bigImgs.map(i=>i.src.split("/").pop()).join(","), "| yt:", out[slug].ytThumbs.length, out[slug].ytThumbs[0]||"");
  await p.close();
}
await writeFile("extracted/detail-media.json", JSON.stringify(out,null,1));
await b.close();
