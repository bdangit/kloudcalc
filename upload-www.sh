#!/usr/bin/env bash

SRC=~/Dropbox/projects/kloudcalc/
DST=s3://www.kloudcalc.com
EXCLUDE='archive|\.coffee$|^beta.html|klouddata.js$|^charlie.html|^server.js|^kloudcalc.sublime|^assets/less|^\.|^kloudcalc.esproj|DS_Store$|\.rb$|\.sh$'

# minify app
#echo "MINIFYING app"
#rm src/*.min.js
#src/minify.rb src/klouddata.js src/kloudcalc.js src/kloudcalc.min.js

echo "SYNCING"
s3cmd sync -P $1 --progress --recursive --rexclude ${EXCLUDE} ${SRC} ${DST}

