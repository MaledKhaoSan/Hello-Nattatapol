// window.onload = function() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// 	if(!window.location.hash) {
// 		window.location = window.location + '#AboutMe';
// 		window.location.reload();
// 	}
// }





	if(window.location.hash) {
		// Fragment exists
		var refresh = window.localStorage.getItem('refresh');
		console.log("with Hash");
		if (refresh===null){
			window.location.reload();
			window.localStorage.setItem('refresh', "1");
		}
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
			window.requestAnimationFrame();
		}
		$(window).bind('load', function() {
			$('.overlay').addClass('loaded');
			setTimeout(function() {
				$('.overlay').css({'display':'none'})

			}, 2900)
		});

	  } else {
		// Fragment doesn't exist
	  }






// $(document).ready(function() {
// 	// Will remove overlay for users cannnot load properly.
// 	setTimeout(function() {
// 		$('.overlay').addClass('loaded');
// 	}, 10000);

// 	// Will wait for everything on the page to load.
// 	$(window).bind('load', function() {
// 		$('.overlay').addClass('loaded');
// 		setTimeout(function() {
// 			$('.overlay').css({'display':'none'})

// 		}, 10000)
// 		if(!window.location.hash) {
// 			window.location = window.location + '#AboutMe';
// 			window.location.reload();
// 		}
// 	})
// })

$(document).ready(function() {
	if(!window.location.hash) {
		window.location = window.location + '#AboutMe';
		$(window).bind('load', function() {
			$('.overlay').addClass('loaded');
			setTimeout(function() {
				$('.overlay').css({'display':'none'})

			}, 2900)
		});
	}
})
