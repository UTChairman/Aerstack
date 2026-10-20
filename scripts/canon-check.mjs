import puppeteer from "puppeteer";
const R=["/","/about","/services","/case-studies/seo-success","/service-mvp"];
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
for(const r of R){
  const p=await b.newPage();
  await p.goto("http://localhost:3000"+r,{waitUntil:"domcontentloaded"});
  const o=await p.evaluate(()=>({
    canonical:document.querySelector('link[rel="canonical"]')?.getAttribute("href")||"(none)",
    title:document.title,
    ogUrl:document.querySelector('meta[property="og:url"]')?.content||"(none)",
    desc:(document.querySelector('meta[name="description"]')?.content||"(none)").slice(0,50)
  }));
  console.log(r.padEnd(36), "canon:", o.canonical.padEnd(30), "|", o.title.slice(0,42));
  await p.close();
}
// tracking on live
const p=await b.newPage();
const reqs=[];
p.on("request",q=>{ const u=q.url(); if(/googletagmanager|google-analytics|gtag|hotjar|segment|posthog|clarity|facebook\.net|plausible|fathom/i.test(u)) reqs.push(u.split("?")[0]); });
await p.goto("https://www.aerstack.com",{waitUntil:"networkidle2"});
console.log("\nLIVE tracking scripts:", reqs.length? [...new Set(reqs)].join("\n  ") : "none detected");
await b.close();
