var StopWatch = function() {
	this.startTime = 0;
	this.duration = 0;
	this.running = false;
};
StopWatch.prototype.start = function() {
    var curTime = (new Date()).getTime();
	if(this.running === false) {
		this.running = true;
		this.startTime = curTime;
	}
	return this;
};
StopWatch.prototype.stop = function() {
    var curTime = (new Date()).getTime();
	if(this.running === true) {
		this.duration += curTime - this.startTime;
		this.running = false;
	}
	return this;
};
StopWatch.prototype.reset = function() {
	this.startTime = 0;
	this.duration = 0;
	this.running = false;
	return this;
};
StopWatch.prototype.log = function() {
	var curTime = (new Date()).getTime();
    if(this.running === true) {
		this.duration += curTime - this.startTime;
		this.startTime = curTime;
	}
	console.log(this.duration);
	// return this;
};

// var sw = new StopWatch();
// sw.start().stop().start().log();
// setTimeout("sw.log()", 123);
// setTimeout("sw.stop().log()", 223);
// setTimeout("sw.log()", 1223);
// setTimeout("sw.reset().log()", 1223);

// var StopWatch = function() {
// 	this.count = 0;
// 	this.started = false;
// 	this.interval = null;
// };

// StopWatch.prototype.increment = function() {
// 	this.count++;
// };
// StopWatch.prototype.start = function() {
// 	if(!this.started) {
// 		this.started = true;
// 		this.interval = setInterval(this.increment.bind(this), 1);
// 		return this;
// 	}
// };
// StopWatch.prototype.stop = function() {
// 	if(this.started) {
// 		this.started = false;
// 		if(this.interval != null) {
// 			clearInterval(this.interval);
// 		}
// 	}
// 	return this;
// };
// StopWatch.prototype.reset = function() {
// 	this.stop();
// 	this.count = 0;
// 	return this;

// };
// StopWatch.prototype.log = function() {
// 	console.log(this.count);
// 	return this;
// };