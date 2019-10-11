"use strict";

window.onload = function () {
  // 底部特效
  $(".cur").on("mouseover", function () {
    $(".pubItem").eq($(this).attr("index")).show().siblings().hide();
  });
  $(".downArrow").on("click", function () {
    $(".tempWrap>ul").animate({
      top: '-420px'
    });
  });
  $(".upArrow").on("click", function () {
    $(".tempWrap>ul").animate({
      top: '0px'
    });
  });
};