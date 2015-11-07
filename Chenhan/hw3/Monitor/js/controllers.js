'use strict'
var myapp = angular.module('appControllers',[]);

myapp.controller('MachineListCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://50.116.7.241:3000/api').then(function successCallBack(response) {
		$scope.machines = response.data.api;
		console.log($scope.machines);
	}, function errorCallBack(response) {
		console.log(response);
	});
}]);

myapp.controller('MachineDetailCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
	$scope.usage = 0;
	$scope.min = 100;
	$scope.max = 0;
	$interval(function() {
			$http.get('http://50.116.7.241:3000/api/' + $scope.id).then(function successCallBack(response) {
				// console.log("enter");
				// console.log(response.data);
				$scope.usage = response.data;
				$scope.min = Math.min($scope.min, response.data);
				$scope.max = Math.max($scope.max, response.data);
			}, function errorCallBack(response) {
				console.log(response);
			});
		}, 1000);
}])