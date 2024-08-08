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



#### phantomjs运行报错解决

```shell
npx phantomjs #报错:
# Auto configuration failed
# 125237547628480:error:25066067:DSO support routines:DLFCN_LOAD:could not load the shared library:dso_dlfcn.c:185:filename(libproviders.so): libproviders.so: 无法打开共享目标文件: 没有那个文件或目录
# 125237547628480:error:25070067:DSO support routines:DSO_load:could not load the shared library:dso_lib.c:244:
# 125237547628480:error:0E07506E:configuration file routines:MODULE_LOAD_DSO:error loading dso:conf_mod.c:285:module=providers, path=providers
# 125237547628480:error:0E076071:configuration file routines:MODULE_RUN:unknown module name:conf_mod.c:222:module=providers

OPENSSL_CONF=/etc/ssl   npx phantomjs #正常进入phantomjs命令行
```