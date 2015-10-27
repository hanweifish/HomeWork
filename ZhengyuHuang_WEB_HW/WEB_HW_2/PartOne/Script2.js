function Racer() {
  this.stopWatch = new StopWatch();
  Racer.all.push(this);
}

Racer.all = [];

Racer.all.start = function() {
  for (var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
};

Racer.getWinner = function() {
  var found = Racer.all[0];
  for (var i = 0; i < Racer.all.length; i++) {
    if (Racer.all[i].stopWatch.getDuration() < found.stopWatch.getDuration())
      found = racer;
  }
  return found;  
};

Racer.prototype.start = function(){
  this.stopWatch.start();
  return this;
};

Racer.prototype.stop = function() {
  this.stopWatch.stop();
  return this;
};

Racer.prototype.log = function() {
  console.log(this.stopWatch.getDuration());
  return this.stopWatch.getDuration();
};
