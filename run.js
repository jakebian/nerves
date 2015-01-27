var Graph = require('./graph')
var NerveFinder = require('./find_nerve')
var vis = require('./vis')

var g = {1:[2,5,3],2:[3],5:[3],4:[5,6,3]} // adjacency list
var G = Graph.newGraph(g); // graph object

var N0 = NerveFinder.findNerve(G,0);
var N1 = NerveFinder.findNerve(G,1);
var N2 = NerveFinder.findNerve(G,2);

function getGraphLinks(graph, n) {
    return NerveFinder.findNerve(graph, n).map(function(nerve){
        return vis.toLinks(nerve.nodes);
    });
}
function getNerveGraph(G, n) {
    return {
        nodes: G.nodes(),
        links: getGraphLinks(G, n)
    }
}

console.log(JSON.stringify(getNerveGraph(G,2)));

// console.log(vis.toLinks(N2[0].nodes))