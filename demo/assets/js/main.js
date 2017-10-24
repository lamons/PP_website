$(document).ready(function(){
	$(".publication-toggle").click(function(){
		$(".music").hide();
		$(".about").hide();
		$(".publication").show("slide", { direction: "left" }, 300);
		$(".music-toggle").css("text-decoration", "none");
		$(".about-toggle").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});
$(document).ready(function(){
	$(".music-toggle").click(function(){
		$(".publication").hide();
		$(".about").hide();
		$(".music").show("slide", { direction: "left" }, 300);
		$(".about-toggle").css("text-decoration", "none");
		$(".publication-toggle").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});
$(document).ready(function(){
	$(".about-toggle").click(function(){
		$(".music").hide();
		$(".publication").hide();
		$(".about").show("slide", { direction: "left" }, 300);
		$(".publication-toggle").css("text-decoration", "none");
		$(".music-toggle").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});
