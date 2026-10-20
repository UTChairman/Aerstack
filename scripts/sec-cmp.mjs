import puppeteer from "puppeteer";
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
async function marks(url){
  const p=await b.newPage(); await p.setViewport({width:1440,height:1000});
  await p.goto(url,{waitUntil:"networkidle2",timeout:90000});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+800)setTimeout(s,50);else r()};s()})});
  await new Promise(r=>setTimeout(r,1500));
  const o=await p.evaluate(()=>{
    const want=["About our Company","Brands we have worked with","Meet The Founder","Meet The Co - Founder","Our 4 Stage Process","Got Questions"];
    const res={};
    document.querySelectorAll("h1,h2").forEach(e=>{
      const t=(e.innerText||"").replace(/\s+/g," ").trim();
      const hit=want.find(w=>t.startsWith(w));
      if(hit && res[hit]===undefined) res[hit]=Math.round(e.getBoundingClientRect().y+scrollY);
    });
    res.__total=document.body.scrollHeight;
    return res;
  });
  await p.close(); return o;
}
const L=await marks("https://www.aerstack.com/about");
const M=await marks("http://localhost:3000/about");
const keys=Object.keys(L);
for(const k of keys){
  const l=L[k], m=M[k];
  if(m===undefined){ console.log(k.padEnd(32),"live="+l,"MINE MISSING"); continue; }
  console.log(k.padEnd(32), "live="+String(l).padStart(5), "mine="+String(m).padStart(5), "Δ="+String(m-l).padStart(6));
}
await b.close();
