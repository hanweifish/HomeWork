var data = {
  "units": [{
    "unitName": "A101",
    "beginTimestamp": 1328256000000,
    "endTimestamp": 1359978400000,
    "rent": 1200
  }, {
    "unitName": "B201",
    "beginTimestamp": 1298966400000,
    "endTimestamp": 1398966400000,
    "rent": 1300
  }, {
    "unitName": "A301",
    "beginTimestamp": 1275721200000,
    "endTimestamp": 1298966400000,
    "rent": 1500
  }, {
    "unitName": "A101",
    "beginTimestamp": 1298966400000,
    "endTimestamp": 1310664000000,
    "rent": 1100
  }, {
    "unitName": "A301",
    "beginTimestamp": 1357878400000,
    "endTimestamp": 1369878400000,
    "rent": 2000
  }]
};

var unitName, count = 0;
for (unitName in data.units) {
  if (data.units.hasOwnProperty(unitName)) {
    count++;
  }
}

var allBeginDates = new Array(count);
var allEndDates = new Array(count);

for (var i = 0; i < count; i++) {
  allBeginDates[i] = data.units[i].beginTimestamp;
  allEndDates[i] = data.units[i].endTimestamp;



}
var min = Math.min.apply(null, allBeginDates);
var minDate = new Date(min);

var max = Math.max.apply(null, allEndDates);
var maxDate = new Date(max);

console.log(minDate.getFullYear());
console.log(minDate.getMonth());
console.log(maxDate.getFullYear());
console.log(maxDate.getMonth());

function getY(timeStamp) {
  var gy = new Date(timeStamp);
  return gy.getFullYear();
}

function getM(timeStamp) {
  var gm = new Date(timeStamp);
  return gm.getMonth();
}
//first year
for (var j = minDate.getMonth(); j <= 12; j++) {
  $('#frow').append('<td>' + j + '/' + minDate.getFullYear() + '</td>');
}
//in between years
for (var l = minDate.getFullYear() + 1; l < maxDate.getFullYear(); l++) {

  for (var k = 1; k <= 12; k++) {
    $('#frow').append('<td>' + k + '/' + l + '</td>');
  }
}
//last year
for (var g = 1; g <= maxDate.getMonth(); g++) {
  $('#frow').append('<td>' + g + '/' + maxDate.getFullYear() + '</td>');
}


  $('#srow').append('<td>' + data.units[u].unitName + '</td>');
  var beginYear = getY(data.units[u].beginTimestamp);
  var endYear = getY(data.units[u].endTimestamp);
  var beginMonth = getM(data.units[u].beginTimestamp);
  var endMonth = getM(data.units[u].endTimestamp);
  var monthInYear = beginMonth;
  var inYearMonth = endMonth + 1;
  var inbetweenYear = beginYear + 1;
  var mm = minDate.getMonth();
  var firstMonth = 1;

  console.log(beginYear, endYear, beginMonth, endMonth);

  var firstYear = minDate.getFullYear();
  while (firstYear < beginYear) {
    var fm = 1;
    while (fm <= 12) {
      $('#srow').append('<td></td>');
      fm++;
    }
    firstYear++;
  }


  if (endYear == beginYear) {
    while (1 <= mm && mm < beginMonth) {
      $('#srow').append('<td></td>');
      mm++;
    }

    while (beginMonth <= monthInYear && monthInYear <= endMonth) {
      $('#srow').append('<td>' + data.units[u].rent + '</td>');
      monthInYear++;
    }

    while (endMonth < inYearMonth && inYearMonth <= 12) {
      $('#srow').append('<td></td>');
      inYearMonth++;
    }
  } else if (endYear - beginYear > 1) {
    while (1 <= mm && mm < beginMonth) {
      $('#srow').append('<td></td>');
      mm++;
    }
    while (beginMonth <= monthInYear && monthInYear <= 12) {
      $('#srow').append('<td>' + data.units[u].rent + '</td>');
      monthInYear++;
    }
    while (beginYear < inbetweenYear && inbetweenYear < endYear) {
      var zzz = 1;
      while (zzz <= 12) {
        $('#srow').append('<td>' + data.units[u].rent + '</td>');
        zzz++;
      }
    }
    while (1 <= firstMonth && firstMonth <= endMonth) {
      $('#srow').append('<td>' + data.units[u].rent + '</td>');
      firstMonth++;
    }
    while (endMonth < inYearMonth && inYearMonth <= maxDate.getMonth()) {
      $('#srow').append('<td></td>');
      inYearMonth++;
    }
  } else if (endYear - beginYear == 1) {
    while (1 <= mm && mm < beginMonth) {
      $('#srow').append('<td>123</td>');
      mm++;
      console.log(mm);
    }
    while (beginMonth <= monthInYear && monthInYear <= 12) {
      $('#srow').append('<td>' + data.units[u].rent + '</td>');
      console.log(monthInYear);
      monthInYear++;
    }
    while (1 <= firstMonth && firstMonth <= endMonth) {
      $('#srow').append('<td>' + data.units[u].rent + '</td>');
      firstMonth++;
    }
    while (endMonth < inYearMonth && inYearMonth <= maxDate.getMonth()) {
      $('#srow').append('<td></td>');
      inYearMonth++;
    }
  }










function jtest() {
  var name = data.units[1].unitName;
  $('#unit').text(name);

  var d = new Date(data.units[1].beginTimestamp);
  $('#time').text(d.getMonth() + '/' + d.getFullYear());
}
