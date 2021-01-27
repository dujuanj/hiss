	window_w = $(window).width();
	
	var i=0;
	var i1 = 0;
	var clone=$(".pro_part2 .list li").first().clone();
	$(".pro_part2 .list").append(clone);	
	var size=$(".pro_part2 .list li").length;
	
	getWindowSize();									
											
	window.onresize=function(){
	 	window_w = $(window).width();
	}									
											
										
	var clone1 = $(".OSD_part6 .ca_img ul li:last-child");
	$(".ca_img ul").append(clone1);
	var size1=$(".ca_img ul li").length;

	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},5000)
	var t1 = setInterval(function(){
		i1++;
		move1()
	},5000)
	
	/*对banner定时器的操作*/
	// $(".pro_part2").hover(function(){
	// 	clearInterval(t);
	// },function(){
	// 	t=setInterval(function(){
	// 		i++;
	// 		move()
	// 	},5000)
	// })
	
	
	/*向左的按钮*/
	$(".pro_part2 .btn_l").click(function(){
		i--
		move();	
	})
	
	
	/*向右的按钮*/
	$(".pro_part2 .btn_r").click(function(){
		i++
		move()				
	})
	$(".btn_part6_next").click(function(){
		i1--
		move1();	
	})
	
	
	/*向右的按钮*/
	$(".btn_part6_prev").click(function(){
		i1++
		move1()				
	})
	
	function move1(){
		// alert(i)
		if(i1==size1){
			$(".ca_img ul").css({left:0})			
			i1=1;
		}
		
		if(i1==-1){
			$(".ca_img ul").css({left:-(size1-1)*800})
			i1=size1-2;
		}
		
		$(".ca_img ul").stop().animate({left:-i1*800},500)	
		
	}
	
	function move(){
		// alert(i)
		if(i==size){
			$(".pro_part2  .list").css({left:0})			
			i=1;
		}
		
		if(i==-1){
			$(".pro_part2 .list").css({left:-(size-1)*window_w})
			i=size-2;
		}
		
		$(".pro_part2 .list").stop().animate({left:-i*window_w},500)	
		
	}


	




//获取窗口大小
function getWindowSize(){
	//获取窗口宽度
	if (window.innerWidth){
		 winWidth = window.innerWidth;
		}
	else if ((document.body) && (document.body.clientWidth)){
		 winWidth = document.body.clientWidth;
		}
	//获取窗口高度
	if (window.innerHeight){
		 winHeight = window.innerHeight;
		}
	else if ((document.body) && (document.body.clientHeight)){
		 winHeight = document.body.clientHeight;
		}
	//通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement  && document.documentElement.clientHeight &&document.documentElement.clientWidth){
	   winHeight = document.documentElement.clientHeight;
	   winWidth = document.documentElement.clientWidth;
		}
}



