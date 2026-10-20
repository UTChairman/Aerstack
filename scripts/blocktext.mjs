import puppeteer from "puppeteer";
const [url, y0, y1] = [process.argv[2], Number(process.argv[3]||0), Number(process.argv[4]||1e9)];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const p = await b.newPage();
await p.setViewport({width:1440,height:1000});
await p.goto(url,{waitUntil:"networkidle2"});
await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,500);y+=500;if(y<document.body.scrollHeight+800)setTimeout(s,70);else r()};s()})});
await new Promise(r=>setTimeout(r,1500));
const out = await p.evaluate(({y0,y1})=>{
  const res=[];
  document.querySelectorAll("p,h1,h2,h3,h4,h5,li").forEach(el=>{
    const r=el.getBoundingClientRect(); const y=Math.round(r.y+scrollY);
    if(y<y0||y>y1) return;
    const t=(el.innerText||"").replace(/\s+/g," ").trim();
    if(t.length>1) res.push({y,tag:el.tagName.toLowerCase(),v:t.slice(0,2500)});
  });
  return res.sort((a,b)=>a.y-b.y);
},{y0,y1});
const seen=new Set();
out.forEach(r=>{ if(seen.has(r.v))return; seen.add(r.v); console.log(String(r.y).padStart(5), r.tag.padEnd(3), r.v); });
await b.close();
