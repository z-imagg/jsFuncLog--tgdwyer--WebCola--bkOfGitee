//函数进入、返回 配置

//配置:忽略方法名列表
const _cfgName_methodIgnore_localStorage:string="srcFilePath_classMethodName__list@WebCola@_func_log@localStorage";//string[]
export function isIgnore_methodFullName(srcFilePath:string,classMethodName:string):boolean{
  const srcFilePath_classMethodName__list__jsonText:string=localStorage.getItem(_cfgName_methodIgnore_localStorage);
  const srcFilePath_classMethodName__list:string[]=JSON.parse(srcFilePath_classMethodName__list__jsonText)
  const item:string=`${srcFilePath}#${classMethodName}`
  const has:boolean = item in srcFilePath_classMethodName__list; 
  const ignore:boolean = ! has;
  return ignore;
}

//配置:函数返回时是否打印参数们(默认是)
const _cfgName_printLog_argsWhenFuncRet:string="printLog_argsWhenFuncRet@WebCola@_func_log@localStorage"; // 'true' or 'false'
export function printLog_argsWhenFuncRet( ):boolean{
  const printLog_argsWhenFuncRet:string=localStorage.getItem(_cfgName_printLog_argsWhenFuncRet);
  const do_:boolean = printLog_argsWhenFuncRet=='true'
  return do_;
}