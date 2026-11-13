# Usage: python3 build.py  (run inside a project dir that has body2.js)
# body2.js must define const B=[scene boundaries in seconds] and SC scenes.
import re,os
K=os.path.dirname(os.path.abspath(__file__))
b2=open('body2.js').read()
B=re.search(r'const B=(\[[^\]]*\]);',b2).group(1)
foot=open(os.path.join(K,'foot.js')).read()
foot=re.sub(r'const BOUNDS=\[[^\]]*\];','const BOUNDS='+B+';',foot)
body=open(os.path.join(K,'concept.js')).read()+open(os.path.join(K,'helpers.js')).read()+b2
open('scenes.js','w').write(open(os.path.join(K,'head.js')).read()+open(os.path.join(K,'lib.js')).read()+body+foot)
print('scenes.js built, bounds',B)
