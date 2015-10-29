// Code goes here


function stopWatch(){
  var startTime = 0;
  var endTime = 0;
  var running = false;

  this.raceName = name;
  
  function getTime() {
    var d = new Date();
    return d.getTime();
  }
  
  
  this.start = function() {
    if(running === true) {
      return;
    } 
    running = true;
    if(startTime === 0) {
      startTime = getTime();
    }
  } 
  
  this.stop = function() {
    if(running === false) {
      return;
    }
    endTime = getTime();
    running = false;
  } 
  
  this.reset = function() {
    startTime = 0;
    endTime = 0;
    running = false;  
  }
  
  this.log = function() {
    if(startTime === 0 || endTime === 0){
      return "Not start";
    } else {
       return (endTime - startTime);
    }
  }
}
+

function racer(name) {
  this.name = name;
  this.stopWatch = new stopWatch();

  racer.all.push(this);
}

racer.all = [];

racer.all.start = function(){
  for(var i = 0; i < racer.all.length; i++) {
    racer.all[i].start();
  }
};

/*racer.all.stop = function(){
  for(var i = 0; i < racer.all.length; i++) {
    racer.all[i].stop();
  }
};
*/

racer.getWinner = function(){
  var first = racer.all[0];
  for(var i = 0; i < racer.all.length; i++) {
    if(racer.all[i].log() < first.log()) {
      first = racer;
    }
  }
  return first;
};

racer.prototype.start = function(){
  this.stopWatch.start();
  return this;
};

racer.prototype.stop = function() {
  this.stopWatch.stop();
  return this;
};

racer.prototype.log = function() {
  return this.stopWatch.log();
};




