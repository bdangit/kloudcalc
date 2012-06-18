SRC=~/Workspace/kloudcalc/
DST=s3://beta.kloudcalc.com
EXCLUDE='^less|^\.|^kloudcalc.esproj|DS_Store$|\.sh$'

s3cmd sync -P --progress --recursive --rexclude ${EXCLUDE} ${SRC} ${DST}

