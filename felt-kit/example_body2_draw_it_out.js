/* ===== Draw It Out: the clearness committee (vertical) ===== */
const T={title:0,sub:1.44,
 fr:3.84,qk:8.16,cc:10.4,few:12.0,help:14.68,
 pv:17.12,pv2:19.6,
 dw:22.88,d1:26.56,d2:28.6,d3:30.44,dv:27.2,
 n1:32.4,l1:33.28,whole:35.2,p18:38.88,
 n2:43.44,a1:44.08,hon:45.88,dont:49.2,adv:52.0,try:53.92,where:55.01,watch:57.44,w1:58.4,w2:59.12,w3:59.84,
 n3:61.28,s1:62.08,ecc:64.0,pause:67.0,room:69.0,
 n4:71.92,r1:72.64,succ:74.16,deep:76.68,clar:78.24,free:79.28,
 put:80.96,care:82.08,inv:84.32,spa:85.92,step:87.68,
 yt:90.85,ytc:94.4,
 say:95.36,dec1:96.43,dec2:101.4,ref2:102.6};
const B=[0,3.8,17.0,22.84,32.3,43.4,61.2,71.85,80.9,90.84,95.34,105.0];

/* Quaker in plain dress. hat: 'hat' broad brim, 'bon' bonnet */
const QK=(c,s,hat,skin)=>`<g transform="scale(${s})"><path d="M-22 26 Q-22 -8 0 -8 Q22 -8 22 26Z" fill="${c}" ${S} stroke-width="5"/>
 <path d="M-9 -6 L0 6 L9 -6" fill="${C.cream}" ${S} stroke-width="4"/><circle cy="-22" r="14" fill="${skin||C.pink}" ${S} stroke-width="5"/>
 ${hat==='hat'?`<ellipse cy="-31" rx="25" ry="6" fill="${C.navy}" ${S} stroke-width="4"/><rect x="-12" y="-48" width="24" height="17" rx="4" fill="${C.navy}" ${S} stroke-width="4"/>`
 :hat==='bon'?`<path d="M-19 -18 Q-21 -44 0 -45 Q21 -44 19 -18 Q14 -34 0 -34 Q-14 -34 -19 -18Z" fill="${C.cream}" ${S} stroke-width="4"/>`:''}</g>`;
const GRAY='#8E877C',DUN='#9C8064',SLATE='#6E6A66';
const BENCH=(w)=>`<rect x="${-w/2}" y="0" width="${w}" height="14" rx="3" fill="${C.brown}" ${S} stroke-width="5"/><rect x="${-w/2+10}" y="14" width="10" height="26" fill="${C.brown}" ${S} stroke-width="4"/><rect x="${w/2-20}" y="14" width="10" height="26" fill="${C.brown}" ${S} stroke-width="4"/>`;
const WIN=(x,y)=>`<g transform="translate(${x} ${y})"><rect x="-34" y="-50" width="68" height="100" fill="#F3E3B0" ${S} stroke-width="5"/><path d="M0 -50 V50 M-34 0 H34" stroke="${C.ink}" stroke-width="4"/></g>`;
const NUMC=(n,c)=>`<circle r="54" fill="${c}" ${S}/><text y="22" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="66" fill="${C.cream}">${n}</text>`;

/* well with bucket */
ILL.well=svg=>{
 svg.innerHTML=`<rect width="500" height="500" rx="8" fill="${C.sky}"/><path d="M0 400 Q250 370 500 400 V500 H0Z" fill="${C.green}" ${S}/>
 <rect x="110" y="120" width="18" height="230" fill="${C.brown}" ${S}/><rect x="372" y="120" width="18" height="230" fill="${C.brown}" ${S}/>
 <path d="M80 130 L250 50 L420 130Z" fill="${C.red}" ${S}/><rect x="120" y="150" width="260" height="14" rx="7" fill="${C.brown}" ${S}/>
 <path id="rp" stroke="${C.ink}" stroke-width="5" fill="none"/>
 <g id="bk"><path d="M-26 0 L-20 46 H20 L26 0Z" fill="#9B6B40" ${S} stroke-width="5"/><path d="M-26 0 Q0 -26 26 0" fill="none" stroke="${C.ink}" stroke-width="4"/><ellipse cy="2" rx="22" ry="6" fill="#5E8FA8" stroke="${C.ink}" stroke-width="3"/></g>
 <g id="dr">${[0,1,2].map(i=>`<ellipse cx="${-10+i*10}" rx="4" ry="6" fill="#5E8FA8"/>`).join('')}</g>
 <path d="M100 300 H400 V420 Q250 440 100 420Z" fill="#A49A8C" ${S}/>${[0,1,2].map(r=>[0,1,2,3,4].map(k=>`<rect x="${104+k*60+(r%2)*30}" y="${306+r*38}" width="56" height="34" rx="6" fill="#B8AE9E" stroke="${C.ink}" stroke-width="3" opacity=".9"/>`).join('')).join('')}
 <ellipse cx="250" cy="300" rx="150" ry="18" fill="#2F4A57" ${S}/>`;
 const bk=q(svg,'bk'),rp=q(svg,'rp'),dr=q(svg,'dr');
 return t=>{const k=eio(pr(t,1,3.5)),y=lerp(300,190,k);bk.setAttribute('transform',`translate(250 ${y}) rotate(${Math.sin(t*1.5)*3})`);rp.setAttribute('d',`M250 157 V${y-12}`);
  dr.setAttribute('transform',`translate(250 ${y+50+((t*60)%40)})`);dr.setAttribute('opacity',k>.05&&k<.98?.9:0)};
};

const SC=[];
/* 0 title */
SC.push({build(){const z=this.start;clear(C.yel);
 const r1=el('div',`left:0;top:200px;width:720px;text-align:center;font-weight:700;font-size:100px;line-height:1;color:${C.ink};letter-spacing:-2px;white-space:nowrap`);const a=spanify(r1,'DRAW IT OUT');
 const sub=el('div',`left:0;top:335px;width:720px;text-align:center;font-weight:700;font-size:38px;color:${C.red2}`,0,'How to help someone hear God');
 const sv=svgBox('left:110px;top:430px;width:500px;height:500px','0 0 500 500');const ups=ILL.well(sv);
 return t=>{a.forEach((s,i)=>{const p=pr(t,.05+i*.04,.4);s.style.opacity=p>0?1:0;s.style.transform=`translateY(${(1-eb(p))*40}px) scale(${lerp(.4,1,eb(p))})`});pop(sub,t,T.sub-z,-1,.45,1);pop(sv,t,.5,0,.6,2);ups(t+1.5)}}});
/* 1 Quakers / clearness committee */
SC.push({build(){const z=this.start;clear(C.paper);
 const t1=el('div',`left:50px;top:200px;width:620px;font-weight:700;font-size:48px;line-height:1.12;color:${C.ink}`,0,'Facing a big decision?');
 const t2=el('div',`left:50px;top:268px;width:620px;font-weight:700;font-size:34px;line-height:1.15;color:${C.red2}`,0,'The Quakers have a practice:');
 const t3=el('div',`left:50px;top:324px;padding:10px 20px;background:${C.ink};font-weight:700;font-size:38px;letter-spacing:2px;color:${C.cream};white-space:nowrap`,0,'THE CLEARNESS COMMITTEE');
 const sv=svgBox('left:50px;top:400px;width:620px;height:500px','0 0 620 500');
 const ring=[[-200,30,GRAY,'hat','#E0B394'],[-120,-50,DUN,'bon',C.pink],[0,-80,SLATE,'hat','#B07A50'],[120,-50,GRAY,'bon','#E0B394'],[200,30,DUN,'hat',C.pink]];
 sv.innerHTML=`<rect width="620" height="500" rx="10" fill="#EFE6D2"/><path d="M0 0 H620 V40 H0Z" fill="#D9CDB4"/>${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>`<path d="M0 ${60+i*28} H620" stroke="#D3C6AC" stroke-width="3"/>`).join('')}
 ${WIN(130,150)}${WIN(490,150)}<path d="M0 380 H620 V500 H0Z" fill="#C9A77A" ${S}/>
 <g id="rg">${ring.map((r,i)=>`<g class="qq"><g transform="translate(${310+r[0]} ${354+r[1]*.6})">${QK(r[2],1.9,r[3],r[4])}</g></g>`).join('')}</g>
 <g transform="translate(310 430)"><rect x="-34" y="-8" width="68" height="12" fill="${C.brown}" ${S} stroke-width="4"/>${QK(C.blue,2.1,'none',C.pink)}</g>
 <g id="lt" opacity="0">${[...Array(9)].map((_,i)=>{const a=-Math.PI*(i/8);return `<line x1="${310+Math.cos(a)*90}" y1="${360+Math.sin(a)*90}" x2="${310+Math.cos(a)*120}" y2="${360+Math.sin(a)*120}" stroke="${C.yel}" stroke-width="7" stroke-linecap="round"/>`}).join('')}</g>`;
 const qq=[...sv.querySelectorAll('.qq')],lt=q(sv,'lt');
 const t4=el('div',`left:50px;top:925px;width:620px;font-weight:700;font-size:36px;line-height:1.2;color:${C.ink}`,0,'A few friends gather to help one person <span style="background:'+C.yel+';padding:0 8px">listen.</span>');
 return t=>{rise(t1,t,T.fr-z);rise(t2,t,T.qk-z);pop(t3,t,T.cc-z,-1,.45,1);pop(sv,t,T.qk+.3-z,0,.5,2);
  qq.forEach((g,i)=>{const p=eo(pr(t,T.few-z+i*.2,.6));g.style.opacity=p;g.style.transform=`translateY(${(1-p)*30}px)`});lt.setAttribute('opacity',t>T.help-z?.6+.4*Math.sin(t*2):0);rise(t4,t,T.few-z)}}});
/* 2 Proverbs 20:5 */
SC.push({build(){const z=this.start;clear(C.navy);
 const wv=svgBox('left:0;top:760px;width:720px;height:360px','0 0 720 360');wv.innerHTML=`<path id="w1" fill="#4F7586" ${S}/><path id="w2" fill="#3D5F70" ${S}/>`;
 const q1=el('div',`left:50px;top:220px;width:620px;font-weight:700;font-size:48px;line-height:1.2;color:${C.cream}`,0,'"The purpose in a man\'s heart is like deep water,');
 const q2=el('div',`left:50px;top:400px;width:620px;font-weight:700;font-size:48px;line-height:1.2;color:${C.yel}`,0,'but a man of understanding will draw it out."');
 const r=el('div',`left:52px;top:580px;padding:6px 14px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:24px;color:${C.ink}`,0,'Proverbs 20:5');
 const w1=q(wv,'w1'),w2=q(wv,'w2');
 const wave=(o,y,a)=>{let d=`M0 ${y}`;for(let x=0;x<=720;x+=40)d+=` L${x} ${y+Math.sin(x/90+o)*a}`;return d+' V360 H0Z'};
 return t=>{rise(q1,t,T.pv-z);rise(q2,t,T.pv2-z);pop(r,t,T.pv2+1.4-z,-2,.4,1);w1.setAttribute('d',wave(t*.8,90,10));w2.setAttribute('d',wave(t*.6+2,150,8))}}});
/* 3 dalah */
SC.push(concept2({tag:'HEBREW · DRAW OUT',name:'TO DRAW UP, AS FROM A WELL',word:'Draw out',tr:'dalah',orig:'דָּלָה',hw:420,lines:['Like drawing water from a well.','Not pouring in.','Bringing up what is already there.'],lt:[T.d1,T.d2,T.d3],wt:T.dw,vt:T.dv,verse:'Proverbs 20:5',ill:'well',pc:C.sky,d1:C.yel,d2:C.red}));

/* numbered step card */
function STEP(n,title,col,bg,body){return{build(){const z=this.start;clear(bg||C.paper);
 const nc=svgBox(`left:50px;top:190px;width:120px;height:120px`,'-60 -60 120 120');nc.innerHTML=NUMC(n,col);
 const h=el('div',`left:190px;top:208px;width:500px;font-weight:700;font-size:62px;line-height:1.02;color:${C.ink}`,0,title);
 const up=body(z);
 return t=>{pop(nc,t,0.05,-4,.45,1);pop(h,t,.25,-1,.45,2);up(t)}}}}

/* 4 listen first */
SC.push(STEP(1,'Listen first',C.blue,C.paper,z=>{
 const sv=svgBox('left:110px;top:360px;width:500px;height:400px','0 0 500 400');
 sv.innerHTML=`<rect width="500" height="400" rx="10" fill="${C.sky}"/>${WIN(250,120)}<path d="M0 320 H500 V400 H0Z" fill="#C9A77A" ${S}/>
 <g transform="translate(150 300)"><g transform="translate(0 -10)">${QK(GRAY,2.4,'hat','#E0B394')}</g></g><g transform="translate(150 316)">${BENCH(110)}</g>
 <g id="sp" transform="translate(350 300)"><g transform="translate(0 -10)">${QK(C.blue,2.4,'none',C.pink)}</g></g><g transform="translate(350 316)">${BENCH(110)}</g>
 <g id="bb">${[0,1,2].map(i=>`<circle class="bd" cx="${392+i*26}" cy="190" r="9" fill="${C.cream}" ${S} stroke-width="4"/>`).join('')}</g>`;
 const bd=[...sv.querySelectorAll('.bd')];
 const w=el('div',`left:50px;top:790px;width:620px;font-weight:700;font-size:40px;color:${C.ink}`,0,'Hear the whole story.');
 const qv=el('div',`left:50px;top:860px;width:620px;padding:18px 24px;background:${C.cream};border:4px solid ${C.ink};font-weight:700;font-size:34px;line-height:1.2;color:${C.ink}`,0,'"If one gives an answer before he hears, it is his folly and shame."');
 const r=el('div',`left:52px;top:1010px;padding:5px 12px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink}`,0,'Proverbs 18:13');
 return t=>{pop(sv,t,.5,0,.5,3);bd.forEach((b,i)=>b.setAttribute('opacity',(Math.floor(t*2.5)%4)>i?1:.15));rise(w,t,T.whole-z);pop(qv,t,T.p18-z,-1,.5,4);pop(r,t,T.p18+1.6-z,-2,.4,5)}}));
/* 5 honest questions */
SC.push(STEP(2,'Ask honest questions',C.red,C.paper,z=>{
 const a=el('div',`left:50px;top:350px;width:620px;font-weight:700;font-size:34px;line-height:1.2;color:${C.red2}`,0,'An honest question has no answer hidden inside it.');
 const b1=el('div',`left:50px;top:460px;width:560px;padding:20px 26px;background:${C.cream};border:4px solid ${C.ink};border-radius:30px;font-weight:700;font-size:36px;line-height:1.2;color:${C.ink}`,0,'"Don\'t you think the new job is the right move?"');
 const x=el('div',`left:40px;top:510px;width:600px;height:12px;background:${C.red};transform-origin:left;transform:scaleX(0)`);
 const lab=el('div',`left:250px;top:615px;padding:8px 16px;background:${C.red};font-weight:700;font-size:28px;color:${C.cream};white-space:nowrap`,0,'advice with a question mark');
 const b2=el('div',`left:110px;top:700px;width:560px;padding:20px 26px;background:${C.green};border:4px solid ${C.ink};border-radius:30px;font-weight:700;font-size:36px;line-height:1.2;color:${C.ink}`,0,'"Where do you sense your gifts being called on?"');
 const wf=el('div',`left:50px;top:900px;font-weight:700;font-size:32px;color:${C.ink}`,0,'Watch for:');
 const ws=['should','just','obviously'].map((s,i)=>el('div',`left:${50+[0,170,300][i]}px;top:950px;padding:6px 16px;background:${C.yel};border:3px solid ${C.ink};font-weight:700;font-size:34px;color:${C.ink}`,0,s));
 return t=>{rise(a,t,T.hon-z);pop(b1,t,T.dont-z,-1,.45,1);x.style.transform=`scaleX(${eo(pr(t,T.adv-z,.4))}) rotate(-3deg)`;pop(lab,t,T.adv+.3-z,2,.4,2);pop(b2,t,T.where-.6-z,1,.45,3);
  rise(wf,t,T.watch-z);ws.forEach((w,i)=>pop(w,t,[T.w1,T.w2,T.w3][i]-z,[-3,2,-2][i],.4,4+i))}}));
/* 6 silence */
SC.push(STEP(3,'Let silence work',C.green,C.paper,z=>{
 const sv=svgBox('left:110px;top:350px;width:500px;height:420px','0 0 500 420');
 sv.innerHTML=`<rect width="500" height="420" rx="10" fill="#E4D9C2"/><g id="gw"><rect x="160" y="40" width="180" height="210" rx="6" fill="${C.yel}" opacity=".35"/></g>
 <g transform="translate(250 145) scale(2.4)"><rect x="-34" y="-50" width="68" height="100" fill="#F7E7A8" ${S} stroke-width="3"/><path d="M0 -50 V50 M-34 0 H34" stroke="${C.ink}" stroke-width="2.5"/></g>
 <path d="M0 330 H500 V420 H0Z" fill="#C9A77A" ${S}/>
 ${[[-150,GRAY,'hat','#E0B394'],[-50,DUN,'bon',C.pink],[50,SLATE,'hat','#B07A50'],[150,GRAY,'bon','#E0B394']].map(r=>`<g transform="translate(${250+r[0]} 318)">${QK(r[1],1.8,r[2],r[3])}</g>`).join('')}
 <g transform="translate(150 336)">${BENCH(200)}</g><g transform="translate(350 336)">${BENCH(200)}</g>`;
 const gw=q(sv,'gw');
 const qv=el('div',`left:50px;top:800px;width:620px;padding:18px 24px;background:${C.cream};border:4px solid ${C.ink};font-weight:700;font-size:34px;line-height:1.2;color:${C.ink}`,0,'"A time to keep silence, and a time to speak."');
 const r=el('div',`left:52px;top:950px;padding:5px 12px;background:${C.yel};border:3px solid ${C.ink};font-weight:600;font-size:22px;color:${C.ink}`,0,'Ecclesiastes 3:7');
 const p=el('div',`left:300px;top:946px;font-weight:700;font-size:34px;color:${C.red2};white-space:nowrap`,0,'A pause makes room.');
 return t=>{pop(sv,t,.5,0,.5,3);gw.setAttribute('opacity',t>T.room-z?.6+.4*Math.sin(t*1.5):.2);pop(qv,t,T.ecc-z,-1,.5,4);pop(r,t,T.ecc+1.4-z,-2,.4,5);rise(p,t,T.pause-z)}}));
/* 7 release */
SC.push(STEP(4,'Release the outcome',C.yel,C.paper,z=>{
 const sv=svgBox('left:110px;top:350px;width:500px;height:430px','0 0 500 430');
 sv.innerHTML=`<rect width="500" height="430" rx="10" fill="${C.sky}"/><circle cx="420" cy="70" r="34" fill="${C.yel}" ${S}/><path d="M0 360 Q250 330 500 360 V430 H0Z" fill="${C.green}" ${S}/>
 <g transform="translate(250 372)">${QK(GRAY,2.6,'hat','#E0B394')}</g><path d="M205 372 Q179.5 320 182 268" fill="none" stroke="${C.ink}" stroke-width="26" stroke-linecap="round"/><path d="M295 372 Q320.5 320 318 268" fill="none" stroke="${C.ink}" stroke-width="26" stroke-linecap="round"/><path d="M205 372 Q179.5 320 182 268" fill="none" stroke="${GRAY}" stroke-width="14" stroke-linecap="round"/><path d="M295 372 Q320.5 320 318 268" fill="none" stroke="${GRAY}" stroke-width="14" stroke-linecap="round"/><circle cx="182" cy="262" r="15" fill="#E0B394" ${S} stroke-width="5"/><circle cx="318" cy="262" r="15" fill="#E0B394" ${S} stroke-width="5"/>
 <g id="bd"><path d="M-22 0 Q0 -10 22 0 Q0 14 -22 0Z" fill="${C.cream}" ${S} stroke-width="5"/><path id="wg" d="M-6 -2 Q-2 -30 14 -34 Q10 -14 6 -2Z" fill="${C.cream}" ${S} stroke-width="5"/><circle cx="18" cy="-4" r="3" fill="${C.ink}"/></g>`;
 const bd=q(sv,'bd'),wg=q(sv,'wg');
 const h=el('div',`left:50px;top:800px;font-weight:700;font-size:34px;color:${C.red2}`,0,'Success might be:');
 const ch=['a deeper question','clarity','the freedom to wait'].map((s,i)=>el('div',`left:${[50,410,50][i]}px;top:${[850,850,935][i]}px;padding:8px 18px;background:${C.cream};border:4px solid ${C.ink};font-weight:700;font-size:34px;color:${C.ink};white-space:nowrap`,0,s));
 return t=>{pop(sv,t,.5,0,.5,3);const k=eio(pr(t,T.succ-z,4));bd.setAttribute('transform',`translate(${lerp(250,400,k)} ${lerp(222,40,k)})`);wg.setAttribute('transform',`scale(1 ${k>0&&k<1?Math.sin(t*14)*.8:1})`);
  rise(h,t,T.succ-z);ch.forEach((c,i)=>pop(c,t,[T.deep,T.clar,T.free][i]-z,[-2,2,-1][i],.4,4+i))}}));
/* 8 put it together */
SC.push({build(){const z=this.start;clear(C.paper);
 const h=el('div',`left:50px;top:200px;font-weight:700;font-size:30px;letter-spacing:4px;color:${C.red2}`,0,'PUT IT TOGETHER');
 const c=el('div',`left:50px;top:250px;padding:14px 26px;background:${C.green};font-weight:700;font-size:60px;color:${C.ink};white-space:nowrap`,0,'Care, without control.');
 const sv=svgBox('left:110px;top:380px;width:500px;height:430px','0 0 500 430');
 const ring=[[-170,30,GRAY,'hat','#E0B394'],[-95,-40,DUN,'bon',C.pink],[95,-40,SLATE,'hat','#B07A50'],[170,30,GRAY,'bon','#E0B394']];
 sv.innerHTML=`<rect width="500" height="430" rx="10" fill="#EFE6D2"/><g transform="translate(250 0)"><rect x="-56" y="70" width="112" height="210" fill="${C.yel}" ${S}/><rect x="-56" y="70" width="112" height="210" fill="#FFF3C8" opacity=".6"/></g><path d="M0 330 H500 V430 H0Z" fill="#C9A77A" ${S}/>
 ${ring.map(r=>`<g transform="translate(${250+r[0]} ${330+r[1]*.5})">${QK(r[2],1.9,r[3],r[4])}</g>`).join('')}
 <g id="fr">${QK(C.blue,2.1,'none',C.pink)}</g>`;
 const fr=q(sv,'fr');
 const L=['Questions become invitations.','Silence becomes spacious.','Room for the next step.'];
 const ls=L.map((l,i)=>el('div',`left:50px;top:${840+i*54}px;font-weight:700;font-size:38px;color:${C.ink};white-space:nowrap`,0,l));
 return t=>{rise(h,t,.1);pop(c,t,T.care-z,-1,.45,1);pop(sv,t,.5,0,.5,2);const k=eio(pr(t,T.step-z,2.6));fr.setAttribute('transform',`translate(250 ${lerp(360,262,k)}) scale(${lerp(1,.75,k)})`);
  ls.forEach((x,i)=>rise(x,t,[T.inv,T.spa,T.step][i]-z))}}});
/* 9 youtube */
SC.push({build(){const z=this.start;clear(C.red);
 const sv=svgBox('left:210px;top:260px;width:300px;height:220px','0 0 300 220');sv.innerHTML=`<rect x="10" y="10" width="280" height="200" rx="50" fill="${C.cream}" ${S}/><path d="M120 70 L195 110 L120 150Z" fill="${C.red2}" ${S}/>`;
 const a=el('div',`left:50px;top:530px;width:620px;text-align:center;font-weight:700;font-size:52px;line-height:1.15;color:${C.cream}`,0,'Full walkthrough in a longer video');
 const b=el('div',`left:50px;top:680px;width:620px;text-align:center;font-weight:700;font-size:40px;color:${C.yel}`,0,'on our YouTube channel');
 return t=>{pop(sv,t,.1,-2,.5,1);rise(a,t,.3);pop(b,t,T.ytc-1-z,1,.45,2)}}});
/* 10 declaration */
SC.push({build(){const z=this.start;clear(C.navy);
 const sun=el('div',`left:120px;top:900px;width:480px;height:480px;border-radius:50%;background:${C.yel};filter:url(#r0)`);
 const say=el('div',`left:50px;top:200px;padding:10px 20px;background:${C.cream};font-weight:700;font-size:30px;letter-spacing:4px;color:${C.ink}`,0,'SAY IT WITH ME');
 const L=['"Set a guard, O LORD,','over my mouth;','keep watch over','the door of my lips!"'];
 const els=L.map((l,i)=>el('div',`left:50px;top:${290+i*66}px;font-weight:700;font-size:48px;line-height:1.15;color:${C.cream};white-space:nowrap`,0,l));
 const r1=el('div',`left:54px;top:560px;font-weight:600;font-size:26px;letter-spacing:3px;color:${C.yel}`,0,'PSALM 141:3 · ESV');
 const d2=el('div',`left:50px;top:640px;font-weight:700;font-size:52px;line-height:1.15;color:${C.yel};white-space:nowrap`,0,'"Speak, for your<br>servant hears."');
 const r2=el('div',`left:54px;top:780px;font-weight:600;font-size:26px;letter-spacing:3px;color:${C.yel}`,0,'1 SAMUEL 3:10 · ESV');
 return t=>{sun.style.filter=`url(#r${Math.floor(t*4)%3})`;sun.style.transform=`translateY(${eio(pr(t,0,10))*100}px)`;pop(say,t,.1,-2,.45,1);
  els.forEach((x,i)=>rise(x,t,T.dec1+i*1.1-z,.5));rise(r1,t,T.dec1+3.6-z,.4);rise(d2,t,T.dec2-z,.5);rise(r2,t,T.ref2-z,.4)}}});
