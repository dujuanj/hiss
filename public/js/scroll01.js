/*窗口大小*/
var winWidth,winHeight;
var win_h =  $(window).height()*0.6;
var F_high1 = $(window).scrollTop();
var animate_p1 = $(".animate_p1").offset().top;
if(F_high1 == 0){
	$(".OS_part1 .os_tilte").addClass("on");
	$(".OS_part1 .OS_part1_inner").addClass("on");	
	}
	

$(function(){
	$(window).scroll(function(){
		
		funHeight(".animate_p1" , ".OS_part1 .OS_mess")
		funHeight(".animate_p1" , ".OS_part1 .OS_cell")
		// funHeight(".animate_p4" , ".OS_part6 .OS_part6_img")
		// funHeight(".animate_p4" , ".OS_part6 .title_mess")
		// funHeight(".animate_p4" , ".OS_part6 .a_part6")
		// funHeight(".animate_p4" , ".OS_part6 .delay02")
		// funHeight(".animate_p4" , ".OS_part6 .delay01")
		// funHeight(".animate_p5" , ".OS_part7 .title_mess")
		// funHeight(".animate_p5" , ".OS_part7 .OS_part7_img")


		funHeight(".animate_p2" , ".OSD_part2 .OSD2_title")
		funHeight(".animate_p2" , ".OSD_part2 .delay01")
		funHeight(".animate_p2" , ".OSD_part2 .delay02")


		funHeight(".animate_p1" , ".OSF_part2 .OS_num .delay03")
		funHeight(".animate_p1" , ".OSF_part2 .OS_num .delay04")
		funHeight(".animate_p1" , ".OSF_part2 .OS_num .delay05")
		funHeight(".animate_p1" , ".OSF_part2 .OSF_title")

		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liOne img")
		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liOne p")
		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liTwo img")
		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liTwo p")
		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liThree img")
		funHeight(".animate_p2" , ".OSF_part4 .OSF_part4_liThree p")
		funHeight(".animate_p3" , ".OSF_part4 .OSF_part1_info1")
		// funHeight(".animate_p4" , ".OSF_part5 .OSF_title")

})

})

function funHeight(n , c){
		var F_high = $(window).scrollTop();
		var t = $(n).offset().top;
		if(F_high > t - win_h){
			$(c).addClass("on")
		}
		if(F_high == 0){
			$(c).removeClass("on")
		}
}
$(function() {
    	var n = 0;
    	var win_h =  $(window).height();
    


    function moveAnimation(animate_p, name, scale){
    	$(window).mousewheel(function(event, delta) {
	    	var F_high = $(window).scrollTop();
	    	if (!$(animate_p).offset()) {
	    		return;
	    	}
			var t = $(animate_p).offset().top;
	        var t_height = $(name).height();
	       	 if (delta > -1) {
		        	// n = 200;
		        	if(F_high < t + t_height + win_h){
		        		n-=6;
		        		if(n <= 0){ 
			            	n = 0;
	                        $(name).css("transform", "translateY(0px) scale("+scale+")");
			            }else{
	                        $(name).css("transform", "translateY("+n+"px) scale("+scale+")");
			            }
		        	}
		            
		        } else if(F_high > t - win_h){
		        		n+=6;
			        	if(n >= 100){
			        		n = 100;
	                        $(name).css("transform", "translateY(100px) scale("+scale+")");
			        	}else{

	                        $(name).css("transform", "translateY("+ n +"px) scale("+scale+")");
			        	}
			        	
		        	}
		        	
	    });
    }

    moveAnimation(".animate_p101", ".OS_part2 .OS_part2_over", 1);
    moveAnimation(".animate_p202", ".OS_part5 .OS_part5_over", 1);
    moveAnimation(".animate_p101", ".OSD_part4 img", 1);
    // moveAnimation(".animate_p202", ".HISS_Design_part8", 1.2);
    // moveAnimation(".animate_p303", ".HISS_Design_part4", 1);
});










