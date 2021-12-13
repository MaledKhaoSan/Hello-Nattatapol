window.onload = function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	if(!window.location.hash) {
		window.location = window.location + '#AboutMe';
		window.location.reload();
	}
}



var refresh = window.localStorage.getItem('refresh');
console.log(refresh);
if (refresh===null){
	window.location.reload();
	window.localStorage.setItem('refresh', "1");
}

window.onbeforeunload = function () {
window.scrollTo(0, 0);
window.requestAnimationFrame();
}




$(document).ready(function() {
	// Will remove overlay for users cannnot load properly.
	setTimeout(function() {
		$('.overlay').addClass('loaded');
	}, 2900);

	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2900)
	})
})
