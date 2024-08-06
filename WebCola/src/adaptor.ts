import {Layout, EventType, Event} from './layout'

    export class LayoutAdaptor extends Layout {
        _options_
        // dummy functions in case not defined by client
        trigger(e: Event) {
            if ( this && this._options_ && this._options_.trigger ) {
                this._options_.trigger(e);
            }
        };
        kick() {
            if ( this && this._options_ &&  this._options_.kick ){
                this._options_.kick();
            }
        };
        drag() {
            if (this && this._options_ &&   this._options_.drag ){
                this._options_.drag();
            }
        };
        on(eventType: EventType | string, listener: () => void) : this { 
            if (this && this._options_ &&    this._options_.on ){
                this._options_.on(eventType,listener);
            }
            return this; 
        };

        dragstart(d:any) {
            Layout.dragStart(d)
        };
        dragStart (d:any) {
            Layout.dragStart(d)
        };
        dragend (d:any)  {
            Layout.dragEnd(d)
        };
        dragEnd (d:any)  {
            Layout.dragEnd(d)
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
        return new LayoutAdaptor( options );
    }
