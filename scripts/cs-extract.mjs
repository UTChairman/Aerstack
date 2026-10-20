import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
const SLUGS = ["content-writing-for-video-grapher","transforming-barber-buzz","seo-success","seo-solution-for-tech-haven","crafting-copy-crafting-success"];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const out = {};
for (const slug of SLUGS) {
  const p = await b.newPage();
  await p.setViewport({width:1440,height:1000});
  await p.goto(`https://www.aerstack.com/case-studies/${slug}`,{waitUntil:"networkidle2"});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,600);y+=600;if(y<document.body.scrollHeight+800)setTimeout(s,60);else r()};s()})});
  await new Promise(r=>setTimeout(r,1500));
  out[slug] = await p.evaluate(()=>{
    const res={eyebrow:"",title:"",subtitle:"",sections:[]};
    const nodes=[...document.querySelectorAll("h1,h2,h3,p")];
    let cur=null;
    for(const el of nodes){
      const y=el.getBoundingClientRect().y+scrollY;
      if(y>2450) break;
      const t=(el.innerText||"").replace(/\s+/g," ").trim();
      if(!t) continue;
      const tag=el.tagName.toLowerCase();
      if(tag==="h1"){res.title=t;continue;}
      if(tag==="p" && !res.eyebrow && t.length<40 && t===t.toUpperCase()){res.eyebrow=t;continue;}
      if(tag==="p" && !res.subtitle && !cur){res.subtitle=t;continue;}
      if(tag==="h2"){cur={heading:t,paras:[]};res.sections.push(cur);continue;}
      if(tag==="p" && cur && t.length>40){ if(!cur.paras.includes(t)) cur.paras.push(t); }
    }
    return res;
  });
  console.log(slug, "sections:", out[slug].sections.length);
  await p.close();
}
await writeFile("extracted/case-studies.json", JSON.stringify(out,null,1));
await b.close();
