(function () { 'use strict';

var defaultScope = {
  width: 800,
  height: 500,
  initZoom: 0.5,
  charge: -2000,
  linkDistance: 40
};

function getScopeValue(key, scope) {
  return scope[key] || defaultScope[key];
}

angular.module('d3-force-layout', [])

.directive('d3ForceLayout', [function () {

    return {
        restrict:'E',
        link: link,
        scope: {
            graph: '=',
            width: '@',
            height: '@',
            initZoom: '@',
            charge: '@',
            linkDistance: '@'
        }
    };

    function link($scope, element, attrs) {

        console.log($scope.graph)
        function scopeValue(key) {
            return getScopeValue(key, $scope);
        }

        // Initialize containers
        var svg = d3.select(element[0]).append('svg')
            .attr('width', scopeValue('width'))
            .attr('height', scopeValue('height'));

        var container = svg.append('g')
            .attr('transform', 'scale(' + scopeValue('initZoom') + ')');

        // Zoom
        var zoom = d3.behavior.zoom()
            .scale(scopeValue('initZoom'))
            .on('zoom', getZoomFn(container));

        svg.call(zoom);

        // Initialize Links & nodes
        var links = container.selectAll('.sg-graph-link').data($scope.graph.links);
        var nodes = container.selectAll('.sg-graph-node').data($scope.graph.nodes);

        // Force & Drag
        var force = d3.layout.force()
            .size([scopeValue('width'), scopeValue('height')])
            .charge(scopeValue('charge'))
            .linkDistance(scopeValue('linkDistance'))
            .on('tick', getTickFn(links, nodes));

        var drag = force.drag().on('dragstart', dragstarted);

        console.log($scope.graph.nodes);
        console.log($scope.graph.links);

        force
            .nodes($scope.graph.nodes)
            .links($scope.graph.links)
            .start();

        // Display links & Nodes
        links.enter().append('line')
            .attr('class', 'sg-graph-link');

        nodes.enter().append('g');

        nodes.append('circle')
            .attr('class', 'sg-graph-node')
            .attr('r', 12)
            .call(drag);

        nodes.append('text')
            .text(function (node) {
              return node.name;
            });
    }
}]);

function getTickFn(links, nodes) {
    return function () {
        links.attr('x1', function (d) { return d.source.x; })
             .attr('y1', function (d) { return d.source.y; })
             .attr('x2', function (d) { return d.target.x; })
             .attr('y2', function (d) { return d.target.y; });

        nodes.attr('transform', function (d) {
            return 'translate(' + [d.x, d.y] + ')';
        });
      };
}

function getZoomFn(container) {
    return function () {
        container.attr('transform', 'translate(' +
            d3.event.translate + ')scale(' + d3.event.scale + ')');
    };
}

// dragging in force layout overrides dragging in zoom
function dragstarted() {
    d3.event.sourceEvent.stopPropagation();
}

})();

