$(document).ready(function() {
	$("ul").on("click", "li", function() {
		$("li").removeClass("activeTab");
		$(this).addClass("activeTab");
		var index = $(this).index("li");
		$(".content p").removeClass("activeContent");
		$(".content p").eq(index).addClass("activeContent");
	});
});