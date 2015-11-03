'use strict';

var legoApp = angular.module('legoApp', []);

legoApp.controller('LeftListCtrl', function ($scope){
	$scope.objs = [
		{'clickCount': '0',
		 'name': 'Grand Carousel',
		 'imgSrc': 'img/Creator-Carousel-10196-2.jpg',
		 'imgAttribution': 'https://www.lego.com'},
		{'clickCount': '0',
		 'name': 'Cargo Train',
		 'imgSrc': 'img/7939.png',
		 'imgAttribution': 'https://www.lego.com'},
		{'clickCount': '0',
		 'name': 'Santa\'s Workshop',
		 'imgSrc': 'img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
		 'imgAttribution': 'https://www.lego.com'},
		{'clickCount': '0',
		 'name': 'Grand Emporium',
		 'imgSrc': 'img/10211.png',
		 'imgAttribution': 'https://www.lego.com'},
		{'clickCount': '0',
		 'name': 'MINI Cooper',
		 'imgSrc': 'img/q3i6vycvluxercnyv5sy.jpg',
		 'imgAttribution': 'https://www.lego.com'},
		{'clickCount': '0',
		 'name': 'Town Hall',
		 'imgSrc': 'img/10224_Back_01.jpg',
		 'imgAttribution': 'https://www.lego.com'}
	];

	$scope.setImage = function(imgSrc) {
      $scope.imgSrc = imgSrc;
      var idx;
	  var dataLength = $scope.objs.length;
	  for(var i = 0; i < dataLength; i++){
		  if(imgSrc.indexOf($scope.objs[i].imgSrc) !== -1){
			  idx = i;
			  break;
		  }
	  }
	  document.getElementById("lego-name").innerHTML = $scope.objs[idx].name;
      document.getElementById("lego-count").innerHTML = $scope.objs[idx].clickCount;
    };

    $scope.setCount = function() {
      var toCmp = document.getElementById("lego-img").src;
	  var idx;
	  var dataLength = $scope.objs.length;
	  for(var i = 0; i < dataLength; i++){
		  if(toCmp.indexOf($scope.objs[i].imgSrc) !== -1){
			  idx = i;
			  break;
		  }
	  }
	  $scope.objs[idx].clickCount++;
	  document.getElementById("lego-count").innerHTML = $scope.objs[idx].clickCount;
    };

});

