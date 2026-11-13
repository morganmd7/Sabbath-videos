#!/bin/bash
# Joins out/s_*.mp4, converts 12 fps stop-motion to 30 fps, adds narration, fades the end.
set -e
cd "$(dirname "$0")"
AUDIO="$1"; OUT="${2:-Waiting_on_the_Lord_felt.mp4}"
ls out/s_*.mp4 | sort | sed "s/^/file '/;s/$/'/" | sed "s#file 'out/#file '#" > out/list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i out/list.txt -c copy out/joined.mp4
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 out/joined.mp4)
FS=$(python3 -c "print(round($D-1.2,2))")
ffmpeg -y -loglevel error -i out/joined.mp4 -i "$AUDIO" \
  -filter_complex "[0:v]fps=30,fade=t=out:st=$FS:d=1.2[v];[1:a]apad,afade=t=out:st=$FS:d=1.2[a]" \
  -map "[v]" -map "[a]" -t "$D" -c:v libx264 -crf 18 -preset veryfast -pix_fmt yuv420p -c:a aac -b:a 192k -movflags +faststart "$OUT"
echo "$OUT $D"
