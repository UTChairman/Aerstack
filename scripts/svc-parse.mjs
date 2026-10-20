import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
const SLUGS = ["service-ilr","service-alq","service-dlr","service-fullpipe","service-mvp","service-webdev"];
const b = await puppeteer.launch({headless:true,args:["--no-sandbox"]});
const out = {};
for (const slug of SLUGS) {
  const p = await b.newPage();
  await p.setViewport({width:1440,height:1000});
  await p.goto(`https://www.aerstack.com/${slug}`,{waitUntil:"networkidle2"});
  await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,700);y+=700;if(y<document.body.scrollHeight+900)setTimeout(s,55);else r()};s()})});
  await new Promise(r=>setTimeout(r,1500));

  out[slug] = await p.evaluate(()=>{
    const Y = el => Math.round(el.getBoundingClientRect().y + scrollY);
    const T = el => (el.innerText||"").replace(/\s+/g," ").trim();
    const all = [...document.querySelectorAll("h1,h2,h3,h4,p,li")];
    const eyebrowY = lbl => { const e = all.find(x=>T(x)===lbl); return e?Y(e):null; };

    const yBen = eyebrowY("BENEFITS"), yDet = eyebrowY("SERVICE DETAILS"),
          yHow = eyebrowY("HOW WE WORK"), yPri = eyebrowY("PRICING"),
          yFaq = eyebrowY("FREQUENTLY ASKED QUESTIONS");
    const h2After = y => { if(y==null) return ""; const e = all.filter(x=>x.tagName==="H2" && Math.abs(Y(x)-y)<200).sort((a,c)=>Math.abs(Y(a)-y)-Math.abs(Y(c)-y))[0]; return e?T(e):""; };

    const res = { title:"", tagline:"", heroCta:"", benefitsHeading:h2After(yBen), what:[], benefits:[],
      detailsHeading:h2After(yDet), factsIntro:"", facts:[], worksHeading:h2After(yHow), steps:[],
      pricingHeading:h2After(yPri), pricingCta:"", plans:[], faqHeading:h2After(yFaq), faqQuestions:[] };

    const h1 = all.find(x=>x.tagName==="H1"); if(h1) res.title = T(h1);
    // tagline = first p after h1
    if(h1){ const cand = all.filter(x=>x.tagName==="P" && Y(x)>Y(h1) && Y(x)<Y(h1)+200 && T(x).length>50); if(cand[0]) res.tagline=T(cand[0]); }
    const cta = all.find(x=>/GET A FREE DEMO|BOOK A FREE/i.test(T(x))); if(cta) res.heroCta = T(cta);

    // what paragraphs: between BENEFITS heading and first benefit h4
    const benefitH4 = all.filter(x=>x.tagName==="H4" && yBen!=null && Y(x)>yBen && (yDet==null||Y(x)<yDet));
    const firstBenefitY = benefitH4.length?Y(benefitH4[0]):(yDet||1e9);
    res.what = all.filter(x=>x.tagName==="P" && yBen!=null && Y(x)>yBen && Y(x)<firstBenefitY && T(x).length>40).map(T);
    res.benefits = benefitH4.map(T).filter(t=>!/^\d+\.$/.test(t));

    // facts
    const intro = all.find(x=>/^Not opinions|^Documented facts/i.test(T(x))); if(intro) res.factsIntro=T(intro);
    res.facts = [...new Set(all.filter(x=>x.tagName==="LI" && yDet!=null && Y(x)>yDet && (yHow==null||Y(x)<yHow)).map(T))];

    // steps: h3 between HOW WE WORK and PRICING
    const stepH3 = all.filter(x=>x.tagName==="H3" && yHow!=null && Y(x)>yHow && (yPri==null||Y(x)<yPri));
    res.steps = stepH3.map((h,i)=>{
      const body = all.filter(x=>x.tagName==="P" && Y(x)>Y(h) && Y(x)<Y(h)+120 && T(x).length>40).map(T);
      return { n:String(i+1).padStart(2,"0"), title:T(h), body };
    });

    // pricing
    const pcta = all.filter(x=>yPri!=null && Y(x)>yPri && (yFaq==null||Y(x)<yFaq) && /^(GET STARTED|BOOK A FREE SCOPING CALL|GET IN TOUCH)$/i.test(T(x)));
    if(pcta[0]) res.pricingCta = T(pcta[0]);
    const planH4 = all.filter(x=>x.tagName==="H4" && yPri!=null && Y(x)>yPri && (yFaq==null||Y(x)<yFaq));
    res.plans = planH4.map(h=>{
      const x0 = h.getBoundingClientRect().x;
      const feats = all.filter(e=>e.tagName==="P" && Y(e)>Y(h) && Y(e)<Y(h)+420 && Math.abs(e.getBoundingClientRect().x-x0)<160 && T(e).length>6 && !/^\/month|^GET STARTED/i.test(T(e)));
      const price = all.filter(e=>e.tagName==="P" && Y(e)>Y(h) && Y(e)<Y(h)+90 && /^[$£€]?\d+$/.test(T(e)) && Math.abs(e.getBoundingClientRect().x-x0)<200).map(T)[0]||"";
      return { name:T(h), price, features:[...new Set(feats.map(T))].filter(t=>!/^\d+$/.test(t)) };
    });
    const toggle = all.filter(x=>/^Monthly$|^Yearly$|Save 20%/i.test(T(x))).map(T);
    res.pricingToggle = [...new Set(toggle)];

    // faq questions
    res.faqQuestions = all.filter(x=>x.tagName==="H4" && yFaq!=null && Y(x)>yFaq).map(T);
    return res;
  });
  console.log(slug, "| plans:",out[slug].plans.length, "| steps:",out[slug].steps.length, "| faqs:",out[slug].faqQuestions.length, "| facts:",out[slug].facts.length);
  await p.close();
}
await writeFile("extracted/services-parsed.json", JSON.stringify(out,null,1));
await b.close();
