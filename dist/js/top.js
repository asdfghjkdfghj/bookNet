"use strict";

$(function () {
  // 公告无缝滚动
  var num = 0;
  var height = -parseInt($(".tempWrap ul li:eq(0)").css("height"));

  function autoPlay() {
    if (num > 3) {
      $(".tempWrap ul").css("top", "0");
      num = 1;
    }

    $(".tempWrap ul").animate({
      top: height * num
    }, 500);
    num++;
  }

  autoPlay();
  var timer = setInterval(function () {
    autoPlay();
  }, 2000);
  $(".tempWrap ul").hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(autoPlay, 2000);
  }); // 二级菜单

  $(".account").hover(function () {
    $(".account>.dropLayer").css("display", "block");
    $(".account>span").css({
      "color": "#e60000"
    });
  }, function () {
    $(".account>.dropLayer").css({
      "display": "none"
    });
    $(".account>span").css({
      "color": "#000"
    });
  });
  $(".phoneChina").hover(function () {
    $(".phoneChina>.dropLayer").css("display", "block");
    $(".phoneChina>span").css({
      "color": "#e60000"
    });
  }, function () {
    $(".phoneChina>.dropLayer").css({
      "display": "none"
    });
    $(".phoneChina>span").css({
      "color": "#000"
    });
  }); // 搜索框

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
  $(".dropSearch ul li").on("mouseenter", function () {
    $("#search_inp").css({
      "display": "block"
    });
  });
  $(".dropSearch ul li").on("mouseleave", function () {
    $("#search_inp").css({
      "display": "none"
    });
  });
});