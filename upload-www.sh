#!/usr/bin/env bash

SRC=~/Workspace/kloudcalc/
DST=s3://www.kloudcalc.com
EXCLUDE='^charlie.html|^server.js|^kloudcalc.sublime|^less|^\.|^kloudcalc.esproj|DS_Store$|\.sh$'

# minify app
echo "MINIFYING app"
rm src/*.min.js
src/minify.rb src/klouddata.js src/kloudcalc.js src/kloudcalc.min.js

echo "SYNCING"
s3cmd sync -P $1 --progress --recursive --rexclude ${EXCLUDE} ${SRC} ${DST}

