angular.module('nerves', ['d3-force-layout'])
.controller('nervesControl', function($scope) {
    console.log(graph)
    $scope.graph = graph;
})