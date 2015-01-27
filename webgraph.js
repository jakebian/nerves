var Graph = require('./graph')
var NerveFinder = require('./find_nerve')
var vis = require('./vis')

var g = {'1':['2','5','3'],'2':['3'],'5':['3'],'4':['5','6','3'], '3': [], '6' : []} // adjacency list
var G = Graph.newGraph(g); // graph object

var N0 = NerveFinder.findNerve(G,0);
var N1 = NerveFinder.findNerve(G,1);
var N2 = NerveFinder.findNerve(G,2);

function getGraphLinks(graph, n) {
    return NerveFinder.findNerve(graph, n).map(function(nerve){
        return vis.toLinks(nerve.nodes);
    });
}

function flatten(arrays){
    var merged = [];
    merged = merged.concat.apply(merged, arrays);
    return merged
}
function getNerveGraph(G, n) {
    return {
        nodes: G.nodes(),
        links: flatten(getGraphLinks(G, n))
    }
}

function getD3Graph(g){
    var nodeIndexMap = {};
    var count = 0;
    g.nodes.forEach(function (node) {
        nodeIndexMap[node] = count;
        count ++;
    });
    console.log
    
    var newLinks;

    newLinks= g.links.map(function (link) {
        // console.log(link)
        if (link) {
            return {
                source: nodeIndexMap[link[0]],
                target: nodeIndexMap[link[1]],
            }
        }
    })

    return {
        nodes: g.nodes.map(function(node){return {name: node, weight: 2}}),
        links: newLinks
    }
}

function getD3NerveGraph(G, n) {
    return getD3Graph(getNerveGraph(G, n));
}

module.exports = {
    graph: getD3NerveGraph(G,2)
}