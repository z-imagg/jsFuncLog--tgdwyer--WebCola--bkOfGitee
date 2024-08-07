//函数进入、返回 配置

//配置:忽略方法名列表
const _cfg_IgnoreMethodLs:string="_cfg_IgnoreMethodLs@_func_log@localStorage";//string[]
export function isIgnore_methodFullName(srcFilePath:string,classMethodName:string):boolean{
  const ignoreMethodLs_jsonText:string|null=localStorage.getItem(_cfg_IgnoreMethodLs);
  if(!ignoreMethodLs_jsonText){
    return false;
  }
  const ignoreMethodLs:string[]=JSON.parse(ignoreMethodLs_jsonText)
  const thisMethodFullName:string=`${srcFilePath}#${classMethodName}`
  const has:boolean = thisMethodFullName in ignoreMethodLs; 
  const ignore:boolean = ! has;
  return ignore;
}

//配置:函数返回时是否打印参数们(默认是)
const _cfg_printArgsWhenFuncRet:string="printArgsWhenFuncRet@WebCola@_func_log@localStorage"; // 'true' or 'false'
export function printLog_argsWhenFuncRet( ):boolean{
  const printLog_argsWhenFuncRet:string|null=localStorage.getItem(_cfg_printArgsWhenFuncRet);
  const do_:boolean = printLog_argsWhenFuncRet=='true'
  return do_;
}