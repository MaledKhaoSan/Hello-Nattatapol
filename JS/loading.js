window.onload = function() {
	if(!window.location.hash) {
		window.location = window.location + '#AboutMe';
		window.location.reload();
	}
}