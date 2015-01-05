// finds kth nerve of graph g

// findNerve(g,k):
// 	if (k == 0):
// 		return g.nodes() // as length 0 pa
// 	return walk(findNerve(g, k-1),g)


// generates all paths in g obtained from appending 1 more step to paths

// walk(paths,g):
// 	result = []
// 	for path in paths:
// 		end = path.end()
// 		for next in neighbors(g,end)
// 			result.append(addToPath(end,next))

// returns a list of paths

var Path = require('./path_util');

function findNerve(g,k){
	if (k == 0){
		return g.nodes().map(Path.newPath);
	}

	return walk(findNerve(g,k-1),g);
}

function walk(paths,g){
	result = [];

	paths.forEach(function(path){
		var end = path.end;
		g.neighbors(end).forEach(function(next){
			result.push(Path.extendPath(path, next));
		})
	})
	
	return result;
}


module.exports = {
	findNerve:findNerve
}