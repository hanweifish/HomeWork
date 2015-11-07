'use strict';
var myapp = angular.module('appDirectives',[]);

myapp.directive('myMachine', function() {
	return {
		restrict: 'E',
		scope: {
			id: '=',
			name: '='
		},
		controller: 'MachineDetailCtrl',
		template: '<div>{{name}}</div><div>Current : <span>{{usage}}</span></div><div>Min : <span>{{min}}</span> Max : <span>{{max}}</span></div>'
	}

})