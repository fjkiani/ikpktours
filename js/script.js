// Itinerary Details

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

// -----top function----/// 
// get the button 
// let mybutton = document.getElementById("myBtn", "myBtn2" );

// //when user scrolls 20px from top, show the button 
// window.onscroll = function () {
// if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
// 	mybutton.style.display = "block";
// }
// else {
//  mybutton.style.display = "none";

//  }

// }

//when user clicks the button, scroll to the top 

function topFunction () {
	document.body.scrollTop = 1100;
	document.documentElement.scrollTop = 1100;
}

function topFunction3 () {
	document.body.scrollTop = 1500;
	document.documentElement.scrollTop = 1500;
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

