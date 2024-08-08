#!/bin/bash

#[描述] 编译、运行 脚本

#'-e': 任一语句异常将导致此脚本终止; '-u': 使用未声明变量将导致异常;  
set -e -u  

# phantomjs运行报错解决
export OPENSSL_CONF=/etc/ssl
npx phantomjs --version #phantomjs正常运行

#删除上次编译结果
rm -fr /app2/WebCola/dist
mkdir -p /app2/WebCola/dist/src
cp /app2/WebCola/WebCola/src/_func_log.esm.js /app2/WebCola/dist/src/

PrjDir=/app2/WebCola

[[ ! -d $PrjDir/.node_env_v20.15.1/ ]] && bash /app/bash-simplify/nodejs_script/new_PrjNodejsEnv_by_nodeenv.sh $PrjDir  20.15.1

source PrjNodeJsEnvActivate.sh
npm install
# npm install /app2/js_func_log/

#运行package.json中定义的 命令
npm run test  
npm run prepublish

#安装http-server
npm install -g http-server

#http-server启动(以目录WebCola为网站内容)
http-server WebCola/ &
#参考 https://github.com/tgdwyer/WebCola/blob/f18ff1c970560295074556eb2af81dd4e8c173b3/README.md#running


firefox http://127.0.0.1:8080 1>/dev/null 2>/dev/null &