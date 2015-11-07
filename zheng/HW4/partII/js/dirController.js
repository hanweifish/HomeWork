"use strict"

var dirController = function($scope, $http, $interval) {
	$scope.max = 0;
	$scope.min = 99;
	$interval(function(){
		$http.get('http://50.116.7.241:3000/api/' + $scope.mechineInfo.id).then(function(response){
	        $scope.mechineUsage = response.data;
	        if($scope.mechineUsage > $scope.max) {
	        	$scope.max = $scope.mechineUsage;
	        }
	        if($scope.mechineUsage < $scope.min) {
	        	$scope.min = $scope.mechineUsage;
	        }
	    }, 
	    function(error) {
	    	$('body').html(error.data);
	    });
	}, 1000);
};

