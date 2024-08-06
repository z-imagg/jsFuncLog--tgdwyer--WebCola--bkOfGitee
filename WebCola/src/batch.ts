//batch.ts已增加函数进入返回日志
import {Node, Link, Layout} from './layout'
import {GridRouter} from './gridrouter'
import {Point} from './geom'
import {_func_enter_log,_funcNoArgs_enter_log,_func_return_log,_funcNoArgs_return_log} from './_func_log'
const _srcFilePath:string='WebCola/src/batch.ts';
const _className:string='';
/**
 * @property nudgeGap spacing between parallel edge segments
 * @property margin space around nodes
 * @property groupMargin space around groups
 */
export function gridify(pgLayout, nudgeGap: number, margin: number, groupMargin: number) {
    const _classMethodName:string=`${_className}.gridify`
    _func_enter_log(_srcFilePath,_classMethodName,{pgLayout,nudgeGap,margin,groupMargin})
    pgLayout.cola.start(0, 0, 0, 10, false);
    let gridrouter = route(pgLayout.cola.nodes(), pgLayout.cola.groups(), margin, groupMargin);
    const ret= gridrouter.routeEdges<any>(pgLayout.powerGraph.powerEdges, nudgeGap, e=> e.source.routerNode.id, e=> e.target.routerNode.id);
    _func_return_log(_srcFilePath,_classMethodName,{pgLayout,nudgeGap,margin,groupMargin},ret)
    return ret;
}

function route(nodes, groups, margin: number, groupMargin: number) {
    const _classMethodName:string=`${_className}.route`
    _func_enter_log(_srcFilePath,_classMethodName,{nodes,groups,margin,groupMargin})
    nodes.forEach(d => {
        d.routerNode = <any>{
            name: d.name,
            bounds: d.bounds.inflate(-margin)
        };
    });
    groups.forEach(d => {
        d.routerNode = <any>{
            bounds: d.bounds.inflate(-groupMargin),
            children: (typeof d.groups !== 'undefined' ? d.groups.map(c=> nodes.length + c.id) : [])
                .concat(typeof d.leaves !== 'undefined' ? d.leaves.map(c=> c.index) : [])
        };
    });
    let gridRouterNodes = nodes.concat(groups).map((d, i) => {
        d.routerNode.id = i;
        const ret= d.routerNode;
        _func_return_log(_srcFilePath,_classMethodName,{nodes,groups,margin,groupMargin},ret)
        return ret;
    });
    const ret= new GridRouter(gridRouterNodes, {
        getChildren: (v: any) => v.children,
        getBounds: v => v.bounds
    }, margin - groupMargin);
    _func_return_log(_srcFilePath,_classMethodName,{nodes,groups,margin,groupMargin},ret)
    return ret;
}

export function powerGraphGridLayout(
    graph: { nodes: Node[], links: Link<Node>[] },
    size: number[],
    grouppadding: number)
{
    const _classMethodName:string=`${_className}.powerGraphGridLayout`
    _func_enter_log(_srcFilePath,_classMethodName,{graph,size,grouppadding})
    // compute power graph
    var powerGraph;
    graph.nodes.forEach((v,i) => (<any>v).index = i);
    new Layout()
        .avoidOverlaps(false)
        .nodes(graph.nodes)
        .links(graph.links)
        .powerGraphGroups(function (d) {
            powerGraph = d;
            powerGraph.groups.forEach(v=> v.padding = grouppadding);
        });

    // construct a flat graph with dummy nodes for the groups and edges connecting group dummy nodes to their children
    // power edges attached to groups are replaced with edges connected to the corresponding group dummy node
    var n = graph.nodes.length;
    var edges = [];
    var vs = graph.nodes.slice(0);
    vs.forEach((v, i) => (<any>v).index = i);
    powerGraph.groups.forEach(g => {
        var sourceInd = g.index = g.id + n;
        vs.push(g);
        if (typeof g.leaves !== 'undefined')
            g.leaves.forEach(v => edges.push({ source: sourceInd, target: v.index }));
        if (typeof g.groups !== 'undefined')
            g.groups.forEach(gg => edges.push({ source: sourceInd, target: gg.id + n }));
    });
    powerGraph.powerEdges.forEach(e=> {
        edges.push({ source: e.source.index, target: e.target.index });
    });

    // layout the flat graph with dummy nodes and edges
    new Layout()
        .size(size)
        .nodes(vs)
        .links(edges)
        .avoidOverlaps(false)
        .linkDistance(30)
        .symmetricDiffLinkLengths(5)
        .convergenceThreshold(1e-4)
        .start(100, 0, 0, 0, false);

    // final layout taking node positions from above as starting positions
    // subject to group containment constraints
    // and then gridifying the layout
    const ret= {
        cola:
            new Layout()
            .convergenceThreshold(1e-3)
            .size(size)
            .avoidOverlaps(true)
            .nodes(graph.nodes)
            .links(graph.links)
        //.flowLayout('y', 30)
            .groupCompactness(1e-4)
            .linkDistance(30)
            .symmetricDiffLinkLengths(5)
            .powerGraphGroups(function (d) {
                powerGraph = d;
                powerGraph.groups.forEach(function (v) {
                    v.padding = grouppadding
                });
            }).start(50, 0, 100, 0, false),
        powerGraph: powerGraph
    };
    _func_return_log(_srcFilePath,_classMethodName,{graph,size,grouppadding},ret)
    return ret;
}
