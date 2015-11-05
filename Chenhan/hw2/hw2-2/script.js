$(document).ready(function(){
var data = [
            {
                "unitName": "A101",
                "beginTimestamp": 1328256000000,
                "endTimestamp": 1359978400000,
                "rent": 1200
            },
            {
                "unitName": "B201",
                "beginTimestamp": 1298966400000,
                "endTimestamp": 1398966400000,
                "rent": 1300
            },
            {
                "unitName": "A301",
                "beginTimestamp": 1275721200000,
                "endTimestamp": 1298966400000,
                "rent": 1500
            },
            {
                "unitName": "A101",
                "beginTimestamp": 1298966400000,
                "endTimestamp": 1310664000000,
                "rent": 1100
            },
            {
                "unitName": "A301",
                "beginTimestamp": 1357878400000,
                "endTimestamp": 1369878400000,
                "rent": 2000
            }
]
  var min = Number.MAX_VALUE;
  var max = Number.MIN_VALUE;
  for (var i = 0; i < data.length; i++) {
    var start = new Date(data[i].beginTimestamp);
    var end = new Date(data[i].endTimestamp);
    console.log(start);
    console.log(end);
    if (start < min) {
      min = start;
    }
    if (end > max) {
      max = end;
    }
  }
  max = new Date(max);
  min = new Date(min);
  console.log(min.getMonth() + 1 + " " + min.getFullYear());
  console.log(max.getMonth() + 1 + " " + max.getFullYear());
  var $timeline = $("<tr/>");
  $timeline.append($("<td/>"));
  var $a101 = $("<tr/>");
  $a101.append($("<td/>").text("A101"));
  var $b201 = $("<tr/>");
  $b201.append($("<td/>").text("B201"));
  var $a301 = $("<tr/>");
  $a301.append($("<td/>").text("A301"));
  var time = min;
  while (time <= max) {
    console.log(time);
    var $td = $("<td/>");
    $td.text(time.getMonth() + 1 + "/" + time.getFullYear());
    $timeline.append($td);
    var arr = [-1, -1, -1];
    for (var i = 0; i < data.length; i++) {
      var start = new Date(data[i].beginTimestamp);
      var end = new Date(data[i].endTimestamp);
      var rent = data[i].rent;
      if (time >= start && time <= end) {
        if (data[i].unitName === "A101") {
          arr[0] = rent;
        } else if (data[i].unitName === "B201") {
          arr[1] = rent;
        } else if (data[i].unitName === "A301") {
          arr[2] = rent;
        }
      }
    }
    $a101.append(arr[0] === -1 ? $("<td/>") : $("<td/>").text(arr[0]));
    $b201.append(arr[1] === -1 ? $("<td/>") : $("<td/>").text(arr[1]));
    $a301.append(arr[2] === -1 ? $("<td/>") : $("<td/>").text(arr[2]));
    time.setMonth(time.getMonth() + 1);
  }
  $(".rentTable").append($timeline);
  $(".rentTable").append($a101);
  $(".rentTable").append($b201);
  $(".rentTable").append($a301);
});