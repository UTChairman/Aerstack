import puppeteer from "puppeteer";
const ROUTES=["/","/about","/services","/case-studies","/review","/contact-us","/licensed-assets",
 "/service-ilr","/service-alq","/service-dlr","/service-fullpipe","/service-mvp","/service-webdev",
 "/case-studies/content-writing-for-video-grapher"];
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
async function head(url){
  const p=await b.newPage(); await p.setViewport({width:1280,height:800});
  try{ await p.goto(url,{waitUntil:"domcontentloaded",timeout:60000}); }catch(e){ await p.close(); return null; }
  const o=await p.evaluate(()=>{
    const m=n=>document.querySelector(`meta[name="${n}"]`)?.content||"";
    const pr=n=>document.querySelector(`meta[property="${n}"]`)?.content||"";
    return {
      title:document.title||"",
      desc:m("description"),
      canonical:document.querySelector('link[rel="canonical"]')?.href||"",
      ogTitle:pr("og:title"), ogDesc:pr("og:description"), ogImage:pr("og:image"), ogUrl:pr("og:url"),
      tw:m("twitter:card"),
      robots:m("robots"),
      jsonld:[...document.querySelectorAll('script[type="application/ld+json"]')].length,
      h1:[...document.querySelectorAll("h1")].length,
      imgNoAlt:[...document.querySelectorAll("img")].filter(i=>!i.getAttribute("alt")).length,
      lang:document.documentElement.lang||"",
      favicon:!!document.querySelector('link[rel*="icon"]'),
    };
  });
  await p.close(); return o;
}
for(const r of ROUTES){
  const L=await head("https://www.aerstack.com"+r);
  const M=await head("http://localhost:3000"+r);
  if(!L||!M){ console.log(r,"FETCH FAIL"); continue; }
  const flags=[];
  if(!M.title) flags.push("no-title");
  if(!M.desc) flags.push("NO-DESC");
  if(L.desc && !M.desc) flags.push("desc-missing-vs-live");
  if(!M.canonical) flags.push("no-canonical");
  if(!M.ogImage) flags.push("no-og-image");
  if(M.h1!==1) flags.push(`h1=${M.h1}`);
  if(M.imgNoAlt>0) flags.push(`img-no-alt:${M.imgNoAlt}`);
  if(L.jsonld!==M.jsonld) flags.push(`jsonld live=${L.jsonld} mine=${M.jsonld}`);
  console.log(r.padEnd(48), flags.length?flags.join(" | "):"ok");
}
// robots + sitemap
for(const f of ["/robots.txt","/sitemap.xml"]){
  const p=await b.newPage();
  const lr=await p.goto("https://www.aerstack.com"+f,{waitUntil:"domcontentloaded"}).then(r=>r.status()).catch(()=>0);
  const mr=await p.goto("http://localhost:3000"+f,{waitUntil:"domcontentloaded"}).then(r=>r.status()).catch(()=>0);
  console.log(f.padEnd(48), `live=${lr} mine=${mr}`);
  await p.close();
}
await b.close();
