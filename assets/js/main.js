$(document).ready(function(){
	$(".publication-toggle").click(function(){
		$(".menu-lv2").hide();
		$(".lv3").hide();
		$(".logo3d-container").css({"position": "absolute", "z-index": "-100"});
		$(".logo3d-container").offset({ top: l3y, left: l3x });
		$(".pub-content").offset({ top: pty});
		$(".publication").show();
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
		$(".music-content").offset({ top: mty});
		$(".publication-index").css("text-decoration", "none");
		$(".music").show();
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
		$(".about-content").offset({ top: aty});
		$(".publication-index").css("text-decoration", "none");
		$(".about").show();
		$(".publication-toggle").css("text-decoration", "none");
		$(".music-toggle").css("text-decoration", "none");
		$(".publication-index").css("text-decoration", "none");
		$(this).css("text-decoration", "line-through");
	});
});

$(".joyride").click(function(){
	console.log("sss");
	$.ajax({
		url: 'index_zh.php',
		data: {"article": alvalee},
		type: 'GET',
		success: function(data)
		{
			$(".entry").html(data);
		}
	});

	$(".lv3").hide();
	$(".joyride-entry").show("slide", { direction: "left" }, 300);
	$(".publication-index").css("text-decoration", "none");
	$(this).css("text-decoration", "line-through");
});


//$(document).ready(function(){
//	$(".joyride").click(function(){
//		console.log("sss");
//		$.ajax({
//			url: 'index_zh.php',
//			data: {"article": alvalee},
//			type: 'GET',
//			success: function(data)
//			{
//				$(".entry").html(data);
//			}
//		});
//
//		//$(".lv3").hide();
//		//$(".joyride-entry").show("slide", { direction: "left" }, 300);
//		//$(".publication-index").css("text-decoration", "none");
//		//$(this).css("text-decoration", "line-through");
//	});
//});

