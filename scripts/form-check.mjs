import puppeteer from "puppeteer";
const b=await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const p=await b.newPage();
const posts=[];
p.on("request",q=>{ if(q.method()==="POST") posts.push(q.url().split("?")[0]); });
await p.goto("https://www.aerstack.com/contact-us",{waitUntil:"networkidle2"});
await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,800);y+=800;if(y<document.body.scrollHeight)setTimeout(s,50);else r()};s()})});
await new Promise(r=>setTimeout(r,1500));
const forms=await p.evaluate(()=>[...document.querySelectorAll("form")].map(f=>({
  action:f.getAttribute("action")||"(none)", method:f.getAttribute("method")||"(none)",
  fields:[...f.querySelectorAll("input,textarea")].map(i=>i.getAttribute("name")||i.getAttribute("type")||"?")
})));
console.log("LIVE forms:", JSON.stringify(forms,null,1));
console.log("POSTs seen on load:", posts.length? [...new Set(posts)] : "none");
await b.close();
