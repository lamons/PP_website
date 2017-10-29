$(document).ready(function(){
	$(".publication-toggle").click(function(){
		$(".menu-lv2").hide();
		$(".lv3").hide();
		$(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
		$(".logo3d-container").offset({ top: l3y, left: l3x });
		$(".publication").show("slide", { direction: "left" }, 300);
		$(".music-toggle").css("text-decoration", "none");
		$(".about-toggle").css("text-decoration", "none");
		$(".publication-index").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});
$(document).ready(function(){
	$(".music-toggle").click(function(){
		$(".menu-lv2").hide();
		$(".lv3").hide();
		$(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
		$(".logo3d-container").offset({ top: l3y, left: l3x });
		$(".publication-index").css("text-decoration", "none");
		$(".music").show("slide", { direction: "left" }, 300);
		$(".about-toggle").css("text-decoration", "none");
		$(".publication-toggle").css("text-decoration", "none");
		$(".publication-index").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});
$(document).ready(function(){
	$(".about-toggle").click(function(){
		$(".menu-lv2").hide();
		$(".lv3").hide();
		$(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
		$(".logo3d-container").offset({ top: l3y, left: l3x });
		$(".publication-index").css("text-decoration", "none");
		$(".about").show("slide", { direction: "left" }, 300);
		$(".publication-toggle").css("text-decoration", "none");
		$(".music-toggle").css("text-decoration", "none");
		$(".publication-index").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});

$(document).ready(function(){
	$(".joyride").click(function(){
		$(".lv3").hide();
		$(".joyride-entry").show("slide", { direction: "left" }, 300);
		$(".publication-index").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});

