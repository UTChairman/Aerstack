import puppeteer from "puppeteer";
const ROUTES=["/","/about","/services","/case-studies","/review","/contact-us","/service-ilr","/case-studies/content-writing-for-video-grapher"];
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
for(const r of ROUTES){
  const p=await b.newPage();
  const errs=[];
  p.on("console",m=>{ if(m.type()==="error") errs.push(m.text().slice(0,120)); });
  p.on("pageerror",e=>errs.push("PAGEERROR: "+e.message.slice(0,120)));
  await p.setViewport({width:1440,height:1000});
  await p.goto("http://localhost:3000"+r,{waitUntil:"networkidle2",timeout:60000});
  await p.evaluate(async()=>{await new Promise(res=>{let y=0;const s=()=>{window.scrollBy(0,900);y+=900;if(y<document.body.scrollHeight)setTimeout(s,40);else res()};s()})});
  await new Promise(x=>setTimeout(x,900));
  // filter out expected third-party noise (cal.com / youtube iframes)
  const real=errs.filter(e=>!/cal\.com|youtube|ytimg|googlevideo|doubleclick|ERR_BLOCKED/i.test(e));
  console.log(r.padEnd(50), real.length===0 ? "clean" : "ERRORS:");
  real.slice(0,3).forEach(e=>console.log("     ",e));
  await p.close();
}
await b.close();
