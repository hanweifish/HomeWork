"use strict"

var legoClickApp = angular.module('legoClickApp',[]);

legoClickApp.controller('legoClickControl', function($scope) {
	$scope.legos = [
        {
            clickCount : 0,
            name : 'Grand Carousel',
            imgSrc : 'http://www.hanwei.us/legoclicker/img/Creator-Carousel-10196-2.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Cargo Train',
            imgSrc : 'http://www.hanwei.us/legoclicker/img/7939.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : "Santa's Workshop",
            imgSrc : 'http://www.hanwei.us/legoclicker/img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Grand Emporium',
            imgSrc : 'http://www.hanwei.us/legoclicker/img/10211.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'MINI Cooper',
            imgSrc : 'http://www.hanwei.us/legoclicker/img/q3i6vycvluxercnyv5sy.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Town Hall',
            imgSrc : 'http://www.hanwei.us/legoclicker/img/10224_Back_01.jpg',
            imgAttribution : 'https://www.lego.com'
        }
    ];
    $scope.currentLego = $scope.legos[0];
    $scope.setCurrentLego = function(lego) {
    	$scope.currentLego = lego;
    }
    $scope.increment = function(lego) {
    	lego.clickCount++;
    };
});