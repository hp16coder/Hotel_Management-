

// header scrolled 
//let nav = document.querySelector(".navbar");
//window.onscroll = function(){
	//if (document.documentElement.scrollTop > 50) {
		//nav.classList.add("header-scrolled");
	//}
	//else{
	//			nav.classList.remove("header-scrolled");

	//}
//}
// nav hide 

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
	a.addEventlistener("click", function()
	{
		navCollapse.classList.remove("show");
	})
})

//Swiper slider 
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

//var swiper = new swiper(".mySwiper",{
	direction: "vertical",
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable:true,

	},
	autoplay: {
		delay: 3500,
	}
})


//counter design

//our partner