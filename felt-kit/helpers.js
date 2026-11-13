const HAND=(c,sleeve)=>`<rect x="-70" y="-30" width="76" height="60" rx="10" fill="${sleeve||C.blue}" ${S}/>
 <rect x="0" y="-32" width="86" height="64" rx="28" fill="${c}" ${S}/>
 ${[-24,-8,8,24].map((y,i)=>`<rect x="66" y="${y-8}" width="${[52,60,58,48][i]}" height="17" rx="8.5" fill="${c}" ${S} stroke-width="5"/>`).join('')}
 <rect x="30" y="-46" width="46" height="20" rx="10" fill="${c}" ${S} stroke-width="5" transform="rotate(-24 30 -36)"/>`;
const FIST=(c,sleeve)=>`<rect x="-70" y="-30" width="76" height="60" rx="10" fill="${sleeve||C.blue}" ${S}/><rect x="0" y="-34" width="80" height="68" rx="26" fill="${c}" ${S}/>${[-20,-4,12].map(y=>`<path d="M58 ${y} h22" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="10" y="-44" width="44" height="20" rx="10" fill="${c}" ${S} stroke-width="5"/>`;
const FISTN=(c)=>`<rect x="0" y="-34" width="80" height="68" rx="26" fill="${c}" ${S}/>${[-20,-4,12].map(y=>`<path d="M58 ${y} h22" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/>`).join('')}<rect x="10" y="-44" width="44" height="20" rx="10" fill="${c}" ${S} stroke-width="5"/>`;
const ARM=(id,w)=>`<path id="${id}a" fill="none" stroke="${C.ink}" stroke-width="${w+12}" stroke-linecap="round"/><path id="${id}b" fill="none" stroke="${C.blue}" stroke-width="${w}" stroke-linecap="round"/>`;
const setArm=(svg,id,x1,y1,x2,y2)=>{const d=`M${x1} ${y1} Q${(x1+x2)/2} ${Math.max(y1,y2)+10} ${x2} ${y2}`;q(svg,id+'a').setAttribute('d',d);q(svg,id+'b').setAttribute('d',d)};
const PERS=(c,s,head)=>`<g transform="scale(${s})"><path d="M-20 22 Q-20 -8 0 -8 Q20 -8 20 22Z" fill="${c}" ${S} stroke-width="5"/><circle cy="-22" r="14" fill="${head||C.pink}" ${S} stroke-width="5"/></g>`;
