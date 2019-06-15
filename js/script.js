
// Mobile Navbar


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


// Lazy Load 

const myLazyLoad = new LazyLoad ({
	elements_selector: ".photo1";
});


// var lazyLoadInstance = new LazyLoad({
//     elements_selector: ".lazy"
//     // ... more custom settings?
// });
//  