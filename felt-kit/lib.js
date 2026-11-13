/* ===== Beatitudes, vertical 720x1280 ===== */
const ILL={};
function thick(d,col,w){return `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${w+14}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`}
const CROWN=`<path d="M-36 22 L-36 -12 L-18 4 L0 -26 L18 4 L36 -12 L36 22Z" fill="${C.yel}" ${S}/><circle cy="-32" r="7" fill="${C.red}" ${S} stroke-width="4"/>`;

/* ---------- scene builders ---------- */
function clear(bg){content.innerHTML='';content.style.background=bg||C.paper}
function spanify(e,txt){return [...txt].map(ch=>{const s=document.createElement('span');s.textContent=ch;s.style.cssText='display:inline-block;white-space:pre';e.appendChild(s);return s})}
function concept(cfg){return{cfg,build(){const WT=cfg.wt,LT=cfg.lt,VT=cfg.vt;clear(C.paper);const pc=cfg.pc;
 const dec1=el('div',`left:610px;top:1110px;width:80px;height:80px;border-radius:50%;background:${cfg.d1||C.pink};filter:url(#r0)`);
 const dec2=el('div',`left:636px;top:44px;width:44px;height:44px;background:${cfg.d2||C.blue};filter:url(#r1)`);
 const tag=el('div',`left:50px;top:48px;height:36px;padding:0 14px;line-height:36px;background:${C.ink};color:${C.cream};font-weight:600;font-size:16px;letter-spacing:2.5px`,0,cfg.tag);
 const name=el('div',`left:52px;top:100px;font-weight:700;font-size:24px;letter-spacing:4px;color:${C.red2}`,0,cfg.name);
 const fs=Math.min(124,Math.floor(610/(cfg.word.length*.6)));const wd=el('div',`left:46px;top:126px;font-weight:700;font-size:${fs}px;line-height:1.08;color:${C.ink};white-space:nowrap;letter-spacing:-1px`);
 const letters=spanify(wd,cfg.word);letters.forEach(s=>s.style.opacity=0);
 const oy=126+Math.round(fs*1.08);
 const hl=el('div',`left:48px;top:${oy+30}px;width:${Math.min(600,cfg.orig.length*30+40)}px;height:26px;background:${C.yel};transform-origin:left;transform:scaleX(0)`);
 const og=el('div',`left:52px;top:${oy-4}px;font-size:50px;font-weight:700;color:${C.red2};font-family:'DejaVu Sans',sans-serif;opacity:0`,0,cfg.orig);
 const panel=el('div',`left:50px;top:330px;width:620px;height:560px;background:${pc}`);
 const sv=svgBox('left:110px;top:360px;width:500px;height:500px');const ups=ILL[cfg.ill](sv);
 const lines=cfg.lines.map((l,i)=>el('div',`left:52px;top:${915+i*46}px;font-size:34px;font-weight:700;line-height:1.2;color:${C.ink};opacity:0;white-space:nowrap`,0,l));
 const verse=el('div',`left:52px;top:${915+cfg.lines.length*46+22}px;padding:8px 16px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:24px;color:${C.ink};opacity:0;white-space:nowrap`,0,cfg.verse);
 return t=>{const b=Math.floor(t*4);panel.style.filter=`url(#r${b%3}) drop-shadow(5px 7px 6px rgba(45,28,16,.35))`;const pp=eo(pr(t,0,.55));panel.style.transform=`translateY(${(1-pp)*900}px) rotate(${(rnd(b)-.5)*.2}deg)`;
  dec1.style.filter=`url(#r${(b+1)%3})`;dec2.style.filter=`url(#r${(b+2)%3})`;pop(dec1,t,.3,0,.5,1);pop(dec2,t,.4,12,.5,2);
  pop(sv,t,.45,0,.6,3);ups(Math.max(0,t-.5));pop(tag,t,.15,-1,.4,4);pop(name,t,.25,0,.4,5);
  letters.forEach((s,i)=>{const p=pr(t,WT+i*.06,.35);s.style.opacity=p>0?1:0;s.style.transform=`translateY(${(1-eb(p))*40}px) rotate(${(rnd(i*3+b)-.5)*(p>=1?1:0)}deg) scale(${lerp(.4,1,eb(p))})`});
  hl.style.transform=`scaleX(${eo(pr(t,WT+.8,.45))}) rotate(-1deg)`;og.style.opacity=eo(pr(t,WT+.6,.3));
  lines.forEach((l,i)=>rise(l,t,LT[i]));pop(verse,t,VT,-2,.45,6)}}}}
