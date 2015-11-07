"use strict"

var mechines = angular.module('getMechines');
mechines.controller('MechinesCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://50.116.7.241:3000/api').then(function (response){
        $scope.vmechines = response.data.api;
    }, 
    function (error) {
    	$('body').html(error.data);
    });
}]);
