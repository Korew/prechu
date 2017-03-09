$(function() {
	$('.navbar-toggle').on('click', function() {
		var target = $(this).attr('href');
		$(this).toggleClass('active');
		$('#navbar-collapse').toggleClass('collapse');
	})
})