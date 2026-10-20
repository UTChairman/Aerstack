import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
const SLUGS = ["service-ilr","service-alq","service-dlr","service-fullpipe","service-mvp","service-webdev"];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const out = {};
for (const slug of SLUGS) {
  const p = await b.newPage();
  await p.setViewport({width:1440,height:1000});
  await p.goto(`https://www.aerstack.com/${slug}`,{waitUntil:"networkidle2"});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+900)setTimeout(s,55);else r()};s()})});
  await new Promise(r=>setTimeout(r,1500));
  out[slug] = await p.evaluate(()=>{
    const rows=[];
    document.querySelectorAll("h1,h2,h3,h4,h5,p,li").forEach(el=>{
      const r=el.getBoundingClientRect(); const y=Math.round(r.y+scrollY);
      const t=(el.innerText||"").replace(/\s+/g," ").trim();
      if(!t||t.length<2) return;
      rows.push({y,tag:el.tagName.toLowerCase(),t, x:Math.round(r.x), w:Math.round(r.width)});
    });
    rows.sort((a,b)=>a.y-b.y||a.x-b.x);
    const seen=new Set(); const uniq=[];
    for(const r of rows){ const k=r.tag+"|"+r.t+"|"+r.x; if(seen.has(k))continue; seen.add(k); uniq.push(r); }
    return uniq;
  });
  console.log(slug, out[slug].length, "rows");
  await p.close();
}
await writeFile("extracted/services-full.json", JSON.stringify(out,null,1));
await b.close();
