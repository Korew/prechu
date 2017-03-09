$(function() {
	$('.navbar-toggle').on('click', function() {
		var target = $(this).attr('href');
		$(this).toggleClass('active');
		$('#navbar-collapse').toggleClass('collapse');
	})
})

$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true
    })        
  });