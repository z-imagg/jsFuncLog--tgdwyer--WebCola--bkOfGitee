#!/bin/bash

#[描述] 编译、运行 脚本

# phantomjs运行报错解决
export OPENSSL_CONF=/etc/ssl
npx phantomjs --version #phantomjs正常运行


PrjDir=/app2/WebCola

[[ ! -d $PrjDir/.node_env_v20.15.1/ ]] && bash /app/bash-simplify/nodejs_script/new_PrjNodejsEnv_by_nodeenv.sh $PrjDir  20.15.1

source PrjNodeJsEnvActivate.sh
npm install
npm install /app2/js_func_log/

#运行package.json中定义的 命令
npm run test  
npm run prepublish

#安装http-server
npm install -g http-server

#http-server启动(以目录WebCola为网站内容)
http-server WebCola/
