$(document).ready(function() {
//---------------model------------------
var model = {
	currentLego: null,
	legos: [
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
    ]
};

//------------controller---------------
var control = {
	initial: function() {
		model.currentLego = model.legos[0];
		legoListView.initial();
		legoImageView.initial();
	},
	getAllLegos: function() {
		return model.legos;
	},
	setCurrentLego: function(lego) {
		model.currentLego = lego;
	},
	getCurrentLego: function() {
		return model.currentLego;
	},
	increment: function() {
		model.currentLego.clickCount++;
		legoImageView.render();
	}

};
//---------------view-----------------
var legoListView = {
	initial: function() {
		this.render();
	},
	render: function() {
		var allLegos = control.getAllLegos();
		var len = allLegos.length;
		for(var i = 0; i < len; i++) {
			var clicker = function(lego) {
				return function() {
					control.setCurrentLego(lego);
					legoImageView.render();
				};
			}
			$("<li></li>").text(allLegos[i].name).appendTo(".list").on("click", clicker(allLegos[i]));
		}
	}
};

var legoImageView = {
	initial: function() {
		$("img").on("click", function(){
			control.increment();
		});
		this.render();
	},
	render: function() {
		var lego = control.getCurrentLego();
		$(".name").text(lego.name);
		$(".counter").text("Counter: " + lego.clickCount);
		$("img").attr("src", lego.imgSrc);
		// $("img").on("click", function(){
		// 	control.increment();
		// });
	}
}
control.initial();
});
//Q: 78到80行，为什么要return一个function。on函数会在click前先运行一下clicker么？
//A: on里的handler要不要在click前执行，取决于怎么写。因为这里需要把current lego传给setCurrentLego，
//所以就需要手动trigger一次clicker函数，把current lego传给setCurrentLego的同时又不执行setCurrentLego，
//所以clicker函数需要返回一个函数，作为click时执行的函数。

//Q: 89到91行和99到101行，为什么点图片的函数写到89到91行可以工作，写到99到101行就呈指数增加，而且所有的count累加到一块?
//A: 因为每次执行legoImageView.render这个函数时，都会给image叠加一个event。？

