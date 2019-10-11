$(function(){
// 公告无缝滚动
    var num = 0;
    var height = -parseInt($(".notice_temp .notice_ul li:eq(0)").css("height"))
    function autoPlay(){
        if(num > 3){
            $(".notice_temp .notice_ul").css("top","0")
            num = 1;
        }
        $(".notice_temp .notice_ul").animate({top:height * num},500);
        num++
    }
    autoPlay()
    var timer = setInterval(function(){
        autoPlay();
    },2000)
    $(".notice_temp .notice_ul").hover(function(){
        clearInterval(timer)
    },function(){
        timer = setInterval(autoPlay,2000)
    })
// 二级菜单
    $(".account").hover(function(){
        $(".account>.dropLayer").css("display","block")
        $(".account>span").css({
            "color":"#e60000"
        })
    },function(){
        $(".account>.dropLayer").css({
            "display":"none"
        });
        $(".account>span").css({
            "color":"#000"
        })
    })
    $(".phoneChina").hover(function(){
        $(".phoneChina>.dropLayer").css("display","block")
        $(".phoneChina>span").css({
            "color":"#e60000"
        })
    },function(){
        $(".phoneChina>.dropLayer").css({
            "display":"none"
        });
        $(".phoneChina>span").css({
            "color":"#000"
        })
    })
// 搜索框
$(".inputWarp>input").on("click", function () {
    if ($(this).val() === "明朝帝王师-熊召政") {
      $(this).val("");
    }
    return false;
  });
  $(document).on("click", function () {
    if ($(".inputWarp>input").val() === "") {
      $(".inputWarp>input").val("明朝帝王师-熊召政");
    }
  });
  $(".dropSearch ul li").on("mouseenter",function(){
    $("#search_inp").css({"display":"block"});
    $("#search_inp li").on("click",function(){
        // $(this).parent().parent().eq(0).html($(this).html())
        console.log($(this))
    })
  })
  $(".dropSearch ul li").on("mouseleave",function(){
    $("#search_inp").css({"display":"none"})
  })
    // 右边菜单  
    $('.js_toggle').mouseenter(function(){
        $(this).find('.menu-item').show()
        $(this).addClass('hover')
    })  
    $('.js_toggle').mouseleave(function(){
        $(this).find('.menu-item').hide()
        $(this).removeClass('hover')
    })

    // banner
    var $len=$('.bannerList ul li').size();
    var index=0;
    $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg");
    var $pic=$('.bannerList ul li');
    var $timer=null;
    //自动轮播
    myShow();
    function myShow(){
        clearInterval($timer)
        $timer=setInterval(function(){
        index++;
        if(index>$len){
            index=0
        }             
        $pic.eq(index).fadeIn().siblings().fadeOut();
        $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg"); 
	},2000)
    }
    $('.banner').mouseenter(function(){
        clearInterval($timer);
        $('.arrowL').css('display',"block");
        $('.arrowR').css('display',"block");
       
    })
    $('.banner').mouseleave(function(){
        myShow()
        $('.arrowL').css('display',"none");
        $('.arrowR').css('display',"none");
    })      
    $('.arrowL').click(function(){    //左       
            if(index<=0){
                index=6
                // console.log(index)
                $pic.eq(index).fadeIn().siblings().fadeOut()
                $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg"); 
            }else{
                --index;
                // console.log(index)
                $pic.eq(index).fadeIn().siblings().fadeOut()
                $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg"); 
            }            
        })
        $('.arrowR').click(function(){       //右    
            if(index>=$len-1){
                index=0
                // console.log(index)
                $pic.eq(index).fadeIn().siblings().fadeOut()
                $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg"); 
                
            }else{
                ++index;
                // console.log(index)
                $pic.eq(index).fadeIn().siblings().fadeOut()
                $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg"); 
            }         
        })     
    $(".bannerdot a").mouseenter(function(){  
        clearInterval($timer); 
        // console.log(this)
        index=$(this).index(); 
        // console.log(index) 
        $pic.eq(index).fadeIn().siblings().fadeOut();
        $(".bannerdot a").eq(index).addClass("bg").siblings().removeClass("bg");  
    })
    
// 畅销榜
    $('.tabTit a').mouseenter(function(){
        $(".tabTit a").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".tabConList").hide().eq($(this).index()).show();
    })     
    $(".hotCon ul:nth-child(1)").addClass("on") 
    $('.navDot li').mouseenter(function(){
        $(".navDot li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".hotCon ul").eq($(this).index()).addClass("on").siblings().removeClass('on');
    
    })
    $('.hotCon ul li').mouseenter(function(){
        $(this).addClass("cur").siblings().removeClass('cur');
    })
});