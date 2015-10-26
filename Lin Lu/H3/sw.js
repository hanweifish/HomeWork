$('#ss').click(function() {
  var a = $('#ss').text();
  if (a == 'Start') {
    $('#ss').html('Stop');

  } else {
    $('#ss').html('Start');
  }
  sw();
});

$('#rs').click(function() {
  reset();
});

var time = 0;
var running = 0;
function sw() {

  if (running === 0) {
    running = 1;
    increment();
  } else {
    running = 0;
  }
}

function reset() {
  time = 0;
  running = 0;
  $('#time').text('00'+':'+'00'+':'+'00');
}

function increment() {
  if (running == 1) {
    setTimeout(function() {
      time++;
      var min = Math.floor(time / 100 / 60);
      var sec = Math.floor(time/100%60);
      var hundredth = time%100;
      var millisec = 0;
      millisec += millisec / 100;
      if(min < 10){min = '0' + min;}
      if(sec < 10){sec = '0' + sec;}
      if(hundredth < 10){hundredth = '0' + hundredth;}
      $('#time').text(min + ':' + sec + ':'  + hundredth);
      increment();
    }, 10);
  }
}
