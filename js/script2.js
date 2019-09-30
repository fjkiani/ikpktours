

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

			//   hover effects 
			$("h2").hover(function(){
				$(this).css("background-color", "yellow");
				}, function(){
				$(this).css("color", "black");


		    // Animation on scroll using waypoint - > replaced with AOC
			$('.js--wp-1').waypoint(function(direction) {
				$('.js--wp-1').addClass('animated pulse');
				}, {
					offset: '50%'
			});	
				
	});		
	
	


	
	});