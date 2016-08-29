nerves
======

A simple utility for computing nerves of a small category, in node.js

Usage
-----

```javascript

    var Graph = require("../graph")
    var NerveFinder = require("../find_nerve")

    // adjacency list
    var g = {1:[2,5,3],2:[3],5:[3],4:[5,6,3]} 
  
    // graph object
    var G = Graph.newGraph(g);
	
    // 0-nerves
    var N0 = NerveFinder.findNerve(G,0);
	
    // 2-nerves
    var N2 = NerveFinder.findNerve(G,2);
```
