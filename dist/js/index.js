"use strict";

window.onload = function () {
  var ul = document.querySelector('.ul1'); // var li = ul.children[0]
  // console.log(li)

  var tstList = document.querySelector('.tstList');
  var leftArrow = document.querySelector('.xleftArrow');
  var reghtArrow = document.querySelector('.reghtArrow'); //给ul做移入移出事件

  tstList.onmouseover = function () {
    // console.log(1)
    leftArrow.style.display = "block";
    reghtArrow.style.display = "block";
  };

  tstList.onmouseout = function () {
    leftArrow.style.display = "none";
    reghtArrow.style.display = "none";
  };

  var index = 0;

  reghtArrow.onclick = function () {
    index++;

    if (index == 2) {
      ul.style.left = 0 + 'px';
      index = 0;
    } else {
      ul.style.left = -1215 * index + 'px';
    }
  };

  leftArrow.onclick = function () {
    if (index == 0) {
      ul.style.left = -1215 + 'px';
      index++;
    } else {
      ul.style.left = 0 + 'px';
      index = 0;
    }
  }; //利用ajax拿到假数据


  var xhr = new XMLHttpRequest();
  xhr.open('get', '../json/rexiao.json');
  xhr.send(null);

  xhr.onload = function () {
    var result = JSON.parse(xhr.response);
    console.log(result);
    var str = "";

    for (var i = 0; i < result.length; i++) {
      str += "<li>\n            <div class=\"bookCover\">\n                <a href=\"http://tuan.bookschina.com/tuan/11894\" target=\"_blank\"><img\n                        src=\"".concat(result[i].img, "\"\n                        alt=\"\"></a>\n            </div>\n            <p><a href=\"\"\n                    title=\"\">").concat(result[i].cont, "</a>\n            </p>\n            <div class=\"priceWrap\">\n                <span>\n                    <b>\u56E2\u8D2D\u4EF7:</b>\n                    <i>\uFFE5</i>\n                    ").concat(result[i].price, "\n                </span>\n                <del>").concat(result[i].del, "</del>\n                <em>").concat(result[i].discount, "\u6298</em>\n            </div>\n        </li>");
    }

    var ul1 = document.querySelector('.ul1');
    ul1.innerHTML = str;
  }; // 楼层1效果


  $(".floor1_ul").children().on("mouseenter", function () {
    $(this).addClass("cur").show().siblings().removeClass("cur"); //显示当前li,隐藏兄弟元素

    $(".tabItem1").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
  }); // 右侧效果

  $(".seriesBook .series_ul1").children().on("mouseenter", function () {
    $(this).addClass("cur").show().siblings().removeClass("cur");
  }); // 楼层2效果

  $(".floor2_ul").children().on("mouseenter", function () {
    $(this).addClass("cur").show().siblings().removeClass("cur"); //显示当前li,隐藏兄弟元素

    $(".tabItem2").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
  }); // 右侧效果

  $(".seriesBook .series_ul2").children().on("mouseenter", function () {
    $(this).addClass("cur").show().siblings().removeClass("cur");
  }); // 底部特效

  $(".cur").on("mouseover", function () {
    $(".pubItem").eq($(this).attr("index")).show().siblings().hide();
  });
  $(".downArrow").on("click", function () {
    $(".pub_temp>.pub_ul").animate({
      top: '-420px'
    });
  });
  $(".upArrow").on("click", function () {
    $(".pub_temp>.pub_ul").animate({
      top: '0px'
    });
  });
};