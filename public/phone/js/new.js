function news() {
    $.ajax({
        type: "POST",
        url: 'http://192.168.10.32:8099/zeepson/listAll',
        data: JSON.stringify({
            userId: 1,

            data: {
                userId: 2,
            }
        }),
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data.data);
            var newDatas = data.data;
            var html='';
            for(var i=0;i<newDatas.length;i++){
html+=' <div class="part1"><a href="news-detail.html" style="color:#333;" onclick="innews(\'' +newDatas[i].id + '\')"><div><img src="'+newDatas[i].photo+'" alt=""></div><h2 style="text-align:left;margin-top:2rem;">'+newDatas[i].title+'</h2><p>'+newDatas[i].deputyTitle+' | '+new Date(newDatas[i].time).toLocaleString().replace(/:\d{1,2}$/,' ')+'</p><p style="text-indent: 0;">'+newDatas[i].body+'</p><p style="color:#468dd2;text-indent: 0;">了解更多 →</p></a></div>'                
            };
            console.log(html);
            $('#newsContent').append(html);
//             var flexarr=[];
//             var htmlflex='';
//             var html='';
//             for(var i=0;i<newDatas.length;i++){
//                 if(newDatas.length<1){
//                     return
//                 }else{
//                     flexarr=newDatas.splice(0,3);
//                     console.log(flexarr);
//                     html='';
//                     for(var s=0;s<flexarr.length;s++){
// html+=' <div class="news-content" onclick="innews(\'' +flexarr[s].id + '\')" style="background: #fff;width:380px;margin-right:30px; overflow: hidden;"><a href="javascript:;"><div style="width:100%;overflow: hidden;"><img src=" '+ flexarr[s].photo +' " alt="" ></div><div style="padding:15px 25px;font-size:16px;"><h3 style="font-size:20px;">'+ flexarr[s].title +'</h3><p> '+ flexarr[s].deputyTitle +'|'+ flexarr[s].time +'</p><div> '+flexarr[s].body+'</div><div style="margin-top:20px;"> <a href="javascript:;" style="color:#28a5fa;font-size:16px;font-weight: bold">了解更多 &nbsp;&nbsp; <i></i></a> </div></div></a></div>'
//                     }
//                     htmlflex="<div style='display: flex;margin-bottom:20px'>"+html+"</div>"
//                 }
//                 $('.news').append(htmlflex);
//             }
            console.log(newDatas)
          

        }

    });
   

}
news(); 
function innews(id){
    // alert('111')
    // alert(id);
    window.sessionStorage.setItem('newid',id);
    window.location.href='news-detail.html';
}

