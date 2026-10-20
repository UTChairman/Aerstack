import puppeteer from "puppeteer";
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
for(const [label,base] of [["LIVE","https://www.aerstack.com"],["MINE","http://localhost:3000"]]){
  const p=await b.newPage(); await p.setViewport({width:1440,height:900});
  await p.goto(base+"/",{waitUntil:"networkidle2"});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,900);y+=900;if(y<document.body.scrollHeight)setTimeout(s,40);else r()};s()})});
  await new Promise(r=>setTimeout(r,1000));
  const o=await p.evaluate(()=>{
    const imgs=[...document.querySelectorAll("img")];
    return { total:imgs.length,
      missingAttr:imgs.filter(i=>i.getAttribute("alt")===null).length,
      emptyAlt:imgs.filter(i=>i.getAttribute("alt")==="").length,
      hasAlt:imgs.filter(i=>(i.getAttribute("alt")||"").length>0).length };
  });
  console.log(label, JSON.stringify(o));
  await p.close();
}
await b.close();
