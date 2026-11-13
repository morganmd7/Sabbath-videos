// node render.js 0 2 4 ...  saves 12 fps stop-motion frames to frames/XX/, then encodes out/s_XX.mp4
const {chromium}=require('playwright');const {execFileSync}=require('child_process');const fs=require('fs');
(async()=>{const idx=process.argv.slice(2).map(Number);const b=await chromium.launch();const p=await b.newPage({viewport:{width:720,height:1280},deviceScaleFactor:1.5});
await p.goto('file://'+__dirname+'/index.html');await p.evaluate(()=>document.fonts.ready);
for(const i of idx){const {dur,start}=await p.evaluate(i=>loadScene(i),i);const n=Math.round((start+dur)*12)-Math.round(start*12);const name=String(i).padStart(2,'0');
 const dir=`${__dirname}/frames/${name}`;fs.rmSync(dir,{recursive:true,force:true});fs.mkdirSync(dir,{recursive:true});
 for(let f=0;f<n;f++){await p.evaluate(t=>draw(t),f/12);await p.screenshot({path:`${dir}/${String(f).padStart(4,'0')}.jpg`,type:'jpeg',quality:93,timeout:60000})}
 execFileSync('ffmpeg',['-y','-loglevel','error','-framerate','12','-i',`${dir}/%04d.jpg`,'-c:v','libx264','-crf','16','-preset','veryfast','-pix_fmt','yuv420p',`${__dirname}/out/s_${name}.mp4`]);
 console.log('done',i,n,new Date().toISOString().slice(11,19))}
await b.close()})();
