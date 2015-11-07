"use strict"

var usage = angular.module('getUsage');
usage.directive('myDir', function(){
	// Runs during compile
	return {
		scope: {
			mechineInfo: '=info'
		}, 
		controller: 'dirCtrl',
		template: '<div>'
						+ '<h3>{{mechineInfo.name}}</h3> '
						+ '<p>Id: {{mechineInfo.id}}</p> '
						+ '<p>Current Usage: {{mechineUsage}}</p>'
						+ 'Max Usage: <span>{{max}}</span><br>'
						+ 'Min Usage: <span>{{min}}</span>'
				   +'</div>',
	};
});	