function hidelv2(){
	$(".lv3").hide();
	$(".lv2").hide();
}

function hidelv3(){
	$(".lv3").hide();
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
		$("#entry-cx1").show();
	});
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

