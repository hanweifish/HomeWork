$(document).ready(function() {
	var arr = [
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
	        ];

	var arrLen = arr.length;

	var msec = Date.parse("January 1, 1970");

	// @para millseconds that need to be parsed into year and month
	// @return an object {Year:, Month:(0 - 11)}
	var getTheYearMonth = function(time) {
		var d = new Date();
		d.setTime(time - msec);
		return {Year: d.getFullYear(), Month: d.getMonth()};
	};

	//@para the input data array
	//@return an object{unitName: [{startTime:, endTime:, rent:}]}
	var getTimeRangeEachUnit = function(array) {
		var range = {};
		for(var i = 0; i < arrLen; i++) {
			var start = getTheYearMonth(array[i].beginTimestamp);
			var end = getTheYearMonth(array[i].endTimestamp);
			var unit = array[i].unitName;
			var price = array[i].rent;
			if(range[unit] === undefined) {
				range[unit] = [{startTime : start, endTime : end, rent : price}];
			} else {
				range[unit].push({startTime : start, endTime : end, rent : price});
			}
		}
		return range;
	};
	// console.log(getTimeRangeEachUnit(arr));

	//@para the input data array
	//@return the year of the latest reservation
	var getLatestTime = function(array) {
		var latestTime = array[0].endTimestamp;
		for(var i = 1; i < arrLen; i++) {
			if(array[i].endTimestamp > latestTime) {
				latestTime = array[i].endTimestamp;
			}
		}
		return {Year: getTheYearMonth(latestTime).Year, Month: getTheYearMonth(latestTime).Month};
	};

	//@para the input data array
	//@return the year of the earliest reservation
	var getEarliestTime = function(array) {
		var earliestTime = array[0].beginTimestamp;
		for(var i = 1; i < arrLen; i++) {
			if(array[i].beginTimestamp < earliestTime) {
				earliestTime = array[i].beginTimestamp;
			}
		}
		return {Year: getTheYearMonth(earliestTime).Year, Month: getTheYearMonth(earliestTime).Month};
	};

	var earliestYearMonth = getEarliestTime(arr);
	var latestYearMonth = getLatestTime(arr);
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var theTotalMonths = 0;
	//@para
	//@return the first row indicates the reservation time
	var drawFirstRow = function() {
		var out = "<tr><td></td>";
		for(var i = earliestYearMonth.Year; i <= latestYearMonth.Year; i++) {
			if(i == earliestYearMonth.Year) {
				for(var j = earliestYearMonth.Month; j < 12; j++) {
					out += "<td>" + months[j] + "," + i + "</td>";
					theTotalMonths++;
				}
			} else if(i == latestYearMonth.Year) {
				for(var j = 0; j <= latestYearMonth.Month; j++) {
					out += "<td>" + months[j] + "," + i + "</td>";
					theTotalMonths++;
				}
			} else {
				for(var j = 0; j < 12; j++) {
					out += "<td>" + months[j] + "," + i + "</td>";
					theTotalMonths++;
				}
			}
		}
		out += "</tr>";
		return out;
	};
	// console.log(drawFirstRow());
	// console.log(theTotalMonths);

	var timeRangePrice = getTimeRangeEachUnit(arr);

	//@para
	//@return the rows for each unit's reservation slots
	var drawRestRows = function() {
		var out = "";
		for(var unit in timeRangePrice) {
			var eachRow = "<tr>";
			eachRow += "<td>" + unit + "</td>";
			for(var i = 0; i < theTotalMonths; i++) {
				eachRow += "<td>" + 0 + "</td>";
			}
			eachRow += "</tr>";
			out += eachRow;
		}
		return out;
	};
	// console.log(drawRestRows());

	//@para
	//@return the whole empty table
	var drawTable = function() {
		var out = "";
		out += drawFirstRow();
		out += drawRestRows();
		$('table').html(out);
	};

	drawTable();

	//used to store each month's total rent
	var priceArray = [];
	for(var i = 0; i < theTotalMonths; i++) {
		priceArray.push(0);
	}

	//@para 
	//@return set each cell to the rent
	var rowNum = 1;
	var setTableCells = function() {
		for(var unit in timeRangePrice) {
			var timeRangeArray = timeRangePrice[unit];
			var len = timeRangeArray.length;
			for(var i = 0; i < len; i++) {
				var timeRangeObj = timeRangeArray[i];
				var start = timeRangeObj["startTime"];
				var end = timeRangeObj["endTime"];
				var price = timeRangeObj["rent"];
				var startIndex = (start.Month - earliestYearMonth.Month) + 12 * (start.Year - earliestYearMonth.Year);
				var endIndex = (end.Month - earliestYearMonth.Month) + 12 * (end.Year - earliestYearMonth.Year);
				var totalCols = theTotalMonths + 1; //the first column is reserved for unitName, 
				//hence total columns should be total months + 1
				for(var j = startIndex; j <= endIndex; j++) {
						var $row = $('table').find('tr');
						var $col = $($row[rowNum]).find('td');
						$($col[j + 1]).text(price).addClass("backgroundGrey");
						priceArray[j] += price;
				}
			}
			rowNum++;
		}
	};
	setTableCells();

	//get the max rent month's indexes
	var maxRent = Math.max.apply(null, priceArray);
	var maxRentIndex = [];
	for(var i = 0; i < priceArray.length; i++) {
		if(priceArray[i] == maxRent) {
			maxRentIndex.push(i);
		}
	}
	
	rowNum -= 1; //rowNum point to the last row's next row, so it should be substract by 1
	for(rowNum; rowNum > 0; rowNum--) {
		for(var i = 0; i < maxRentIndex.length; i++) {
			$('table').find('tr').eq(rowNum).find('td').eq(maxRentIndex[i] + 1).addClass("backgroundBlue");
		}
	}
});
