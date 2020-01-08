function hidelv2(){
	$(".lv3").hide();
	$(".lv2").hide();
}

function hidelv3(){
	$(".lv3").hide();
}

function getAnchor() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
}

$(document).ready(function(){
	$(".publication-toggle").click(function(){
		hidelv2();
		$(".publication").show();
	});
	$(".about-toggle").click(function(){
		hidelv2();
		$(".about").show();
	});
});

$(document).ready(function(){
	$(".pub-entry-toggle").click(function(){
		hidelv3();
	});
	$("#cx1").click(function(){
		$(".entry").show();
		$("#landscapesWithColor").show();
	});
});

$(document).ready(function(){
	var pagehash = getAnchor();
	if (pagehash == 'entry-cx1') {
		window.location.href = "#landscapesWithColor";
		$(".publication").show();
		$(".entry").show();
		$("#landscapesWithColor").show();
	}
	else if (pagehash == 'landscapesWithColor') {
		$(".publication").show();
		$(".entry").show();
		$("#landscapesWithColor").show();
	}
	else if (pagehash == 'about') {
		$(".about").show();
	}
	else if (pagehash == 'publication') {
		$(".publication").show();
	}
});

// $(".joyride").click(function(){
	// console.log("sss");
	// $.ajax({
		// url: 'index_zh.php',
		// data: {"article": alvalee},
		// type: 'GET',
		// success: function(data)
		// {
			// $(".entry").html(data);
		// }
	// });

	// $(".lv3").hide();
	// $(".joyride-entry").show("slide", { direction: "left" }, 300);
	// $(".publication-index").css("text-decoration", "none");
	// $(this).css("text-decoration", "line-through");
// });


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

