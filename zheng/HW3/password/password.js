$(document).ready(function() {
	$("input").on("keyup", function(){
		$(".pswd").val($(".txt").val());
		console.log($(".pswd").val());
		console.log($(".txt").val());
	});
});