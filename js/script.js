


// $(document).ready(function() {


// /* Scroll on buttons */
    
//     /* Scroll on buttons */
//     $('.js--scroll-to-plans').click(function () {
// 		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
// 	 });
	 
// 	 $('.js--scroll-to-start').click(function () {
// 		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
// 	 });

// 	});



// No autoplay on carousel ///

// $('.carousel').carousel({
//     data-interval: false;
// }); 


function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }



/* Mobile Navbar */


const navSlide = () => {



	window.onload = navSlide;

	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	// toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

	//animate links

	navLinks.forEach((link, index) => {
		// link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.5}s`;
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`
		}

		});

	//burger animation
	burger.classList.toggle('toggle');

		});

	}

navSlide();


function openNav() {
  document.getElementById("navLinks").style.width = "100%";
}


function closeNav() {
  document.getElementById("navLinks").style.width = "0%";
	}



	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') ) {
			$(this).collapse('hide');
		}
	});
