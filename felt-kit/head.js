const C={ink:'#3A2A1F',cream:'#F5ECDA',paper:'#E6D7BC',red:'#B85C3C',red2:'#8F4127',yel:'#D7A54E',blue:'#6F8C8A',pink:'#D9A68E',green:'#7E8C57',navy:'#3E342C',sky:'#AFC3B8',brown:'#7A4B2A'};
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const lerp=(a,b,t)=>a+(b-a)*t;
const eo=t=>1-Math.pow(1-clamp(t),3);
const eio=t=>{t=clamp(t);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
const eb=t=>{t=clamp(t);const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2)};
const pr=(t,s,d)=>clamp((t-s)/d);
const rnd=n=>{const x=Math.sin(n*12.9898)*43758.5453;return x-Math.floor(x)};
const hx=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));
const mix=(a,b,t)=>{const x=hx(a),y=hx(b);return 'rgb('+x.map((v,i)=>Math.round(lerp(v,y[i],clamp(t)))).join(',')+')'};
const S=`stroke="${C.ink}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"`;
const content=document.getElementById('content');
let nodes;
function el(tag,css,parent,html){const e=document.createElement(tag);e.style.cssText='position:absolute;'+css;if(html!==undefined)e.innerHTML=html;(parent||content).appendChild(e);return e}
// felt texture: fine fibers, mottling, and a soft tabletop light
(function(){const c=document.getElementById('grain'),x=c.getContext('2d');x.lineCap='round';
 for(let i=0;i<900;i++){const r=40+rnd(i+.11)*140;const g=x.createRadialGradient(0,0,0,0,0,r);const dark=rnd(i+.3)>.5;g.addColorStop(0,dark?'rgba(70,45,25,.06)':'rgba(255,248,232,.07)');g.addColorStop(1,'rgba(0,0,0,0)');x.save();x.translate(rnd(i+.7)*780,rnd(i+.9)*1340);x.fillStyle=g;x.fillRect(-r,-r,2*r,2*r);x.restore()}
 for(let i=0;i<60000;i++){const px=rnd(i*1.7+.2)*780,py=rnd(i*2.3+.5)*1340,a=rnd(i+.13)*Math.PI*2,l=3+rnd(i+.37)*9,cv=(rnd(i+.59)-.5)*6;const dark=rnd(i+.77)>.45;
  x.strokeStyle=dark?`rgba(60,38,20,${(.05+rnd(i+.91)*.16).toFixed(3)})`:`rgba(255,250,236,${(.05+rnd(i+.93)*.18).toFixed(3)})`;x.lineWidth=.6+rnd(i+.41)*.9;
  x.beginPath();x.moveTo(px,py);x.quadraticCurveTo(px+Math.cos(a)*l/2-Math.sin(a)*cv,py+Math.sin(a)*l/2+Math.cos(a)*cv,px+Math.cos(a)*l,py+Math.sin(a)*l);x.stroke()}})();
function pop(e,t,s,rot=0,d=.45,seed=0){const p=pr(t,s,d);if(p<=0){e.style.opacity=0;return}e.style.opacity=1;const b=Math.floor(t*4);const j=p>=1?(rnd(b+seed*7.3)-.5)*.4:0;e.style.transform=`rotate(${rot+(1-p)*-7+j}deg) scale(${lerp(.55,1,eb(p))})`}
function rise(e,t,s,d=.5){const p=pr(t,s,d);e.style.opacity=eo(p);e.style.transform=`translateY(${(1-eo(p))*26}px)`}
function svgBox(css,vb,parent){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox',vb||'0 0 500 500');s.style.cssText='position:absolute;overflow:visible;'+css;(parent||content).appendChild(s);return s}
const q=(s,id)=>s.querySelector('#'+id);

