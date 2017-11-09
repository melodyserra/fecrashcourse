$(window).resize(function() {
	resizeBanner();
});

resizeBanner();

function resizeBanner() {
	$(".banner").height($(window).height());
}