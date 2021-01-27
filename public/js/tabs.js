$(document).ready(function() {
	//When page loads...
	// $(".tab-content-1").hide(); //Hide all content
	// $("ul.tab-menu li:first").addClass("active").show(); //Activate first tab
	// $(".tab-content-1:first").show(); //Show first tab content
	// //On Click Event
	// $("ul.tab-menu li").click(function() {
	// 	$("ul.tab-menu li").removeClass("active"); //Remove any "active" class
	// 	$(this).addClass("active"); //Add "active" class to selected tab
	// 	$(".tab-content-1").hide(); //Hide all tab content
	// 	var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
	// 	$(activeTab).fadeIn(); //Fade in the active ID content
	// 	return false;
	// });
	

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
	var H=''
	$(window).resize(function() {
		console.log($(window).width());
		if($(window).width()< 800){
			if(addrLast=='product-center.html' || addrLast=='product-center.html#page1' || addrLast=='product-center.html#page2' || addrLast=='product-center.html#page3' || addrLast=='product-center.html#page4' || addrLast=='product-center.html#page5'){
				// window.location.replace("./phone/"+'safirst.html');
				return;
			}
			window.location.replace("./phone/"+addrLast);
		}
		  });
});
	//   -------------
	// footer下拉菜单全展
	// console.log($(window).width()+10);
	$('#concact ul .codewx').hover(function(){
		$(this).find('.code_wx').show()
	  },function(){
		$(this).find('.code_wx').hide()
	  })
	  $('#concact ul .wbgray').hover(function(){
		$(this).find('.code_wb').show();
		$('.code_wx').hide();
	  },function(){
		$(this).find('.code_wb').hide();
		$('.code_wx').hide();
	  });
});
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
var timerID;
// header getscrolltop
$(window).scroll(function(){
	//为页面添加页面滚动监听事件
		 var wst =  $(window).scrollTop() //滚动条距离顶端值
		 console.log(wst)
		// for (i=1; i<6; i++){             //加循环
		//  if($("#a"+i).offset().top<=wst){ //判断滚动条位置
		// 	$('#nav a').removeClass("c"); //清除c类
		// 	$("#a"+i+i).addClass("c");	//给当前导航加c类
		// 	}
		// }
		if(wst>60){
			$('.header').addClass('header-second');
			$('.logo img').attr('src','img/index_ic_logo2.png')
		}else{
			$('.header').removeClass('header-second');
			$('.logo img').attr('src','img/index_ic_logo.png')
		}
		
})
