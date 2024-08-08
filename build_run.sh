#!/bin/bash

#[描述] 编译、运行 脚本

PrjDir=/app2/WebCola

[[ ! -d $PrjDir/.node_env_v20.15.1/ ]] && bash /app/bash-simplify/nodejs_script/new_PrjNodejsEnv_by_nodeenv.sh $PrjDir  20.15.1

source PrjNodeJsEnvActivate.sh
npm install
npm install /app2/js_func_log/

npm run test  

