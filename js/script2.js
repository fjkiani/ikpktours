$(document).ready(function() {
  

		/* Animations on scroll */
	$('.js--wp-1').waypoint(function(direction) {
	$('.js--wp-1').addClass('animated pulse');
	console.log("Hi");
	}, {
	offset: '50%'
	});
	
	
	
	$('.js--wp-2').waypoint(function(direction) {
	$('.js--wp-2').addClass('animated fadeIn');
	console.log("offset wp2");
	}, {
	offset: '50%'
	});
	
	$('.js--wp-3').waypoint(function(direction) {
	$('.js--wp-3').addClass('animated fadeIn');
	}, {
	offset: '50%'
	});
	
	$('.js--wp-4').waypoint(function(direction) {
	$('.js--wp-4').addClass('animated tada');
	}, {
	offset: '50%'
	});
	
	$('.js--wp-5').waypoint(function(direction) {
	$('.js--wp-5').addClass('animated fadeIn');
	}, {
	offset: '50%'
	});
	
	$('.js--wp-6').waypoint(function(direction) {
	$('.js--wp-6').addClass('animated fadeInLeftBig');
	}, {
	offset: '50%'
	});
	
	$('.js--wp-7').waypoint(function(direction) {
	$('.js--wp-7').addClass('animated fadeIn');
	}, {
	offset: '50%'
	});
	
	$('.js--wp-7').waypoint(function(direction) {
	$('.js--wp-7').addClass('animated fadeIn');
	}, {
	offset: '50%'
	});
	

	$('.js--wp-8').waypoint(function(direction) {
		$('.js--wp-8').addClass('animated fadeIn');
		}, {
		offset: '50%'
		});


	$('.js--wp-9').waypoint(function(direction) {
		$('.js--wp-9').addClass('animated fadeInLeft');
		}, {
		offset: '50%'
		});

		$('.js--wp-10').waypoint(function(direction) {
			$('.js--wp-10').addClass('animated fadeIn');
			}, {
			offset: '50%'
			});	

			$('.js--wp-11').waypoint(function(direction) {
				$('.js--wp-11').addClass('animated fadeIn');
				}, {
				offset: '50%'
				});	

				$('.js--wp-12').waypoint(function(direction) {
					$('.js--wp-12').addClass('animated fadeIn');
					}, {
					offset: '50%'
					});		

		//   hover effects 
		$("h2").hover(function(){
			$(this).css("background-color", "yellow");
			}, function(){
			$(this).css("color", "black");
			
			});				
	
	});