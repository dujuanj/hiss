

//二级导航栏的href获取
$(function(){

	//hrefName(".change_nav li");
	hrefName(".hiss_header_nav ul li");
	hrefName(".Experience_Center_content span");
	var sSource = ctx + "/web/shoppingCart/getRecordCount?now=" + new Date().getTime();
	$.ajax({
		"dataType" : 'json',
		"type" : "POST",
		"cache": false,
		"url" : sSource,
		"success" : function(data, textStatus, jqXHR){
			jQuery("#shoppingCount").html(data);
		}
	});
	$(".newSelect a").click(function(){
		$(".newInput").show();
		$(".newSelect").hide();
	})
	$(".newInput a").click(function(){
		$(".newInput").hide();
		$(".newSelect").show();
		})
	var F_high;
	$(window).scroll(function(){
		F_high = $(window).scrollTop();
		if(F_high > 70){
			$("#leBox_info").addClass("on");
			$(".Experience_Center_menu").addClass("on")
			$(".leBox_fixed").addClass('on')
			$(".my_order_nav").addClass("on")
		}else{
			$("#leBox_info").removeClass("on")
			$(".Experience_Center_menu").removeClass("on")
			$(".leBox_fixed").removeClass("on")
			$(".my_order_nav").removeClass("on")
		}
	})
})

$(".WeChatShow").hover(function(){
		$(".WeChat").show();
		},function(){
			$(".WeChat").hide();
	})


getWindowSize();
// 控制弹层遮罩层
var windowH = $("html").height();
$(".loading_tan").css("height" , windowH);
$(".alert_tan").css("height" , windowH);
$(window).resize(function(){
	var windowH = $("html").height();
	$(".loading_tan").css("height" , windowH);
	$(".alert_tan").css("height" , windowH);
})

// 结账提示框
$(".closing_account").on("click" , function(){
	$(".alert_tan").fadeIn(500);
	$(".alert_wrap").fadeIn(500);
})
$(".closing_account").on("load" , function(){
	$(".loading").fadeIn(500);
	$(".loading_tan").fadeIn(500);
})
$(".close").on("click", function(){
	$(".alert_tan").fadeOut(500);
	$(".alert_wrap").fadeOut(500);
})




var index=window.location.href.split("/").length-1;
var href=window.location.href.split("/")[index];
if (href.indexOf("?")>=0) {
	href = href.substr(0, href.indexOf("?"));
}
//.substr(0,window.location.href.split("/")[index].length);
// alert(href)
var arr = ["disney.html", "leBox.html", "Design.html", "Function.html", "technical_specifications.html", "O_S.summary.html", "O.S.design.html", "O.S.Function.html", "O.S.technical_specifications.html",
			"safirst.summary.html", "safirst.design.html", "safirst_function.html", "safirstt_technical.html" ,"HISSSafe.summary.html", "HISSSafe_design.html", "HISSSafe_Function.html", "HISSSafe_Tec.html"];

var arr01 = ["Offline_ac", "View_all.h"];

var arr02 = ["Service_pr"];

var menu = "safirst.summary.html,HISSSafe.summary.html,leBox.html,O_S.summary.html";
var experience_center_menu = "Offline_activity.html,View_all.html";

var arrOnling = ["lebox_buy.", "HISSSafe_b", "O_S_buy.ht", "safirst_bu", "online_sho"]
arrList(".hiss_header_nav ul li:last-child a", arrOnling);
arrList(".hiss_header_content a" ,arr);
arrList(".hiss_header_nav ul li:nth-of-type(3) a", arr01);
arrList(".hiss_header_nav ul li:nth-of-type(4) a", arr02);
function arrList(name , _arr){
	for (var i = 0; i < _arr.length; i++) {
		if(href.length > 0){
			if(href.indexOf(_arr[i])>=0){
				$(name + "[href*='"+href+"']").addClass("on");
				break;
			}
		}
	}
	var arrStr = arr.join(",");
	if (arrStr.indexOf(href)>=0) {
		$(".hiss_header_nav ul li a[href*='leBox.html']").addClass("on");
	}
}
function hrefName(name){
	if(href.length>0){
		// alert(href)
		
		if (menu.indexOf(href)>=0) {
			$(""+ name +" a[href*='leBox.html']").addClass("on");
		} else {
			$(""+ name +" a[href*='"+href+"']").addClass("on");
		}
		if (experience_center_menu.indexOf(href)>=0) {
			$(".hiss_header_nav ul li a[href*='Experience_Center.html']").addClass("on");
		}
	}else{
		$(""+ name +" a[href*='index']").addClass("on");
	}
}











$("#checked_all").click(function(){
	$(".my_st_info_content .my_product_info .checkbox input").attr("checked" , true);

})

//商城
var proLenght = $(".my_st_info_content .my_product_info").length;
var proNode = $(".my_st_info_content .my_product_info").index();
$(".my_st_info_content .my_product_info").eq(proNode-3).addClass("bto0")




$(function(){
	// 页面导航栏
	$(".hiss_header_nav>ul>li").click(function(){
		var liNode = $(this).index();
		// alert(liNode);
		$(this).addClass("menu_avtive").siblings().removeClass("menu_avtive");
	});
	$(".menu_list>ul>li").click(function(){
	var menuLi = $(this).index();
	$(".header_hide").show();
	// alert(menuLi);
	menuList(menuLi);
})	
})



$("#hover_display,.HISS_hover").mouseover(function(){
	$(".HISS_hover").stop().slideDown(300);
}).mouseout(function(){
	$(".HISS_hover").stop().slideUp(300);
})
//乐盒img的高度自适应
	var imgList = $(".part2_listImg img").height();
		$(".part2_listImg").css("height" , imgList);
	$(window).resize(function(){
		var imgList = $(".part2_listImg img").height();
		$(".part2_listImg").css("height" , imgList);

	});

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






$("#order_tracking").click(function(){
	if($("#checkCustomerLogin").val()!="login"){
		$(".login_info").show();
		$(".login_all input").val("");
		$(".login").fadeIn();
	}
})

// 导航栏中的搜索 注册购物的函数
function menuList(index){
	switch(index){
		case 0:
		$('.search').show();
		$('.search_tan').show();
	    $('.input_search').animate({
	    	width: "800px"
	     },800);
	    setTimeout(runAnimate , 800);
	    break;
	    
	}
}

// 搜索栏弹层
function runAnimate(){
	$('.search_img').show();
	$('.search_contect').show();
	$(".input_search input").show();
	$(".search_img").animate({right:"30px"} , 500);
	$(".input_search input").animate({width:"760px" }, 450);
	$(".search_contect p:nth-of-type(1)").animate({left:"0"} , 500);
	$(".search_contect p:nth-of-type(2)").animate({left:"0"} , 550);
	$(".search_contect p:nth-of-type(3)").animate({left:"0"} , 600);
	$(".search_contect p:nth-of-type(4)").animate({left:"0"} , 650);
	$(".search_contect p:nth-of-type(5)").animate({left:"0"} , 700);
	$(".search_contect p:nth-of-type(6)").animate({left:"0"} , 750);
	$(".search_contect p:nth-of-type(7)").animate({left:"0"} , 800);
	$(".search_contect p:nth-of-type(8)").animate({left:"0"} , 850);
	$(".search_contect p:nth-of-type(9)").animate({left:"0"} , 900);
	$(".search_contect p:nth-of-type(10)").animate({left:"0"} , 950);
}

function backAnimate(){
	$('.search_img').hide();
	$('.search_contect').hide();
	$(".search_img").animate({right:"-55px"} , 500);
	$(".input_search input").animate({width:"550px" });
	$(".input_search>input").hide();
	$(".search_contect p:nth-of-type(1)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(2)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(3)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(4)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(5)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(6)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(7)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(8)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(9)").animate({left:"250px"});
	$(".search_contect p:nth-of-type(10)").animate({left:"250px"});
}

$(function(){
	var document_H = $(document).height();
	var document_W = $(document).width();
	
	$(".search_tan").css("height" , document_H);
	$(".search_tan").css("width" , document_W);
	$(".login_info").css("height" , document_H);
	$(".video_mess").css("height" , document_H)

	$("#close").click(function(){
		$(".search").hide();
		$(".search_tan").hide();
		$(".header_hide").hide();
		// $(".input_search>input").hide();
		$('.input_search').animate({
	  	width: "0"
	  });
		backAnimate();
	});

})




// 商品页面的js




// 商品页面的js
var chooseSize;
$("#chooseSize li").click(function(){
	var chooseSize = $(this).index();
	// alert(chooseSize)
	$(this).addClass("choosesize").siblings().removeClass("choosesize");
	$(".chooseProImg>li").eq(chooseSize).addClass("on").siblings().removeClass("on");
	$(".chooseColor>li").eq(chooseSize).addClass("on").siblings().removeClass("on");
	$("#oneProImg>li").eq(chooseSize).addClass("on").siblings().removeClass("on");
});

//$(".number7 ul.chooseColor ul li").click(function(){
//	var LiNode = $(this).index();
//	$(this).addClass("chooseLI opacity").siblings().removeClass("chooseLI opacity");
//	
//
//});

$(".number2 ul.chooseColor ul li").click(function(){
	var LiNode = $(this).index();
	$(this).addClass("chooseLI opacity").siblings().removeClass("chooseLI opacity");
	$("#product_one .product_top").eq(LiNode).addClass('pro_block').siblings().removeClass('pro_block');
	$("#product_one>.product_bottom").eq(LiNode).show().siblings().hide();
	$("#product_two .product_top").eq(LiNode).addClass('pro_block').siblings().removeClass('pro_block');
	$("#product_two>.product_bottom").eq(LiNode).show().siblings().hide();
	var one = $("#product_one>.product_bottom").eq(LiNode).find("img")[0].src;
	$("#product_one .product_top").eq(LiNode).children("img").attr("src" , one)
	var two = $("#product_two>.product_bottom").eq(LiNode).find("img")[0].src;
	$("#product_two .product_top").eq(LiNode).children("img").attr("src" , two)

});
//
//$(".number1 .size > ul > li").on("click" , function(){
//	var liNodePro = $(this).index();
//	$(this).addClass("choosesize").siblings().removeClass("choosesize");
//	$(".number2 >ul >li").eq(liNodePro).addClass("on").siblings().removeClass("on")
//})
//$(".number4>div").click(function(){
//	$(this).addClass("choosesize").siblings().removeClass("choosesize");
//})


// 购物数量
//$(".number3 .prev").click(function(){
//	var input_vlaue = $(".number3 input").val();
//	
//	if(input_vlaue > 1){
//		input_vlaue = $(".number3 input").val();
//		$(".number3 input").attr("value" , parseInt(input_vlaue) - 1);
//	}
//});
//
//$(".number3 .next").click(function(){
//	var input_vlaue = $(".number3 input").val();
//	
//	if(input_vlaue < 99){
//		input_vlaue = $(".number3 input").val();
//		$(".number3 input").attr("value" , parseInt(input_vlaue) + 1);
//	}
//});




//注册和登录js
$(".Login_close").click(function(){
	$(".login_info").hide();
	$(".login").hide();
	$("#agent").hide();
	$("#distributor").hide();
	$(".header_hide").hide();
	$("#share_s").hide();
	$("#share_pro").hide();
});
$("#register").click(function(){
	$(".login").hide();
	$(".register").fadeIn();
});
$("#agent_info").click(function(){
	$(".login").hide();
	$("#agent").fadeIn();
});
$("#distributor_info").click(function(){
	$(".login").hide();
	$("#distributor").fadeIn();
});
$("#register_close").click(function(){
	$(".register").hide();
	$(".header_hide").hide();
	$(".login_info").hide();
});
$(".register_again").click(function(){
	$(".register").hide();
	$("#agent").hide();
	$("#distributor").hide();
	$(".login").fadeIn();
})


var proLiNode;

function indexPro(index){
	return index;
}
//$(".size>ul>li").on("click", function(){
//	proLiNode = $(this).index();
//	$(".chooseProImg > li").eq(proLiNode).addClass("on").siblings().removeClass("on");
//	var img_pro = $(".chooseProImg>li ").eq(proLiNode).find(".product_bottom>ul>li:first-child img").attr("src");
//	$(".chooseProImg>li ").eq(proLiNode).find(".product_top img").attr("src" , img_pro);
//	$(".chooseProImg>li ").eq(proLiNode).find(".product_bottom>ul>li:first-child").addClass("opacity").siblings().removeClass("opacity");
//	
//	indexPro(proLiNode);
//})

// 商品展示js
$(".chooseProImg > li > .product_left .product_bottom>ul>li").mouseover(function(){
	var imgNOde = $(this).index();
	// alert($(this).html());
	// alert(imgNOde);
	var imgSrc = $(this).children("img")[0].src;
	$(".chooseProImg > li > .product_left .pro_block").children("img").attr("src" ,imgSrc);
	$(this).addClass("opacity").siblings().removeClass("opacity");
});




// 首页中英文官网选择
$("#chinese").click(function(){
	$("._welcome").animate({top:"-100%"} , 1500);
});





//悬浮二维码

$(".follow").hover(function(){
	$(".weixin").show()
},function(){
	$(".weixin").hide();
})
$(".order_tracking").hover(function(){
	if($("#checkCustomerLogin").val()=="login"){
		$(".myOrder").stop().slideDown(300)
	}
},function(){
	$(".myOrder").stop().slideUp(300);
})


//banner轮播函数
function carousel(name , liName){
	var listNode = 0;
	var listNodeLenght = $(name).length;
	var sem;
	sem = setInterval(function(){
		listNode++;
		if(listNode > listNodeLenght - 1){listNode = 0};
		$(name).eq(listNode).fadeIn().siblings().fadeOut();
		$(liName).eq(listNode).addClass("on").siblings().removeClass("on");
	},3000);
	$(name).mouseover(function(){
		clearInterval(sem);
	}).mouseout(function(){
		sem = setInterval(function(){
		listNode++;
		if(listNode > listNodeLenght - 1){listNode = 0};
		$(name).eq(listNode).fadeIn().siblings().fadeOut();
		$(liName).eq(listNode).addClass("on").siblings().removeClass("on");
	},3000);
	})
	$(liName).mouseover(function(){
		clearInterval(sem);
		var liLenght = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(name).eq(liLenght).fadeIn().siblings().fadeOut();
		listNode = liLenght;
	}).mouseout(function(){
		sem = setInterval(function(){
		listNode++;
		if(listNode > listNodeLenght - 1){listNode = 0};
		$(name).eq(listNode).fadeIn().siblings().fadeOut();
		$(liName).eq(listNode).addClass("on").siblings().removeClass("on");
	},3000);
	});
}



//调用banner轮播

$(function(){
	carousel(".carousel_li>li" , ".liList>li");
	carousel(".leBox_carousel_ul>li" , ".leBox_liList>li")
	carousel(".D_list>div" , ".D_part4 .D_part1_title ul li");
	carousel(".exhibition li" , ".icon li");
	carousel(".OSD_carousel_ul li" , ".OSD_li_img li");
	carousel(".cas_img .sf_list>li" , ".cas_img .color_list>li");
	carousel(".HISS_Tec .sf_list>li" , ".HISS_Tec .color_list>li");
	carousel(".HISS_Design_part3_list_img li" , ".HISS_Design_icon li");
	carousel(".sf_part5_img .sf_part5_list li", ".sf_part5_img .color_list li")
});



//视频播放控制
var leBoxVideo = document.getElementById("video_tan");

function playVido()
  {
  leBoxVideo.play();
  }

function pauseVido()
  {
  	if(!leBoxVideo){
  		return;
  	}
  leBoxVideo.pause();
  }

       $('.pro_part1,.pro_video_up a:last-child').click(function(){
       	$(".video_mess").show();
       		playVido();
       });
       $(".video_tan").click(function(){
       		$(".video_mess").hide();
       		pauseVido();
       })

       $('.HISS_play').click(function(){
       	$(".video_mess").show();
       		document.getElementById("video_tan1").play();
       });
       $("body").on("click",".video_tan",function(){
       		$(".video_mess").hide();
       		if(!document.getElementById("video_tan1")){
       			return;
       		}
       		document.getElementById("video_tan1").pause();
       })
	 $(window).on("load error",function(){
	   	$(".loadingV").delay(1000).hide();
	   });

       $("body").on("click",".chooseTime ul li",function(){
    	  $(this).addClass("active").siblings().removeClass("active");
       });
       $("body").on("click","#share",function(){
     	  $("#share_s").fadeIn();
     	  $(".login_info").fadeIn();
        });
       $("body").on("click",".share_btn",function(){
      	  $("#share_pro").fadeIn();
      	  $(".login_info").fadeIn();
         });
       
       $("body").on("click",".share_btn_link",function(){
    	  $(".share_link").select();
    	  document.execCommand("copy",false,null);
       });
     //判断浏览器类型
       
       
           