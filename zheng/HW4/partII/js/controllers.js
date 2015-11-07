"use strict"

var usage = angular.module('cpuUsage',[]);
usage.controller('usageCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('http://50.116.7.241:3000/api').then(function (response){
        $scope.vmechines = response.data.api;
    }, 
    function (error) {
    	$('body').html(error.data);
    });
}])
.directive('myDir', function(){
	// Runs during compile
	return {
		scope: {
			mechineInfo: '=info'
		}, 
		controller: dirController,
		template: '<div>'
						+ '<h3>{{mechineInfo.name}}</h3> '
						+ '<p>Id: {{mechineInfo.id}}</p> '
						+ '<p>Current Usage: {{mechineUsage}}</p>'
						+ 'Max Usage: <span>{{max}}</span><br>'
						+ 'Min Usage: <span>{{min}}</span>'
				   +'</div>',
	};
});	