'use strict'
var data = {
    currentLego: null,
    legos: [
        {
            clickCount : 0,
            name : 'Grand Carousel',
            imgSrc : 'img/Creator-Carousel-10196-2.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Cargo Train',
            imgSrc : 'img/7939.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : "Santa's Workshop",
            imgSrc : 'img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Grand Emporium',
            imgSrc : 'img/10211.png',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'MINI Cooper',
            imgSrc : 'img/q3i6vycvluxercnyv5sy.jpg',
            imgAttribution : 'https://www.lego.com'
        },
        {
            clickCount : 0,
            name : 'Town Hall',
            imgSrc : 'img/10224_Back_01.jpg',
            imgAttribution : 'https://www.lego.com'
        }
    ]
};
var legoclickerControllers = angular.module('LegoClicker', []);

legoclickerControllers.controller('LegoClickerCtrl', ['$scope', function($scope) {
    data.currentLego = data.legos[0];
	$scope.legos = data;
	$scope.listClicked = function(lego) {
		data.currentLego = lego;
	}
	$scope.imgClicked = function(lego) {
		lego.clickCount++;
	}
}]);

