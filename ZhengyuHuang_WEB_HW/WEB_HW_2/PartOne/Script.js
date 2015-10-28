function StopWatch() {
    var duration;
    var startTime;
    
    this.getDuration = function () {
      return this.duration;
    };
    
    this.start = function () {
      this.startTime = new Date().getTime();
      return this;
    };
    
    this.stop = function () {
      var curTime = new Date().getTime();
      if(this.duration === undefined){
        this.duration = 0;
      }
      this.duration = this.duration + curTime - this.startTime;
      this.startTime = -1;
      return this;
    };
    
    this.log = function () {
      var curTime = new Date().getTime();
      if(this.duration === undefined){
        this.duration = 0;
      }
      if(this.startTime === -1){
        console.log(this.duration % 1000);
      }else{
        this.duration = this.duration + curTime - this.startTime;
        this.startTime = curTime;
        console.log(this.duration % 1000);
      }
      return this;
    };
    
    this.reset = function () {
      this.duration = 0;
      this.startTime = -1;
      return this;
    };
    
}
