/* concept card: English and original word together. Safe zone: x 80..610, y 150..~1030 */
function concept2(cfg){return{cfg,build(){const z=this.start,WT=cfg.wt-z,LT=cfg.lt.map(x=>x-z),VT=cfg.vt-z;clear(C.paper);const pc=cfg.pc;
 const dec1=el('div',`left:560px;top:1060px;width:70px;height:70px;border-radius:50%;background:${cfg.d1||C.pink};filter:url(#r0)`);
 const dec2=el('div',`left:570px;top:146px;width:36px;height:36px;background:${cfg.d2||C.blue};filter:url(#r1)`);
 const tag=el('div',`left:80px;top:150px;height:34px;padding:0 14px;line-height:34px;background:${C.ink};color:${C.cream};font-weight:600;font-size:16px;letter-spacing:2.5px`,0,cfg.tag);
 const name=el('div',`left:82px;top:196px;font-weight:700;font-size:21px;letter-spacing:3px;color:${C.red2};white-space:nowrap`,0,cfg.name);
 const fs=Math.min(108,Math.floor(530/(cfg.word.length*.6)));const wd=el('div',`left:76px;top:222px;font-weight:700;font-size:${fs}px;line-height:1.08;color:${C.ink};white-space:nowrap;letter-spacing:-1px`);
 const letters=spanify(wd,cfg.word);letters.forEach(s=>s.style.opacity=0);
 const oy=222+Math.round(fs*1.08);
 const hl=el('div',`left:78px;top:${oy+30}px;width:${Math.min(cfg.hw||400,520)}px;height:24px;background:${C.yel};transform-origin:left;transform:scaleX(0)`);
 const og=el('div',`left:82px;top:${oy-6}px;white-space:nowrap;opacity:0;color:${C.red2};font-weight:700`,0,`<span style="font-size:44px">${cfg.tr}</span><span style="font-size:36px;color:${C.ink};padding:0 12px">·</span><span style="font-size:42px;font-family:'DejaVu Sans',sans-serif">${cfg.orig}</span>`);
 const panel=el('div',`left:80px;top:${oy+80}px;width:530px;height:400px;background:${pc}`);
 const sv=svgBox(`left:155px;top:${oy+90}px;width:380px;height:380px`);const ups=ILL[cfg.ill](sv);
 const ly=oy+505;
 const lines=cfg.lines.map((l,i)=>{const f=Math.min(30,Math.floor(530/(l.length*.52)));return el('div',`left:82px;top:${ly+i*42}px;font-size:${f}px;font-weight:700;line-height:1.2;color:${C.ink};opacity:0;white-space:nowrap`,0,l)});
 const verse=el('div',`left:82px;top:${ly+cfg.lines.length*42+12}px;padding:6px 14px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink};opacity:0;white-space:nowrap`,0,cfg.verse);
 return t=>{const b=Math.floor(t*4);panel.style.filter=`url(#r${b%3}) drop-shadow(5px 7px 6px rgba(45,28,16,.35))`;const pp=eo(pr(t,0,.55));panel.style.transform=`translateY(${(1-pp)*900}px) rotate(${(rnd(b)-.5)*.2}deg)`;
  dec1.style.filter=`url(#r${(b+1)%3})`;dec2.style.filter=`url(#r${(b+2)%3})`;pop(dec1,t,.3,0,.5,1);pop(dec2,t,.4,12,.5,2);
  pop(sv,t,.45,0,.6,3);ups(Math.max(0,t-.5));pop(tag,t,.15,-1,.4,4);pop(name,t,.25,0,.4,5);
  letters.forEach((s,i)=>{const p=pr(t,WT+i*.05,.35);s.style.opacity=p>0?1:0;s.style.transform=`translateY(${(1-eb(p))*40}px) scale(${lerp(.4,1,eb(p))})`});
  hl.style.transform=`scaleX(${eo(pr(t,WT+.4,.45))}) rotate(-1deg)`;og.style.opacity=eo(pr(t,WT+.2,.3));
  lines.forEach((l,i)=>rise(l,t,LT[i]));pop(verse,t,VT,-2,.45,6)}}}}
