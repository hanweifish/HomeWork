// Code goes here
var GrandCarousel = document.getElementById("GrandCarousel");
var CargoTrain = document.getElementById("CargoTrain");
var Santa = document.getElementById("Santa");
var GrandEmporium = document.getElementById("GrandEmporium");
var MINICooper = document.getElementById("MINICooper");
var TownHall = document.getElementById("TownHall");

GrandCarousel.addEventListener("click", picText);
CargoTrain.addEventListener("click", picText);
Santa.addEventListener("click", picText);
GrandEmporium.addEventListener("click", picText);
MINICooper.addEventListener("click", picText);
TownHall.addEventListener("click", picText);


function picText() {

  var allImages = document.querySelectorAll("img");
  
  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  
  document.getElementById("text").innerHTML = this.innerHTML;

  if(pic.className === "hide") {
 	 pic.className = "";
  } else {
 	 pic.className = "hide";
  }
}