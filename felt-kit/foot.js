/* ---------- timing ---------- */
const BOUNDS=[0,4.2,11.93,23.33,36.79,39.43,50.12,61.08,70.25,79.55,86.83,96.82,106.44,116.37,127.73,136.91,145.63,155.21,161.5];
const WARP={};
SC.forEach((s,i)=>{s.dur=BOUNDS[i+1]-BOUNDS[i];s.start=BOUNDS[i];});
let upd=null,cur=0;const SH=' drop-shadow(1.5px 2.5px 2px rgba(45,28,16,.32))';
const SHM=new WeakMap();function shade(par){for(const c of par.children){if(c.dataset.box){shade(c);continue}const m=SHM.get(c);const now=c.style.filter||'';const base=(m&&now===m.applied)?m.base:now;c.style.filter=(base+SH).trim();SHM.set(c,{base,applied:c.style.filter})}}
window.loadScene=i=>{cur=i;upd=SC[i].build();return {dur:SC[i].dur,start:SC[i].start}};
window.draw=t=>{const step=Math.round(t*12);const tq=step/12;const st=Math.round(SC[cur].start*12)+step;
 const g=document.getElementById('grain');g.style.transform=`translate(${(st%3)*-7}px,${((st*2)%3)*-7}px)`;
 upd(tq*(WARP[cur]||1));shade(content);
 const jx=(rnd(st*1.31)-.5)*.8,jy=(rnd(st*2.17)-.5)*.8,jr=(rnd(st*.77)-.5)*.05;
 content.style.transform=`translate(${jx}px,${jy}px) rotate(${jr}deg) scale(1.006)`};
window.sceneInfo=()=>SC.map(s=>s.dur);
