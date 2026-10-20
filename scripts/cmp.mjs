import puppeteer from "puppeteer";
const route = process.argv[2];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
async function grab(url){
  const p=await b.newPage(); await p.setViewport({width:1440,height:1000});
  await p.goto(url,{waitUntil:"networkidle2",timeout:90000});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+900)setTimeout(s,50);else r()};s()})});
  await new Promise(r=>setTimeout(r,1200));
  const o = await p.evaluate(()=>({
    imgs:[...document.querySelectorAll("img")].filter(i=>i.getBoundingClientRect().width>60).map(i=>(i.getAttribute("src")||"").split("/").pop().split("?")[0]),
    h3:[...document.querySelectorAll("h3,h4")].map(e=>(e.innerText||"").trim()).filter(Boolean),
  }));
  await p.close(); return o;
}
const L=await grab("https://www.aerstack.com"+route), M=await grab("http://localhost:3000"+route);
const missImg=L.imgs.filter(x=>!M.imgs.includes(x));
console.log("live imgs:",L.imgs.length,"mine:",M.imgs.length);
if(missImg.length) console.log("MISSING IMAGES:", [...new Set(missImg)].join(", "));
const missH=L.h3.filter(x=>!M.h3.some(y=>y.toLowerCase().includes(x.toLowerCase().slice(0,14))));
if(missH.length) console.log("MISSING h3/h4:", [...new Set(missH)].slice(0,12).join(" | "));
await b.close();
