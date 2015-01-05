// returns path of length 0
function newPath(key){
	return {
		start: key,
		end: key,
		nodes:[key]
	}
}

function extendPath(path,key){
	return {
		start:path.start,
		end:key,
		nodes:path.nodes.concat([key])
	}
}

module.exports = {
	newPath:newPath,
	extendPath:extendPath
}