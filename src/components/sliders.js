export const teamSwiper = new Swiper('.team__slide-container', {
	pagination: {
		el: '.team__pagination',
		clickable: true,
	},

	scrollbar: {
		draggable: true,
	},

	navigation: {
		nextEl: '.team__button-next',
		prevEl: '.team__button-prev',
	},

	mousewheel: true,
	slidesPerView: 2.06,
	spaceBetween: 8,
	initialSlide: 0,
	freeMode:true,
	speed:800,

	breakpoints: {
		600: {
			slidesPerView: 3,
			spaceBetween: 30,
		},

		900: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},

	autoplay: {
delay:2400,
stopOnLastSlide:true,
disableOnInteraction:false,
	},
});