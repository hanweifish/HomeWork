function readJson() {
    document.write("Json length = " + data.length + "</br>");
    for(var i = 0; i < data.length; i++){
    	document.write("unitName = " + data[i].unitName + " || " + "beginTimestamp" + data[i].beginTimestamp + " || " + "endTimestamp" + data[i].endTimestamp + " || " + "rent = " + data[i].rent + "</br>");
    }
    document.write("</br>");
};

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

function findDistinctUnitName() {
	var distUnit = [];
	for(var i = 0; i < data.length; i++){
		if(!distUnit.contains(data[i].unitName)){
			distUnit.push(data[i].unitName);
		}
	}
	return distUnit;
};

function findYYYYMMName() {
	var allTimeStamps = [];
	for(var i = 0; i < data.length; i++){
		allTimeStamps.push(data[i].beginTimestamp);
		allTimeStamps.push(data[i].endTimestamp);
	}
	var startTime = new Date(Math.min.apply(null, allTimeStamps));
	var endTime = new Date(Math.max.apply(null, allTimeStamps));
	var monthNames = [
  		"Jan.", "Feb.", "Mar.",
  		"Apr.", "May", "June", "July",
  		"Aug.", "Sept.", "Oct.",
  		"Nov.", "Dec."
	];
	var startMonthIndex = startTime.getMonth();
	var endMonthIndex = endTime.getMonth();
	var startYear = startTime.getFullYear();
	var endYear = endTime.getFullYear();

	var disTimeNames = [];
	for(var i = startMonthIndex; i < 12; i++){
		disTimeNames.push(monthNames[i] + ' ' + startYear);
	}
	for(i = startYear + 1; i < endYear; i++){
		for(var j = 0; j < 12; j++){
			disTimeNames.push(monthNames[j] + ' ' + i);
		}
	}
	for(i = 0; i <= endMonthIndex; i++){
		disTimeNames.push(monthNames[i] + ' ' + endYear);
	}
	return disTimeNames;
}; 

function drawEmptyTable(rowNum, colNum, disUnitNames, disYYYYMMNames) {
	document.write("<table border='1' id='myTable'>");
	var id = 0;
	for(var i = 0; i < rowNum; i++){
    	document.write("<tr>");
    	if(i === 0){
    		for(var j = 0; j < colNum; j++){
    			if(j === 0){
    				document.write("<td>" + "</td>");
    			}else{
    				document.write("<td>" + disYYYYMMNames[j-1] + "</td>");
    			}
    		}
    	}else{
    		for(j = 0; j < colNum; j++){
    			if(j === 0){
    				document.write("<td>" + disUnitNames[i-1] + "</td>");
    			}else{
    				document.write("<td id='" + id + "'>" + "</td>");
    				id++;
    			}
    		}
    	}
    	document.write("</tr>");
    }
    document.write("</table>");
    document.write("</br>");
};

function timeFmtChg(timeV){
	var timeVal = new Date(timeV);
	var monthNames = [
  		"Jan.", "Feb.", "Mar.",
  		"Apr.", "May", "June", "July",
  		"Aug.", "Sept.", "Oct.",
  		"Nov.", "Dec."
	];
	var monthIndex = timeVal.getMonth();
	var year = timeVal.getFullYear();
	var timeMY = monthNames[monthIndex] + ' ' + year;
	return timeMY;
}

function findXYY(cell, disUnitNames, disYYYYMMNames){ // cell is same type as data[i].
	var rowIdx;
	for(var i = 0; i < disUnitNames.length; i++){
		if(cell.unitName.localeCompare(disUnitNames[i]) === 0){
			rowIdx = i;
			break;
		}
	}
	var startMY = timeFmtChg(cell.beginTimestamp);
	var endMY = timeFmtChg(cell.endTimestamp);
	for(var j = 0; j < disYYYYMMNames.length; j++){
		if(startMY.localeCompare(disYYYYMMNames[j]) === 0){
			var startIdx = j;
		}
		if(endMY.localeCompare(disYYYYMMNames[j]) === 0){
			var endIdx = j;
		}
	}
	var rowColSE = [];
	rowColSE.push(rowIdx);
	rowColSE.push(startIdx);
	rowColSE.push(endIdx);
	return rowColSE;
};

function findAndChgColor(rowIdx, startIdx, endIdx, rowNum, rent){
	var pos = rowIdx*rowNum + startIdx;
	for(var i = pos; i <= rowIdx*rowNum + endIdx; i++){
		document.getElementById(i).style.backgroundColor = "green";
		document.getElementById(i).innerHTML = rent;
	}
};

function chgAllDataColor(disUnitNames, disYYYYMMNames){
	for(var i = 0; i < data.length; i++){
		var pos = findXYY(data[i], disUnitNames, disYYYYMMNames);
		findAndChgColor(pos[0], pos[1], pos[2], disYYYYMMNames.length, data[i].rent);
	}
};

function findMaxRentCol(disUnitNames, disYYYYMMNames){
	var colNum = disYYYYMMNames.length;
	var rowNum = disUnitNames.length;
	var colTotalRent = [];
	for(var i = 0; i < colNum; i++){
		var curColSum = 0;
		for(var j = 0; j < rowNum; j++){
			if(document.getElementById(i+j*colNum).innerHTML.length === 0){
				curColSum += 0;
			}else{
				curColSum += parseInt(document.getElementById(i+j*colNum).innerHTML);
			}
		}
		colTotalRent.push(curColSum);
	}
	var maxRent = Math.max.apply(null, colTotalRent);
	var maxRentColIdx = [];
	for(i = 0; i < colTotalRent.length; i++){
		if(colTotalRent[i] === maxRent){
			maxRentColIdx.push(i);
		}
	}
	return maxRentColIdx;
};

function highlightMaxColRent(maxRentColIdx, disUnitNames, disYYYYMMNames){
	var rowNum = disUnitNames.length;
	var colNum = disYYYYMMNames.length;
	for(var i = 0; i < maxRentColIdx.length; i++){
		for(var j = 0; j < rowNum; j++){
			document.getElementById(maxRentColIdx[i]+j*colNum).style.backgroundColor = "yellow";
		}
	}
};

///////////////////////////////////////////////////////////////////////////////////////

function drawTable() {
	readJson();
	var disUnitNames = findDistinctUnitName();
    var rowNum = disUnitNames.length + 1;
    var disYYYYMMNames = findYYYYMMName();
    var colNum = disYYYYMMNames.length + 1;    
    drawEmptyTable(rowNum, colNum, disUnitNames, disYYYYMMNames);
    chgAllDataColor(disUnitNames, disYYYYMMNames);
    var maxRentColIdx = findMaxRentCol(disUnitNames, disYYYYMMNames);
    highlightMaxColRent(maxRentColIdx, disUnitNames, disYYYYMMNames);
}
