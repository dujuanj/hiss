var myVideo;
var setp_list;
var setTime;
var videoCarousel;
function videoPlay(name){
	
	myVideo = document.getElementById(name);//获取video元素
	tol = 0;//总时长
}

function playBySeconds(num){
	myVideo.currentTime = num;
}

function playVid()
  {
  myVideo.play();
  }

function pauseVid()
  {
  myVideo.pause();
  }


$(".video_animate li").click(function(){
	setp_list = $(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$('.step li').eq(setp_list).stop().fadeIn(3000).siblings().stop().fadeOut(10);
	$(".video_li li").eq(setp_list).addClass("on").siblings().removeClass("on");
})


$(".video_animate li").mouseover(function(){
	clearInterval(setTime)
})


function videoas(name){
	videoCarousel = document.getElementById(name)
	videoCarousel.play();
}


$(".one").click(function(){
	videoas("one")
})
$(".two").click(function(){
	videoas("two")
})
$(".three").click(function(){
	videoas("three")
})


videoPlay("myVideo");
$(".replay").click(function(){
	playBySeconds(0);
	playVid();
	
})
$(".HISS_Fun_part3 .replay").click(function(){
	var currentTime;
	document.getElementById('myVideo').addEventListener("timeupdate" , function(){
		currentTime = document.getElementById('myVideo').currentTime;//获取当前播放时间

	});
	currentTime = 0;
	document.getElementById('myVideo').play();
})
$(".replayNum").click(function(){
	document.getElementById('myVideo1').addEventListener("timeupdate" , function(){
		var currentTime = document.getElementById('myVideo1').currentTime;//获取当前播放时间

	});
	document.getElementById('myVideo1').currentTime = 0;
	document.getElementById('myVideo1').play();
})