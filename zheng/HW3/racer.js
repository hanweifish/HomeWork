var Racer = function() {
	this.stopWatch = new StopWatch();
	Racer.all.push(this);
};

Racer.all = [];

Racer.prototype.start = function() {
	this.stopWatch.start();
	return this;
};

Racer.prototype.stop = function() {
	this.stopWatch.stop();
	return this;
};

Racer.prototype.log = function() {
	console.log(this.stopWatch.log());
	return this;
};

Racer.all.start = function() {
	for(var i = 0; i < Racer.all.length; i++) {
		Racer.all[i].start();
	}
};

Racer.getWinner = function() {
	var winner = Racer.all[0];
	for(var i = 0; i < Racer.all.length; i++) {
		if(Racer.all[i].log() < winner.log()) {
			winner = Racer.all[i];
		}
	}
	return winner;
};

sumeet = new Racer();
travis = new Racer();
harshit = new Racer();
console.log(Racer.all[0] === sumeet);
console.log(Racer.all[1] === travis);
console.log(Racer.all[2] === harshit);
Racer.all.start();
sumeet.stop().log();
setTimeout("harshit.stop().log()", 1000);
setTimeout("travis.stop().log()", 2000);
setTimeout("console.log(Racer.getWinner() === sumeet)", 2000);