"use strict";

$(function () {
  $(".Tit>ul>li").on("mouseover", function () {
    // console.log($(this).attr("index"))
    $(".floorTabRightInner3 ul").eq($(this).attr("index")).show().siblings().hide();
    $(".kindText3").eq($(this).attr("index")).show().siblings(".kindText3").hide();
  });
  $(".seriesBook3 ul").children().on("mouseenter", function () {
    $(this).addClass("cur3").show().siblings().removeClass("cur3");
  });
  $(".move").on("mouseover", function () {
    $(".otherContent ul").eq($(this).attr("index")).show().siblings().hide();
  }); // $(".leftBook ul li").hover(function(){
  // 	$(this).find("img").show();
  // 	$(this).find("p").hide();
  // },function(){
  // 	$(this).find("img").hide();
  // 	$(this).find("p").show();
  // });

  $(".exclusive").on("mouseover", function () {
    // console.log($(this).attr("index"))
    $(".p_wrap ul").eq($(this).attr("index")).show().siblings().hide();
  });
});