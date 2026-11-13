/* ===== Good Road: 3 John 2 (vertical). Safe zone x 80..610 ===== */
const T={sub:0.88,
 h1:4.64,h2:7.44,h3:9.6,h4:11.52,h5:13.68,
 v1:14.96,v2:16.8,v3:18.56,ref:21.28,old:23.12,
 vb:25.6,
 pw:26.88,p1:29.44,p2:34.0,p3:40.11,pv:31.04,
 hw:43.6,he1:45.76,he2:47.52,he3:49.12,hv:50.4,
 sw:52.08,s1:54.0,s2:56.88,s3:61.76,sv:59.52,
 r1:64.88,r2:67.6,r3:69.36,r4:73.08,
 sp:75.6,sp1:78.52,sp2:82.24,sp3:84.24,
 put:88.48,gai:89.84,jo:94.08,pile:97.36,c1:98.8,c2:100.24,c3:101.8,
 wh:104.72,gk:106.64,js1:109.68,js2:112.0,st:114.68,
 say:118.24,d1:119.36,d2:121.2,ref2:123.6};
const B=[0,4.5,14.85,25.5,26.8,43.5,51.95,64.8,75.5,88.35,104.6,118.1,126.0];

const ROBE=(c,s,head,staff)=>`<g transform="scale(${s})">${staff?`<path d="M26 -46 L30 30" stroke="${C.brown}" stroke-width="6" stroke-linecap="round"/><path d="M26 -46 L30 30" stroke="${C.ink}" stroke-width="2" opacity=".5"/>`:''}
 <path d="M-20 30 Q-22 -8 0 -8 Q22 -8 20 30Z" fill="${c}" ${S} stroke-width="5"/><path d="M-6 -6 L-2 30" stroke="${C.ink}" stroke-width="3" opacity=".35"/>
 <circle cy="-22" r="14" fill="${head||'#C99572'}" ${S} stroke-width="5"/><path d="M-15 -26 Q0 -44 15 -26 L17 -10 Q14 -20 9 -24 Q0 -30 -9 -24 Q-14 -20 -17 -10Z" fill="${C.cream}" ${S} stroke-width="4"/>
 ${staff?`<circle cx="22" cy="2" r="6" fill="${head||'#C99572'}" ${S} stroke-width="4"/>`:''}</g>`;
const ROAD=(w)=>`<path d="M${w*.42} 500 C${w*.3} 420 ${w*.75} 380 ${w*.6} 300 C${w*.5} 250 ${w*.62} 220 ${w*.55} 180" fill="none" stroke="${C.ink}" stroke-width="74" stroke-linecap="round"/><path d="M${w*.42} 500 C${w*.3} 420 ${w*.75} 380 ${w*.6} 300 C${w*.5} 250 ${w*.62} 220 ${w*.55} 180" fill="none" stroke="#D9BE8C" stroke-width="62" stroke-linecap="round"/><path d="M${w*.42} 500 C${w*.3} 420 ${w*.75} 380 ${w*.6} 300 C${w*.5} 250 ${w*.62} 220 ${w*.55} 180" fill="none" stroke="${C.cream}" stroke-width="4" stroke-dasharray="14 16" opacity=".8"/>`;
const HILLS=`<rect width="500" height="500" rx="8" fill="${C.sky}"/><circle cx="410" cy="90" r="38" fill="${C.yel}" ${S}/><path d="M0 230 Q120 150 250 210 Q380 140 500 200 V500 H0Z" fill="#9AA86A" ${S}/><path d="M0 320 Q160 260 300 310 Q420 280 500 300 V500 H0Z" fill="${C.green}" ${S}/>`;
const COIN=(x,y)=>`<g transform="translate(${x} ${y})"><ellipse rx="34" ry="12" fill="${C.yel}" ${S} stroke-width="5"/></g>`;
const DOVE=`<path d="M-30 0 Q0 -14 30 -2 Q40 0 46 -6 Q44 6 30 6 Q0 18 -30 0Z" fill="${C.cream}" ${S} stroke-width="5"/><path id="dw" d="M-4 -4 Q8 -40 34 -48 Q28 -20 14 -2Z" fill="${C.cream}" ${S} stroke-width="5"/><circle cx="34" cy="-4" r="2.5" fill="${C.ink}"/>`;
const CROSS=`<rect x="-10" y="-120" width="20" height="150" fill="${C.brown}" ${S}/><rect x="-56" y="-90" width="112" height="18" fill="${C.brown}" ${S}/>`;
const SCROLL=`<rect x="-120" y="-60" width="240" height="120" fill="${C.cream}" ${S}/><rect x="-140" y="-74" width="28" height="148" rx="12" fill="${C.brown}" ${S}/><rect x="112" y="-74" width="28" height="148" rx="12" fill="${C.brown}" ${S}/>${[0,1,2,3].map(i=>`<path d="M-96 ${-34+i*22} H96" stroke="${C.ink}" stroke-width="4" opacity=".4" stroke-linecap="round"/>`).join('')}`;

/* illustrations (500x500) */
ILL.walk=svg=>{svg.innerHTML=HILLS+ROAD(500)+`<g id="wk">${ROBE(C.blue,1.6,0,1)}</g><g id="sg" transform="translate(120 250)"><rect x="-6" y="0" width="12" height="80" fill="${C.brown}" ${S} stroke-width="4"/><rect x="-62" y="-36" width="124" height="44" fill="${C.cream}" ${S} stroke-width="5"/><text y="-6" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="24" fill="${C.ink}">eu + hodos</text></g>`;
 clipSvg(svg,500,500);const wk=q(svg,'wk');return t=>{const k=(t*.06)%1,y=lerp(470,250,k),x=lerp(205,300,Math.sin(k*3.1))*1;wk.setAttribute('transform',`translate(${x} ${y+Math.abs(Math.sin(t*5))*-3}) scale(${lerp(1,.6,k)})`)}};
ILL.pulse=svg=>{svg.innerHTML=`<rect width="500" height="500" rx="8" fill="${C.pink}"/><g transform="translate(250 230) scale(3)"><path d="M0 30 C-60 -10 -40 -60 0 -32 C40 -60 60 -10 0 30Z" fill="${C.red}" ${S}/></g><path id="pl" fill="none" stroke="${C.cream}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(400 400)"><circle r="40" fill="${C.green}" ${S}/><path d="M-18 0 L-4 14 L20 -14" fill="none" stroke="${C.cream}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></g>`;
 const pl=q(svg,'pl');return t=>{const o=(t*120)%420;let d='';for(let x=60;x<=440;x+=10){const u=((x-60-o)%420+420)%420;const y=u>180&&u<220?220-Math.sin((u-180)/40*Math.PI*2)*70:220;d+=(x===60?'M':'L')+x+' '+y.toFixed(1)}pl.setAttribute('d',d)}};
ILL.measure=svg=>{svg.innerHTML=`<rect width="500" height="500" rx="8" fill="${C.sky}"/><g transform="translate(200 300)"><path d="M-90 170 Q-90 20 0 20 Q90 20 90 170Z" fill="${C.blue}" ${S}/><circle cy="-40" r="56" fill="#E0B394" ${S}/><g id="gl">${[...Array(8)].map((_,i)=>{const a=i/8*Math.PI*2;return `<line x1="${Math.cos(a)*38}" y1="${90+Math.sin(a)*38}" x2="${Math.cos(a)*58}" y2="${90+Math.sin(a)*58}" stroke="${C.yel}" stroke-width="6" stroke-linecap="round"/>`}).join('')}</g><path d="M0 110 C-30 86 -20 66 0 78 C20 66 30 86 0 110Z" fill="${C.yel}" ${S} stroke-width="5"/></g>
 <g transform="translate(380 60)"><rect width="56" height="400" fill="${C.yel}" ${S}/>${[...Array(13)].map((_,i)=>`<path d="M0 ${20+i*30} h${i%2?16:28}" stroke="${C.ink}" stroke-width="4"/>`).join('')}</g><path id="ar" d="M300 390 H370" stroke="${C.red}" stroke-width="10" stroke-linecap="round"/>`;
 const gl=q(svg,'gl'),ar=q(svg,'ar');return t=>{gl.setAttribute('opacity',.5+.5*Math.sin(t*2));ar.setAttribute('transform',`translate(0 ${-Math.min(t*14,60)})`)}};

const SC=[];
/* 0 title */
SC.push({build(){clear(C.yel);
 const r1=el('div',`left:80px;top:200px;width:530px;text-align:center;font-weight:700;font-size:100px;line-height:1;color:${C.ink};letter-spacing:-2px;white-space:nowrap`);const a=spanify(r1,'GOOD ROAD');
 const sub=el('div',`left:80px;top:320px;width:530px;text-align:center;font-weight:700;font-size:32px;color:${C.red2}`,0,'What "prosper" means in 3 John 2');
 const sv=svgBox('left:110px;top:420px;width:470px;height:470px','0 0 500 500');const ups=ILL.walk(sv);
 return t=>{a.forEach((s,i)=>{const p=pr(t,.05+i*.04,.4);s.style.opacity=p>0?1:0;s.style.transform=`translateY(${(1-eb(p))*40}px) scale(${lerp(.4,1,eb(p))})`});pop(sub,t,T.sub,-1,.45,1);pop(sv,t,.5,0,.6,2);ups(t+3)}}});
/* 1 hook */
SC.push({build(){const z=this.start;clear(C.paper);
 const q1=el('div',`left:80px;top:200px;width:530px;font-weight:700;font-size:42px;line-height:1.15;color:${C.ink}`,0,'"Beloved, I pray that you may prosper."');
 const t2=el('div',`left:80px;top:330px;font-weight:700;font-size:36px;color:${C.red2}`,0,'A promise of more?');
 const sv=svgBox('left:110px;top:400px;width:470px;height:430px','0 0 500 460');
 sv.innerHTML=`<rect width="500" height="460" rx="10" fill="#E8DCC4"/><g id="pile">${[[250,380],[200,360],[300,360],[250,340],[220,320],[280,320],[250,300],[250,280]].map(p=>COIN(p[0],p[1])).join('')}<g transform="translate(130 330)"><rect x="-50" y="-30" width="100" height="64" rx="8" fill="${C.green}" ${S}/><circle r="16" fill="#A8B47A" ${S} stroke-width="4"/></g><g transform="translate(380 320)"><rect x="-44" y="-50" width="88" height="88" fill="${C.red}" ${S}/><path d="M-44 -20 H44 M0 -50 V38" stroke="${C.yel}" stroke-width="10"/></g></g>
 <g id="x" opacity="0"><path d="M90 230 L410 420 M410 230 L90 420" stroke="${C.red}" stroke-width="14" stroke-linecap="round"/></g>
 <g id="rd" opacity="0"><rect width="500" height="460" rx="10" fill="${C.sky}"/><path d="M0 200 Q250 140 500 190 V460 H0Z" fill="${C.green}" ${S}/>${ROAD(500).replace(/500 C/g,'460 C')}</g>`;clipSvg(sv,500,460);
 const pile=q(sv,'pile'),x=q(sv,'x'),rd=q(sv,'rd');
 const t3=el('div',`left:80px;top:860px;width:530px;font-weight:700;font-size:40px;color:${C.ink}`,0,'The Greek paints a <span style="background:'+C.yel+';padding:0 8px">road.</span>');
 return t=>{rise(q1,t,T.h1-z);rise(t2,t,T.h2-z);pop(sv,t,T.h2+.3-z,0,.5,1);pile.setAttribute('opacity',t>T.h5-z?0:1);x.setAttribute('opacity',t>T.h4-z&&t<T.h5-z?1:0);rd.setAttribute('opacity',t>T.h5-z?1:0);rise(t3,t,T.h4-z)}}});
/* 2 verse */
SC.push({build(){const z=this.start;clear(C.navy);
 const L=['"Beloved, I pray that all may go','well with you and that you may','be in good health, as it goes','well with your soul."'];
 const els=L.map((l,i)=>el('div',`left:80px;top:${220+i*58}px;font-weight:700;font-size:37px;line-height:1.15;color:${C.cream};white-space:nowrap`,0,l));
 const r=el('div',`left:82px;top:470px;padding:6px 14px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:24px;color:${C.ink}`,0,'3 John 2 · ESV');
 const o=el('div',`left:80px;top:560px;width:530px;font-weight:700;font-size:32px;color:${C.yel}`,0,'Older translations: "prosper"');
 const sv=svgBox('left:110px;top:650px;width:470px;height:330px','0 0 500 350');sv.innerHTML=`<rect width="500" height="350" rx="10" fill="#6F7F86"/><path d="M0 200 Q140 150 260 190 Q390 140 500 180 V350 H0Z" fill="#5E7350" stroke="#3A2A1F" stroke-width="7"/><path d="M0 260 Q250 200 500 250 V350 H0Z" fill="#2E5A44" ${S}/><path d="M60 350 C120 300 300 300 340 240 C370 200 420 190 470 170" fill="none" stroke="#D9BE8C" stroke-width="30" stroke-linecap="round"/><circle cx="420" cy="80" r="34" fill="${C.yel}" ${S}/>`;clipSvg(sv,500,350);
 return t=>{els.forEach((e,i)=>rise(e,t,[T.v1,T.v2-.4,T.v3-.2,T.v3+1][i]-z,.5));pop(r,t,T.ref-z,-2,.4,1);rise(o,t,T.old-z);pop(sv,t,.6,0,.5,2)}}});
/* 3 verse breakdown */
SC.push({build(){clear(C.blue);
 const a=el('div',`left:80px;top:420px;width:530px;text-align:center;font-weight:700;font-size:36px;letter-spacing:6px;color:${C.yel}`,0,'3 JOHN 2');
 const b=el('div',`left:80px;top:480px;width:530px;text-align:center;font-weight:700;font-size:96px;line-height:1;color:${C.cream}`);const L=spanify(b,'VERSE');const c=el('div',`left:80px;top:585px;width:530px;text-align:center;font-weight:700;font-size:84px;line-height:1;color:${C.cream}`);const L2=spanify(c,'BREAKDOWN');
 return t=>{pop(a,t,.1,-1,.4,1);[...L,...L2].forEach((s,i)=>{const p=pr(t,.1+i*.03,.35);s.style.opacity=p>0?1:0;s.style.transform=`translateY(${(1-eb(p))*40}px) scale(${lerp(.4,1,eb(p))})`})}}});
/* 4 prosper */
SC.push(concept2({tag:'GREEK · PROSPER',name:'TO BE LED ALONG A GOOD ROAD',word:'Prosper',tr:'euodoō',orig:'εὐοδόω',hw:360,lines:['eu = good · hodos = road','Literally: led along a good road.','Paul: "succeed in coming to you."'],lt:[T.p1,T.p2,T.p3],wt:T.pw,vt:T.p3+1.4,verse:'3 John 2 · Romans 1:10',ill:'walk',pc:C.sky,d1:C.yel,d2:C.red}));
/* 5 health */
SC.push(concept2({tag:'GREEK · HEALTH',name:'SOUND, WHOLE',word:'Health',tr:'hygiainō',orig:'ὑγιαίνω',hw:330,lines:['Where we get "hygiene."','Sound and whole.','Same word: "sound doctrine."'],lt:[T.he1,T.he2,T.he3],wt:T.hw,vt:T.hv,verse:'3 John 2 · 1 Timothy 1:10',ill:'pulse',pc:C.pink,d1:C.green,d2:C.yel}));
/* 6 soul */
SC.push(concept2({tag:'GREEK · SOUL',name:'YOUR INNER LIFE',word:'Soul',tr:'psychē',orig:'ψυχή',hw:260,lines:['Your inner life.','John\'s measuring stick.','The soul\'s road sets the pace.'],lt:[T.s1,T.s2,T.s3],wt:T.sw,vt:T.sv,verse:'3 John 2',ill:'measure',pc:C.sky,d1:C.pink,d2:C.blue}));
/* 7 redeemed */
SC.push({build(){const z=this.start;clear(C.paper);
 const t1=el('div',`left:80px;top:200px;width:530px;font-weight:700;font-size:40px;line-height:1.15;color:${C.ink}`,0,'No soul starts on a good road on its own.');
 const t2=el('div',`left:80px;top:310px;padding:8px 18px;background:${C.red};font-weight:700;font-size:36px;color:${C.cream};white-space:nowrap`,0,'It has to be redeemed.');
 const sv=svgBox('left:110px;top:390px;width:470px;height:330px','0 0 500 350');
 sv.innerHTML=`<rect width="500" height="350" rx="10" fill="#E9C98E"/><circle cx="250" cy="120" r="80" fill="${C.yel}" opacity=".5"/><path d="M0 250 Q250 170 500 250 V350 H0Z" fill="${C.green}" ${S}/><g transform="translate(250 220)">${CROSS}</g><path d="M240 250 C230 290 180 310 140 350" fill="none" stroke="#D9BE8C" stroke-width="34" stroke-linecap="round"/><g id="pp" transform="translate(170 316)">${ROBE(C.blue,1.3)}</g>`;clipSvg(sv,500,350);
 const qv=el('div',`left:80px;top:745px;width:530px;padding:16px 20px;background:${C.cream};border:4px solid ${C.ink};box-sizing:border-box;font-weight:700;font-size:30px;line-height:1.2;color:${C.ink}`,0,'"But God will ransom my soul from the power of Sheol."');
 const r=el('div',`left:82px;top:880px;padding:5px 12px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink}`,0,'Psalm 49:15');
 const j=el('div',`left:80px;top:940px;font-weight:700;font-size:32px;color:${C.red2};white-space:nowrap`,0,'Jesus paid the ransom.');
 return t=>{rise(t1,t,T.r1-z);pop(t2,t,T.r2-z,-1,.45,1);pop(sv,t,T.r1+.6-z,0,.5,2);pop(qv,t,T.r3-z,-1,.5,3);pop(r,t,T.r3+1.6-z,-2,.4,4);rise(j,t,T.r4-z)}}});
/* 8 spirit */
SC.push({build(){const z=this.start;clear(C.sky);
 const h=el('div',`left:80px;top:200px;width:530px;font-weight:700;font-size:40px;line-height:1.15;color:${C.ink}`,0,'The Holy Spirit makes us new.');
 const q1=el('div',`left:80px;top:270px;width:530px;padding:14px 20px;background:${C.cream};border:4px solid ${C.ink};box-sizing:border-box;font-weight:700;font-size:28px;line-height:1.2;color:${C.ink}`,0,'"...the washing of regeneration and renewal of the Holy Spirit." <span style="font-size:20px;color:'+C.red2+'">TITUS 3:5</span>');
 const sv=svgBox('left:110px;top:420px;width:470px;height:360px','0 0 500 380');
 sv.innerHTML=`<rect width="500" height="380" rx="10" fill="#C9D9CF"/><path d="M0 240 Q250 180 500 230 V380 H0Z" fill="${C.green}" ${S}/><path d="M40 380 C140 320 300 300 360 250 C400 220 440 215 500 210" fill="none" stroke="${C.ink}" stroke-width="44" stroke-linecap="round"/><path d="M40 380 C140 320 300 300 360 250 C400 220 440 215 500 210" fill="none" stroke="#D9BE8C" stroke-width="34" stroke-linecap="round"/>
 <g id="pp">${ROBE(C.red,1.5,0,1)}</g><g id="dv">${DOVE}</g>`;clipSvg(sv,500,380);
 const pp=q(sv,'pp'),dv=q(sv,'dv'),dw=q(sv,'dw');
 const q2=el('div',`left:80px;top:810px;width:530px;font-weight:700;font-size:32px;line-height:1.2;color:${C.ink}`,0,'"If we live by the Spirit, let us also keep in step with the Spirit."');
 const r2=el('div',`left:82px;top:935px;padding:5px 12px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink}`,0,'Galatians 5:25');
 return t=>{rise(h,t,.1);pop(q1,t,T.sp1-z,-1,.5,1);pop(sv,t,.5,0,.5,2);const k=eio(pr(t,T.sp2-z,6));const x=lerp(120,330,k),y=lerp(330,270,k);pp.setAttribute('transform',`translate(${x} ${y-Math.abs(Math.sin(t*5))*3})`);
  dv.setAttribute('transform',`translate(${x+10} ${y-140+Math.sin(t*2)*8})`);dw.setAttribute('transform',`scale(1 ${.4+.6*Math.abs(Math.sin(t*4))})`);dv.setAttribute('opacity',t>T.sp-z+.3?1:0);
  rise(q2,t,T.sp3-z);pop(r2,t,T.sp3+2-z,-2,.4,3)}}});
/* 9 put it together */
SC.push({build(){const z=this.start;clear(C.paper);
 const h=el('div',`left:80px;top:200px;font-weight:700;font-size:28px;letter-spacing:4px;color:${C.red2}`,0,'PUT IT TOGETHER');
 const sv=svgBox('left:110px;top:250px;width:470px;height:360px','0 0 500 380');
 sv.innerHTML=`<rect width="500" height="380" rx="10" fill="${C.sky}"/><path d="M0 280 Q250 240 500 270 V380 H0Z" fill="${C.green}" ${S}/>
 <g transform="translate(130 250)"><rect x="-90" y="-110" width="180" height="140" fill="#D8C3A0" ${S}/><path d="M-100 -110 H100 V-128 H-100Z" fill="${C.brown}" ${S} stroke-width="5"/><rect x="-26" y="-60" width="52" height="90" fill="${C.yel}" ${S}/><rect x="-70" y="-80" width="30" height="30" fill="${C.navy}" ${S} stroke-width="4"/><rect x="40" y="-80" width="30" height="30" fill="${C.navy}" ${S} stroke-width="4"/><g transform="translate(0 6)">${ROBE(C.green,1.2)}</g></g>
 <path d="M160 300 C260 300 330 270 500 250" fill="none" stroke="#D9BE8C" stroke-width="26" stroke-linecap="round"/>
 <g id="m1">${ROBE(C.blue,1.3,0,1)}</g><g id="m2">${ROBE(C.red,1.3,'#B07A50',1)}</g>`;clipSvg(sv,500,380);
 const m1=q(sv,'m1'),m2=q(sv,'m2');
 const g=el('div',`left:80px;top:630px;width:530px;font-weight:700;font-size:30px;line-height:1.2;color:${C.ink}`,0,'Gaius sent missionaries on their journey.');
 const jo=el('div',`left:80px;top:705px;padding:8px 16px;background:${C.green};font-weight:700;font-size:32px;color:${C.ink};white-space:nowrap`,0,'May your road go well too.');
 const pl=el('div',`left:80px;top:785px;font-weight:700;font-size:30px;color:${C.red2};white-space:nowrap`,0,'Not a pile of wealth.');
 const sk=el('div',`left:74px;top:806px;width:310px;height:8px;background:${C.red};transform-origin:left;transform:scaleX(0)`);
 const ch=['A redeemed soul','In step with the Spirit','Every part of life'].map((s,i)=>el('div',`left:${[80,80,80][i]}px;top:${[845,900,955][i]}px;padding:5px 14px;background:${C.cream};border:3px solid ${C.ink};font-weight:700;font-size:28px;color:${C.ink};white-space:nowrap`,0,s));
 return t=>{rise(h,t,.1);pop(sv,t,.4,0,.5,1);const k=eio(pr(t,T.gai-z,8));m1.setAttribute('transform',`translate(${lerp(200,420,k)} ${lerp(296,260,k)-Math.abs(Math.sin(t*5))*3})`);m2.setAttribute('transform',`translate(${lerp(160,370,k)} ${lerp(302,268,k)-Math.abs(Math.sin(t*5+1))*3})`);
  rise(g,t,T.gai-z);pop(jo,t,T.jo-z,-1,.45,2);rise(pl,t,T.pile-z);sk.style.transform=`scaleX(${eo(pr(t,T.pile+.6-z,.35))})`;ch.forEach((c,i)=>pop(c,t,[T.c1,T.c2,T.c3][i]-z,[-1,1,-1][i],.4,3+i))}}});
/* 10 joshua */
SC.push({build(){const z=this.start;clear(C.paper);
 const h=el('div',`left:80px;top:200px;width:530px;font-weight:700;font-size:44px;line-height:1.12;color:${C.ink}`,0,'Where does a good road start?');
 const tg=el('div',`left:80px;top:320px;padding:6px 14px;background:${C.ink};font-weight:600;font-size:20px;letter-spacing:2px;color:${C.cream};white-space:nowrap`,0,'SAME WORD IN THE GREEK OLD TESTAMENT');
 const qv=el('div',`left:80px;top:380px;width:530px;padding:16px 20px;background:${C.cream};border:4px solid ${C.ink};box-sizing:border-box;font-weight:700;font-size:30px;line-height:1.2;color:${C.ink}`,0,'"You shall meditate on it day and night... <span id="qb" style="opacity:0;background:'+C.yel+'">For then you will make your way prosperous."</span>');
 const r=el('div',`left:82px;top:560px;padding:5px 12px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink}`,0,'Joshua 1:8');
 const sv=svgBox('left:110px;top:620px;width:470px;height:270px','0 0 500 290');sv.innerHTML=`<rect width="500" height="290" rx="10" fill="${C.sky}"/><path d="M0 200 Q250 160 500 190 V290 H0Z" fill="${C.green}" ${S}/><path d="M250 210 C300 190 360 170 500 150" fill="none" stroke="#D9BE8C" stroke-width="26" stroke-linecap="round"/><g transform="translate(170 180) scale(.8)">${SCROLL}</g><g id="gl">${[...Array(7)].map((_,i)=>{const a=-Math.PI*(i/6);return `<line x1="${170+Math.cos(a)*140}" y1="${170+Math.sin(a)*110}" x2="${170+Math.cos(a)*165}" y2="${170+Math.sin(a)*130}" stroke="${C.yel}" stroke-width="7" stroke-linecap="round"/>`}).join('')}</g>`;clipSvg(sv,500,290);
 const gl=q(sv,'gl');const qb=qv.querySelector('#qb');
 const s=el('div',`left:80px;top:915px;width:530px;font-weight:700;font-size:32px;line-height:1.2;color:${C.red2}`,0,'It starts in the soul, with God\'s Word.');
 return t=>{rise(h,t,T.wh-z);pop(tg,t,T.gk-z,-1,.4,1);pop(qv,t,T.js1-z,-1,.5,2);qb.style.opacity=t>T.js2-z?1:0;pop(r,t,T.js1+1.2-z,-2,.4,3);pop(sv,t,T.js1+.4-z,0,.5,4);gl.setAttribute('opacity',t>T.st-z?.6+.4*Math.sin(t*2):0);rise(s,t,T.st-z)}}});
/* 11 declaration */
SC.push({build(){const z=this.start;clear(C.navy);
 const sun=el('div',`left:120px;top:900px;width:480px;height:480px;border-radius:50%;background:${C.yel};filter:url(#r0)`);
 const say=el('div',`left:80px;top:200px;padding:10px 20px;background:${C.cream};font-weight:700;font-size:30px;letter-spacing:4px;color:${C.ink}`,0,'SAY IT WITH ME');
 const L=['"He restores my soul.','He leads me in paths','of righteousness','for his name\'s sake."'];
 const els=L.map((l,i)=>el('div',`left:80px;top:${300+i*68}px;font-weight:700;font-size:48px;line-height:1.15;color:${C.cream};white-space:nowrap`,0,l));
 const r1=el('div',`left:84px;top:590px;font-weight:600;font-size:26px;letter-spacing:3px;color:${C.yel}`,0,'PSALM 23:3 · ESV');
 return t=>{sun.style.filter=`url(#r${Math.floor(t*4)%3})`;sun.style.transform=`translateY(${eio(pr(t,0,10))*100}px)`;pop(say,t,.1,-2,.45,1);
  els.forEach((x,i)=>rise(x,t,[T.d1,T.d2,T.d2+1,T.d2+2][i]-z,.5));rise(r1,t,T.ref2-z,.4)}}});
