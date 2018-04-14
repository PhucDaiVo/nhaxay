$(document).ready(function ($) {
	scroll();
	showMenu();
});

function scroll() {
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 131 && $(window).width() > 900) {
			$('.con-menu').addClass('fixed');
		} else {
			$('.con-menu').removeClass('fixed');
		}
	});
}

function showMenu() {
	$('.show-menu').click(function (e) {
		$('.con-menu').toggle();
		e.preventDefault();
		e.stopPropagation();
	});
	$(window).click(function () {
		if ($(window).width() < 900) {
			$('.con-menu').fadeOut();
		}
	});
}