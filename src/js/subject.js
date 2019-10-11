$(function(){
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
    // 跳跃
    var height=500;
    $(window).scroll(function(){
        if($(window).scrollTop()>=height){
            $('.side').css({"display":"block"})
        }else{
            $('.side').css({"display":"none"})
        }
    })
    var flag=true;
    $('.tj').click(function(){
        flag=false;               
        $(this).addClass("col").siblings().removeClass("col");
        var index=$(this).index()
        var top=$('.floor').eq(index).offset().top;
        $('html,body').stop(true).animate({"scrollTop":top},function(){flag=true})
    })
    $(window).scroll(function(){
        if(flag){               
           var scrollTop=$('html,body').scrollTop();
           console.log(scrollTop)
           $('.floor').each(function(i,dom){
               if($(dom).offset().top<scrollTop+innerHeight/2){
                   console.log($(dom).offset().top)
                   console.log(scrollTop+innerHeight/2)
                   $('.tj').eq(i).addClass("col").siblings().removeClass("col");
               }
           }) 
        }  
    })
})