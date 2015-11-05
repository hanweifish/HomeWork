'use strict';
var monitorAppDirective = angular.module('monitorApp',[]);

monitorAppDirective.controller('MachineListCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
	$http.get('http://50.116.7.241:3000/api').then(function successCallBack(response) {
		$scope.machines = response.data.api;
		for (var i = 0; i < $scope.machines.length; i++) {
			$scope.machines[i].usage = 0;
			$scope.machines[i].min = 100;
			$scope.machines[i].max = 0;
		}
		// console.log($scope.machines);
		$interval(function() {
			for (var i = 0; i < $scope.machines.length; i++) {
				updateUsage(i);
			}
		}, 1000);
	}, function errorCallBack(response) {
		console.log(response);
	})
	function updateUsage(i) {
		$http.get('http://50.116.7.241:3000/api/' + $scope.machines[i].id).then(function successCallBack(response) {
			// console.log("enter");
			// console.log(response.data);
			$scope.machines[i].usage = response.data;
			$scope.machines[i].min = Math.min($scope.machines[i].min, response.data);
			$scope.machines[i].max = Math.max($scope.machines[i].max, response.data);
		}, function errorCallBack(response) {
			console.log(response);
		});
	}
}])
.directive('myMachine', function() {
	return {
		restrict: 'E',
		template: '<div>{{machine.name}}</div><div>Current : <span>{{machine.usage}}</span></div><div>Min : <span>{{machine.min}}</span> Max : <span>{{machine.max}}</span></div>'
	}
})