$(function(){
	/*窗口大小*/
var winWidth,winHeight;
var win_h =  $(window).height()*0.6;
var win_height = $(window).height()*1;


	$(window).scroll(function(){
		funHeight(".animate_p1" , ".sf_part2 .sf_part2_list .delay01");
		funHeight(".animate_p1" , ".sf_part2 .sf_part2_list .delay02");
		funHeight(".animate_p1" , ".sf_part2 .sf_part2_list .delay03");

		funHeight(".animate_p2" , ".sf_part4 .sf_part4_img");
		funHeight(".animate_p3" , ".sf_part4 .sf_part4_info .delay01");
		funHeight(".animate_p3" , ".sf_part4 .sf_part4_info .delay02");
		funHeight(".animate_p3" , ".sf_part4 .sf_part4_info .delay03");
		funHeight(".animate_p3" , ".sf_part4 .sf_part4_info .delay04");
		// funHeight(".animate_p4" , ".sf_part6 img");

		


		funHeight(".animate_p2" , ".sfd_part5_img img");
		funHeight(".animate_p3" , ".sfd_part6 .sfd_top img");
		funHeight(".animate_p3" , ".sfd_part6 .sfd_bottom  img");
		funHeight(".animate_p3" , ".sfd_part6 .sfd_part6_title");
		funHeight(".animate_p4" , ".sfd_part6 .sfd_part6_title");
		funHeight(".animate_p4" , ".sfd_part2  video");
		
		if($(".sfd_part2  video").hasClass("on")){
			document.getElementById('myVideo').play();
		}
		

		funHeight(".animate_p1" , ".sff_part3 .sff_part3_bg");
		funHeight(".animate_p1" ,".sff_part3 .sff_part3_bg_US");

		funHeight(".animate_p2" , "#box_one");
		funHeight(".animate_p2" , "#box_two");
		funHeight(".animate_p2" , "#box_three");
		funHeight(".animate_p2" , ".sff_part5 .battery img:nth-of-type(1)");
		funHeight(".animate_p2" , ".sff_part5 .battery img:nth-of-type(2)");
		funHeight(".animate_p2" , ".sff_part5 .battery img:nth-of-type(3)");
		funHeight(".animate_p2" , ".sff_part5 .battery img:nth-of-type(4)");

	})











function funHeight(n , c){
		var F_high = $(window).scrollTop();
		var t = $(n).offset().top;
		if(F_high > t - win_h){
			$(c).addClass("on");
		}
		if(F_high == 0){
			$(c).removeClass("on");
		}
}

})


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

    moveAnimation(".animate_p101", ".figure_bg", 1.2);
    moveAnimation(".animate_p101", ".sfd_part3_img", 1.2);
    moveAnimation(".animate_p202", ".sfd_part5_move", 1.2);
    moveAnimation(".animate_p101", ".sff_part3_bg", 1.2);
});


























