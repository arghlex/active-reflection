(function rSlides(){
	$("#slider").responsiveSlides({
		auto: true,
		pause: true,
		pager: true,
		nav: true,
		speed: 500,
		maxwidth: 940,
		namespace: "centered-btns"
	});
})();
(function buildMobileMenu(){
	var btnHtml = "<button class=\"mobile-nav-toggle\">Menu</button>",
		$navMenu = $('nav .site');
	$('header nav').prepend(btnHtml);
	$button = $('.mobile-nav-toggle');
	$button.on('click', function(){
		$navMenu.toggleClass('on');
	});
})();