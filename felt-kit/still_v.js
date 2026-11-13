const {chromium}=require('playwright');
(async()=>{const [dir,out,...shots]=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:720,height:1280}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+dir+'/index.html');await p.evaluate(()=>document.fonts.ready);
for(const s of shots){const [i,t]=s.split(':').map(Number);await p.evaluate(i=>loadScene(i),i);for(let k=0;k<=Math.round(t*12);k+=6)await p.evaluate(x=>draw(x),k/12);await p.evaluate(t=>draw(t),t);await p.screenshot({path:`${out}/v_${String(i).padStart(2,'0')}.png`})}
console.log(errs.length?'ERRORS: '+errs.join(' | '):'no errors');await b.close()})();
