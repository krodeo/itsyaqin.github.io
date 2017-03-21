$(document).ready(function(){
	window.location = "munir-levi.tk/e-vite";
	// smoothScroll();
	// randomBG(8);
	// scrollNavbar();
});

function randomBG(num)
{
	var num = Math.floor((Math.random()*num)+1);
	$("#sec-main").css('background-image',"url('assets/images/bg/bg"+num+".jpg')");
}

function scrollNavbar()
{
	$(window).scroll(function(){
		if ($(document).scrollTop() > 50)
		{
			$("#top-nav > .navbar").addClass('scrolled');
		}
		else
		{
			$("#top-nav > .navbar").removeClass('scrolled');
		}
	});
}

function smoothScroll()
{
	$('a').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
}