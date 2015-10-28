function readJson() {
    document.write("Json length = " + data.length + "</br>");
    for(var i = 0; i < data.length; i++){
    	document.write("clickCount = " + data[i].clickCount + " || " + "name = " + data[i].name + " || " + "imgSrc = " + data[i].imgSrc + " || " + "imgAttribution = " + data[i].imgAttribution + "</br>");
    }
    document.write("</br>");
};

function genLeftMenu() {
	var dataLength = data.length;
	for(var i = 0; i < dataLength; i++){
		document.write("<li id=\"" + data[i].name + "\" onclick=\"genRightField(" + i + ")\" " + ">" + data[i].name + "</li>");
	}
};

function genRightField(idx) {
	document.getElementById("lego-name").innerHTML = data[idx].name;
	document.getElementById("lego-img").src = data[idx].imgSrc;
	document.getElementById("lego-count").innerHTML = data[idx].clickCount;
};

function addClick() {
	var toCmp = document.getElementById("lego-img").src;
	var idx;
	var dataLength = data.length;
	for(var i = 0; i < dataLength; i++){
		if(toCmp.indexOf(data[i].imgSrc) !== -1){
			idx = i;
			break;
		}
	}
	data[idx].clickCount++;
	document.getElementById("lego-count").innerHTML = data[idx].clickCount;
};

function showClick(){
	document.write("ShowClick!</br>");
	for(var i = 0; i < data.length; i++){
		document.write(data[i].clickCount + "</br>");
	}
};


