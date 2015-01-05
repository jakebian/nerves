// Mocha tests
var Graph = require("../graph")
var NerveFinder = require("../find_nerve")

var should = require("should")

describe("nerveAlgorithm",function(){

	var g,G;

	beforeEach(function(){
		g = {1:[2,5,3],2:[3],5:[3],4:[5,6,3]} // adjacency list
		G = Graph.newGraph(g); // graph object
	})

	describe("graphObject",function(){
		
		it("should have the adjacency list",function(){
			(G.adjList).should.eql(g);
		});

		it("should have the right list of nodes",function(){
			(G.nodes().length).should.equal(4);
		})
	})

	describe("findNerve",function(){
		it("should compute the nerve",function(){
			
			var N0 = NerveFinder.findNerve(G,0);

			N0.should.be.instanceOf(Array);

			N0.should.have.lengthOf(4);

			var N1 = NerveFinder.findNerve(G,1);

			N1.should.have.lengthOf(8);

			var N2 = NerveFinder.findNerve(G,2);

			N2.should.have.lengthOf(3);
			
		})
	})

})