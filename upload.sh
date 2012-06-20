SRC=~/Workspace/kloudcalc/
DST=s3://beta.kloudcalc.com
EXCLUDE='^less|^\.|^kloudcalc.esproj|DS_Store$|\.sh$'

# minify app
rm js/*.min.js
js/minify.rb js/klouddata.js js/kloudcalc.js js/kloudcalc.min.js

s3cmd sync -P --progress --recursive --rexclude ${EXCLUDE} ${SRC} ${DST}

