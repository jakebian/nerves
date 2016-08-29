nerves
======

A simple utility for computing nerves of a small category, in node.js

Usage
-----

```javascript

import Graph from 'graph'
import NerveFinder from 'find_nerve'

const G = Graph.newGraph({
    /**
     * Adjacency list
     */
    1: [2, 5, 3],
    2: [3],
    5: [3],
    4: [5, 6, 3]}
);

// 0-nerves
const N0 = NerveFinder.findNerve(G, 0);

// 2-nerves
const N2 = NerveFinder.findNerve(G, 2);
```
