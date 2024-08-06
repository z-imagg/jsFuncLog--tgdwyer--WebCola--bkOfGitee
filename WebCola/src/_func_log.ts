//函数进入、返回打印日志

import { isIgnore_methodFullName,printLog_argsWhenFuncRet} from './_func_log_cfg'
//参数字典
interface _Arg_Dict{
  [argName:string]:any
}
//参数字典转json文本
function _argDict_jsonText(arg_dict:_Arg_Dict|null){
  let argDict_jsonTxt:string=""
  if(arg_dict){
    argDict_jsonTxt=JSON.stringify(arg_dict)
  }
  return argDict_jsonTxt;
}


//函数进入 打印日志
export function   _func_enter_log(srcFilePath:string,classMethodName:string,arg_dict:_Arg_Dict|null ){
  if(isIgnore_methodFullName(srcFilePath,classMethodName)){
    return;
  }
  const argDict_jsonTxt:string=_argDict_jsonText(arg_dict)
  const msg:string=`#func_enter#${srcFilePath}#${classMethodName}#args:${argDict_jsonTxt}`;
  console.log(msg)
// console.log(`#enter#WebCola/src/adaptor.ts:LayoutAdaptor.trigger:args_json=[e=[${JSON.stringify(e)}]]`)
}
//无参函数进入 打印日志
export function   _funcNoArgs_enter_log(srcFilePath:string,classMethodName:string  ){
  _func_enter_log(srcFilePath,classMethodName,null)
}
//函数返回 打印日志
export function   _func_return_log(srcFilePath:string,classMethodName:string,arg_dict:_Arg_Dict,ret_val:any|null){
  if(isIgnore_methodFullName(srcFilePath,classMethodName)){
    return;
  }
  const argDict_jsonTxt:string=_argDict_jsonText(arg_dict)
  let msg:string=`#func_return#${srcFilePath}#${classMethodName}`;
  //若返回值非空
  if(ret_val){
    msg=`${msg}#ret:${JSON.stringify(ret_val)}`
  }
  //是否打印参数们
  if(printLog_argsWhenFuncRet()){
    msg = `${msg}#args:${argDict_jsonTxt}`
  }
  console.log(msg)
// console.log(`#return#WebCola/src/adaptor.ts:LayoutAdaptor.trigger:args_json=[e=[${JSON.stringify(e)}]]:ret_json=${JSON.stringify(ret)}`)
}

export function   _func_noReturn_log(srcFilePath:string,classMethodName:string,arg_dict:_Arg_Dict){
  _func_return_log(srcFilePath,classMethodName, arg_dict,null)
}
//无参数函数返回 打印日志
export function   _funcNoArgs_return_log(srcFilePath:string,classMethodName:string ,ret_val:any){
  _func_return_log(srcFilePath,classMethodName,null,ret_val)
}

export function   _funcNoArgs_noReturn_log(srcFilePath:string,classMethodName:string){
  _func_return_log(srcFilePath,classMethodName,null,null)
}