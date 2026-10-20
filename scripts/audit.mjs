import puppeteer from "puppeteer";
const ROUTES = ["/","/about","/services","/case-studies","/review","/contact-us","/licensed-assets",
  "/service-ilr","/service-alq","/service-dlr","/service-fullpipe","/service-mvp","/service-webdev",
  "/case-studies/content-writing-for-video-grapher"];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
async function h(url){
  const p = await b.newPage();
  await p.setViewport({width:1440,height:1000});
  try{
    await p.goto(url,{waitUntil:"networkidle2",timeout:45000});
    await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+800)setTimeout(s,50);else r()};s()})});
    await new Promise(r=>setTimeout(r,1200));
    const res = await p.evaluate(()=>({h:document.body.scrollHeight, headings:[...document.querySelectorAll("h1,h2")].map(e=>(e.innerText||"").replace(/\s+/g," ").trim()).filter(Boolean).slice(0,14)}));
    await p.close(); return res;
  }catch(e){ await p.close(); return {h:0,headings:["ERR "+e.message.slice(0,40)]}; }
}
for(const r of ROUTES){
  const L = await h("https://www.aerstack.com"+r);
  const M = await h("http://localhost:3000"+r);
  const diff = L.h ? Math.round((M.h-L.h)/L.h*100) : 0;
  console.log(`${r.padEnd(48)} live=${String(L.h).padStart(6)} mine=${String(M.h).padStart(6)} ${String(diff).padStart(5)}%`);
  const miss = L.headings.filter(x=>!M.headings.some(y=>y.toLowerCase().includes(x.toLowerCase().slice(0,18))));
  if(miss.length) console.log(`    MISSING HEADINGS: ${miss.join(" | ").slice(0,160)}`);
}
await b.close();
