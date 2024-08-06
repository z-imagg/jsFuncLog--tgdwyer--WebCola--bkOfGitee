//adaptor.js已增加函数进入返回日志
import {Layout, EventType, Event} from './layout'
import {_func_enter_log,_funcNoArgs_enter_log,_func_return_log,_funcNoArgs_return_log} from './_func_log'
const _srcFilePath:string='WebCola/src/adaptor.ts';
const _className:string='LayoutAdaptor';
    export class LayoutAdaptor extends Layout {
        _options_
        // dummy functions in case not defined by client
        trigger(e: Event) {
            if ( this && this._options_ && this._options_.trigger ) {
                const _classMethodName:string=`${_className}.trigger`
                _func_enter_log(_srcFilePath,_classMethodName,{e})
                const ret=this._options_.trigger(e);
                _func_return_log(_srcFilePath,_classMethodName,{e},ret)
            }
        };
        kick() {
            if ( this && this._options_ &&  this._options_.kick ){
                const _classMethodName:string=`${_className}.kick`
                _funcNoArgs_enter_log(_srcFilePath,_classMethodName)
                const ret=this._options_.kick();
                _funcNoArgs_return_log(_srcFilePath,_classMethodName,ret)
            }
        };
        drag() {
            if (this && this._options_ &&   this._options_.drag ){
                const _classMethodName:string=`${_className}.drag`
                _funcNoArgs_enter_log(_srcFilePath,_classMethodName)
                const ret=this._options_.drag();
                _funcNoArgs_return_log(_srcFilePath,_classMethodName,ret)
            }
        };
        on(eventType: EventType | string, listener: () => void) : this { 
            if (this && this._options_ &&    this._options_.on ){
                const _classMethodName:string=`${_className}.on`
                _func_enter_log(_srcFilePath,_classMethodName,{eventType,listener})
                const ret=this._options_.on(eventType,listener);
                _func_return_log(_srcFilePath,_classMethodName,{eventType,listener},ret)
            }
            return this; 
        };

        dragstart(d:any) {
            const _classMethodName:string=`${_className}.dragstart`
            _func_enter_log(_srcFilePath,_classMethodName,{d})
            const ret=Layout.dragStart(d)
            _func_return_log(_srcFilePath,_classMethodName,{d},ret)
        };
        dragStart (d:any) {
            const _classMethodName:string=`${_className}.dragStart`
            _func_enter_log(_srcFilePath,_classMethodName,{d})
            const ret=Layout.dragStart(d)
        };
        dragend (d:any)  {
            const _classMethodName:string=`${_className}.dragend`
            _func_enter_log(_srcFilePath,_classMethodName,{d})
            const ret=Layout.dragEnd(d)
            _func_return_log(_srcFilePath,_classMethodName,{d},ret)
        };
        dragEnd (d:any)  {
            const _classMethodName:string=`${_className}.dragEnd`
            _func_enter_log(_srcFilePath,_classMethodName,{d})
            const ret=Layout.dragEnd(d)
            _func_return_log(_srcFilePath,_classMethodName,{d},ret)
        };

        constructor( options ) {
            super();
            // take in implementation as defined by client
            this._options_ = options;
        }
    }

    /**
     * provides an interface for use with any external graph system (e.g. Cytoscape.js):
     */
    export function adaptor( options ): LayoutAdaptor {
        const _classMethodName:string=`.adaptor`
        _func_enter_log(_srcFilePath,_classMethodName,{options})
        const ret= new LayoutAdaptor( options );
        _func_return_log(_srcFilePath,_classMethodName,{options},ret)
        return ret;
    }
