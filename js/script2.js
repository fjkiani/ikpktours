
$(document).ready(function() {

			 /* For the sticky navigation */
			 $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
		});

		
				    /* Scroll on buttons */
						$('.js--scroll-to-plans').click(function () {
							$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
					 });
					 
					 $('.js--scroll-to-start').click(function () {
							$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
					 });


			//   hover effects 
			$("h2").hover(function(){
				$(this).css("background-color", "yellow");
				}, function(){
				$(this).css("color", "black");


		    // Animation on scroll using waypoint - > replaced with AOC
			// $('.js--wp-1').waypoint(function(direction) {
			// 	$('.js--wp-1').addClass('animated pulse');
			// 	}, {
			// 		offset: '50%'
			// });	
				
		});		



		
	
	});


	///loader
	$(window).on("load",function(){
		$(".loader-wrapper").fadeOut("slow");
	});


	