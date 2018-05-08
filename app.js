$(document).ready(() => {
	// Action on button click
	$("#btn").click(() => {
		$(".content").fadeToggle('fast', function(){
			$(".box").animate({
				opacity:1,
				marginTop: "+=30px"
        	},'fast');
		});
	});

	// Action on close button click
	$(".close").click(() => {
		
		$(".box").animate({
				opacity:0,
				marginTop: "-=30px"
        },150, function(){
        	$(".content").fadeOut(200);
        });
	});	
})