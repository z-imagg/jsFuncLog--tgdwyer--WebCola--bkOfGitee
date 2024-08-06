import {Layout, EventType, Event} from './layout'

    export class LayoutAdaptor extends Layout {

        // dummy functions in case not defined by client
        trigger(e: Event) {};
        kick() {};
        drag() {};
        on(eventType: EventType | string, listener: () => void) : this { return this; };

        dragstart: (d:any) => void;
        dragStart: (d:any) => void;
        dragend: (d:any) => void;
        dragEnd: (d:any) => void;

        constructor( options ) {
            super();

            // take in implementation as defined by client

            var self = this;
            var o = options;

            if ( o.trigger ) {
                this.trigger =  ()=>{
                    console.log(`#enter#WebCola/src/adaptor.ts:LayoutAdaptor.this.trigger`)
                    o.trigger();
                    console.log(`#return#WebCola/src/adaptor.ts:LayoutAdaptor.this.trigger`)
                }
            }

            if ( o.kick ){
                this.kick = ()=>{
                    console.log(`#enter#WebCola/src/adaptor.ts:LayoutAdaptor.this.kick`)
                    o.kick();
                    console.log(`#return#WebCola/src/adaptor.ts:LayoutAdaptor.this.kick`)
                }
            }

            if ( o.drag ){
                this.drag = ()=>{
                    console.log(`#enter#WebCola/src/adaptor.ts:LayoutAdaptor.this.drag`)
                    o.drag();
                    console.log(`#return#WebCola/src/adaptor.ts:LayoutAdaptor.this.drag`)
                }
            }

            if ( o.on ){
                this.on = (eventType: EventType | string, listener: () => void)=>{
                    console.log(`#enter#WebCola/src/adaptor.ts:LayoutAdaptor.this.on`)
                    o.on(EventType,listener);
                    console.log(`#return#WebCola/src/adaptor.ts:LayoutAdaptor.this.on`)
                    return this;
                }
            }

            this.dragstart = this.dragStart = Layout.dragStart;
            this.dragend = this.dragEnd = Layout.dragEnd;
        }
    }

    /**
     * provides an interface for use with any external graph system (e.g. Cytoscape.js):
     */
    export function adaptor( options ): LayoutAdaptor {
        return new LayoutAdaptor( options );
    }
