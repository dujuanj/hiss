var timerID;


$(window).scroll(function(){
    var F_high1 = $(window).scrollTop();
      var t1 = $(".animate_p3").offset().top;
      if(F_high1 > t1 - win_h){
          num()
      }
      if(F_high1 == 0){
          $(".sum").html("0");
      }
})
  
      function num() {
          timerID = setInterval("num()", 100);
          if (parseInt($(".sum").html()) >= 200) {
              clearInterval(timerID)
          }
          else
              $(".sum").html(parseInt($(".sum").html()) + 1);
      }