#### 安装 本地js项目包(js_func_log)
```shell
git clone http://giteaz:3000/util/js_func_log.git /app2/
cd /app2/js_func_log/
git checkout 2d1989ad353e632633e38c2a6ac44a85e5b6932b
# http://giteaz:3000/util/js_func_log/commit/2d1989ad353e632633e38c2a6ac44a85e5b6932b
```

```shell
cd /app2/cytoscape.js
source PrjNodeJsEnvActivate.sh

pnpm install /app2/js_func_log/
#打印:
# dependencies:
# + js_func_log link:/app2/js_func_log/
#package.json/dependencies 新增  "js_func_log": "link:/app2/js_func_log/"


#卸载:
#手工删除 package.json/dependencies 下的  "js_func_log": "link:/app2/js_func_log/"
#pnpm install 
```