$(document).ready(function() {
	$("ul").on("mouseover", "li", function() {
		$(this).prevAll().add($(this)).addClass("fill");
		$(this).nextAll().removeClass("fill");
	});
	$("ul").on("click", "li", function() {
		var index = $(this).index("li");
		$(".rating").text(index + 1);
	});
});