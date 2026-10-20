import puppeteer from "puppeteer";
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const p = await b.newPage();
await p.setViewport({width:1440,height:1000});
await p.goto("https://www.aerstack.com/case-studies/content-writing-for-video-grapher",{waitUntil:"networkidle2"});
await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+900)setTimeout(s,55);else r()};s()})});
await new Promise(r=>setTimeout(r,2000));
const out = await p.evaluate(()=>{
  const res=[];
  document.querySelectorAll("img,h1,h2,h3,p,iframe,video").forEach(el=>{
    const r=el.getBoundingClientRect(); const y=Math.round(r.y+scrollY);
    if(y<2600||y>5200) return;
    if(r.width<20||r.height<20) return;
    const t=(el.innerText||"").replace(/\s+/g," ").trim().slice(0,60);
    res.push({y,tag:el.tagName.toLowerCase(),w:Math.round(r.width),h:Math.round(r.height),
      src: el.getAttribute && el.getAttribute("src") ? el.getAttribute("src").split("/").pop().split("?")[0] : "", t});
  });
  return res.sort((a,b)=>a.y-b.y);
});
out.forEach(r=>console.log(String(r.y).padStart(5), r.tag.padEnd(6), (r.w+"x"+r.h).padEnd(11), (r.src||"").slice(0,40).padEnd(42), r.t));
await b.close();
