function newGraph(g){
	return {
		adjList:g,
		nodes: function(){
			return Object.keys(this.adjList);
		},
		neighbors: function(key){
			if(this.adjList[key]){
				return this.adjList[key];
			}
			return [];
		}
	}
}

module.exports = {
	newGraph: newGraph
}