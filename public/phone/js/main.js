/*!
Intelligent auto-scrolling to hide the mobile device address bar
Optic Swerve, opticswerve.com
Documented at http://menacingcloud.com/?c=iPhoneAddressBar
*/

var bodyTag;
var executionTime = new Date().getTime(); // JavaScript execution time
var aMenuClicked = false;
$().ready(function () {
	$('#qbTrans-pageTrans-dialog').hide();
})
// Document ready
//----------------
documentReady(function () {

	// Don't hide address bar after a distracting amount of time
	var readyTime = new Date().getTime()
	if ((readyTime - executionTime) < 3000) hideAddressBar(true);


	// -------- Search box hover active state end ------ //

	// Toggle script

	$(".container").hide();

	$(".toggle").click(function () {
		$(this).toggleClass("active").next().slideToggle(350);
		return false;
	});

	// -------- Toggle script end ------ //

	$("#submenu-1").hide();

	if ("ontouchstart" in document.documentElement) {

		$('#a-menu').bind('touchstart touchon', function (event) {
			if (aMenuClicked) {
				$('#content-wrapper').removeClass('moved');
				$('.menu').removeClass('activeState');
				aMenuClicked = false;
			}
			else {
				$('#content-wrapper').addClass('moved');
				$('.menu').addClass('activeState');

				aMenuClicked = true;
			


			}
		});
		console.log(aMenuClicked);

		// 空白切换导航

		$('#contents').bind('click', function (event) {
			// alert('222');
			$('#content-wrapper').removeClass('moved');
			$('.menu').removeClass('activeState');
			aMenuClicked = false;
		})
			// 路转
			$('#submenu-1 li').bind('touchstart touchon', function (event) {
				var hre=$(this).attr('link');
				console.log(hre);
				window.location.href = hre;
			})
			$('#submenu-2 li').bind('touchstart touchon', function (event) {
				var hre=$(this).attr('link');
				// alert(hre);
				window.location.href = hre;
			})
		// 	$('#content-wrapper').bind('touchstart touchon', function(event){
		// 		if(aMenuClicked)
		// 		{
		// 			$('#content-wrapper').removeClass('moved');
		// 			$('.menu').removeClass('activeState');
		// 			aMenuClicked = false;
		// 		}
		// 		else
		// 		{
		// 			$('#content-wrapper').addClass('moved');
		// 			$('.menu').addClass('activeState');

		// 			aMenuClicked = true;
		// 		}
		// });

		$('#a-submenu-1').bind('touchstart touchon', function (event) {
			$('#submenu-1').show(250);
		});
	
		// .......
		$('#a-submenu-2').bind('touchstart touchon', function (event) {
			$('#submenu-2').show(250);
		});
		$('.shownav').bind('touchstart touchon', function (event) {
			$('.sub-nav').toggle(250);
			console.log($(this));
			  if($(this).find('img').hasClass("rotate")){ //点击箭头旋转180度

				                    $(this).find('img').removeClass("rotate");
				
				                    $(this).find('img').addClass("rotate1");
			}else{

				$(this).find('img').removeClass("rotate1"); //再次点击箭头回来

				$(this).find('img').addClass("rotate");

			}
		});
		

	}
	else {

		$('#a-menu').bind('click', function (event) {
			if (aMenuClicked) {
				$('.menu').removeClass('activeState');
				$('#content-wrapper').removeClass('moved');
				aMenuClicked = false;
			}
			else {
				$('.menu').addClass('activeState');
				$('#content-wrapper').addClass('moved');
				aMenuClicked = true;
			}
		});
		$('#submenu-1 li').bind('click', function (event) {
			var hre=$(this).attr('link');
			console.log(hre);
			window.location.href = hre;
		})
		$('#submenu-2 li').bind('click', function (event) {
			var hre=$(this).attr('link');
			// alert(hre);
			window.location.href = hre;
		})
		$('#a-submenu-1').bind('click', function (event) {
			$('#submenu-1').toggle(250);
		});
		$('#a-submenu-2').bind('click', function (event) {
			$('#submenu-2').toggle(250);
		});
		$('.shownav').bind('click', function (event) {
			$('.sub-nav').toggle(250);
		});
	
	}


});




// Run specified function when document is ready (HTML5)
//------------------------------------------------------
function documentReady(readyFunction) {
	document.addEventListener('DOMContentLoaded', function () {
		document.removeEventListener('DOMContentLoaded', arguments.callee, false);
		readyFunction();

	}, false);

}

// Hide address bar on devices like the iPhone
//---------------------------------------------
function hideAddressBar(bPad) {
	// Big screen. Fixed chrome likely.
	if (screen.width > 980 || screen.height > 980) return;

	// Standalone (full screen webapp) mode
	if (window.navigator.standalone === true) return;

	// Page zoom or vertical scrollbars
	if (window.innerWidth !== document.documentElement.clientWidth) {
		// Sometimes one pixel too much. Compensate.
		if ((window.innerWidth - 1) !== document.documentElement.clientWidth) return;

	}

	// Pad content if necessary.
	if (bPad === true && (document.documentElement.scrollHeight <= document.documentElement.clientHeight)) {
		// Extend body height to overflow and cause scrolling
		bodyTag = document.getElementsByTagName('body')[0];

		// Viewport height at fullscreen
		bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';

	}

	setTimeout(function () {
		// Already scrolled?
		if (window.pageYOffset !== 0) return;

		// Perform autoscroll
		window.scrollTo(0, 1);

		// Reset body height and scroll
		if (bodyTag !== undefined) bodyTag.style.height = window.innerHeight + 'px';
		window.scrollTo(0, 0);

	}, 1000);

}

// Quick address bar hide on devices like the iPhone
//---------------------------------------------------
function quickHideAddressBar() {
	setTimeout(function () {
		if (window.pageYOffset !== 0) return;
		window.scrollTo(0, window.pageYOffset + 1);

	}, 1000);

}

// 滚动条
$(window).resize(function() {
		
	console.log($(window).width());
	if($(window).width()> 800){
		window.location.replace("../index.html");
		
	}
	  });

	  $(function() {
		//	content css3
		var htmlHref = window.location.href;
		htmlHref = htmlHref.replace(/^http:\/\/[^/]+/, "");
		var addr = htmlHref.substr(htmlHref.lastIndexOf('/', htmlHref.lastIndexOf('/') - 1) + 1);
		var index = addr.lastIndexOf("\/");
		//js 获取字符串中最后一个斜杠后面的内容
		var addrLast = decodeURI(addr.substring(index + 1, addr.length));
		//js 获取字符串中最后一个斜杠前面的内容
		var str = decodeURI(addr.substring(0, index));
		console.log(addrLast+ "  " +str);
		console.log(addrLast);
		$(window).resize(function() {
			
			console.log($(window).width());
			if($(window).width()> 800){
				window.location.replace("../"+addrLast);
			
			}
			  });
	
	});




