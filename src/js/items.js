$(function(){
    $('.js_toggle').mouseenter(function () {
        $(this).find('.menu-item').show()
        $(this).addClass('hover')
    })
     $('.js_toggle').mouseleave(function () {
        $(this).find('.menu-item').hide()
        $(this).removeClass('hover')
    })
    $(".navbarLeft").hover(function(){
        $(".categoryInner").css({"display":"block"})
    },function(){
        $(".categoryInner").css({"display":"none"})
    })
})