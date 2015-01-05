Nerve algorithm:

// finds kth nerve of graph g

findNerve(g,k):
	if (k == 0):
		return k.nodes() // as length 0 paths

	return walk(findNerve(g, k-1),g)


// generates all paths in g obtained from appending 1 more step to paths

walk(paths,g):
	result = []
	for path in paths:
		end = path.end()
		for next in neighbors(g,end)
			result.append(addToPath(end,next))

Data Structures:

Path:
	- start
	- end //obj
	- nodes // ordered list of nodes keys

Graph: 
	- adjList // an adjacency list
	// {"node1:["node2","node3"], ... }
	- nodes() // return all keys in adjList

