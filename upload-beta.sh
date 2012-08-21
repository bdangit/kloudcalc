#!/usr/bin/env bash

SRC=~/Dropbox/projects/kloudcalc/
DST=s3://beta.kloudcalc.com
EXCLUDE='archive|\.coffee$|^index.html|kloudcalc.min.js$|^charlie.html|^server.js|^kloudcalc.sublime|^assets/less|^\.|^kloudcalc.esproj|DS_Store$|\.rb$|\.sh$'

# minify app
#echo "MINIFYING app"
#rm src/*.min.js
#src/minify.rb src/klouddata.js src/kloudcalc.js src/kloudcalc.min.js

echo "SYNCING"
s3cmd sync -P ${1} --progress --recursive --rexclude ${EXCLUDE} ${SRC} ${DST}

