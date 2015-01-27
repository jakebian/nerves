module.exports = {
    toLinks: toLinks
}
function toLinks(nodesChain) {
    var result = [];
    nodesChain.reduce(function(a,b){
        result.push([a,b]);
        return b;
    }, nodesChain[nodesChain.length - 1]);

    return result;
}