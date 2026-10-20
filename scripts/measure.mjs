import puppeteer from "puppeteer";
const [url, needle] = [process.argv[2], process.argv[3]];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const p = await b.newPage();
await p.setViewport({width:1440,height:1000});
await p.goto(url,{waitUntil:"networkidle2"});
await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,600);y+=600;if(y<document.body.scrollHeight+800)setTimeout(s,60);else r()};s()})});
await new Promise(r=>setTimeout(r,2000));
const out = await p.evaluate((needle)=>{
  const res=[];
  document.querySelectorAll("*").forEach(el=>{
    if(el.children.length===0 && (el.innerText||"").trim()===needle){
      const r=el.getBoundingClientRect(); const cs=getComputedStyle(el);
      res.push({w:Math.round(r.width),h:Math.round(r.height),fs:cs.fontSize,lh:cs.lineHeight,ff:cs.fontFamily.split(",")[0]});
    }
  });
  return res;
},needle);
console.log(url, JSON.stringify(out));
await b.close();
