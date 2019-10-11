"use strict";

window.onload = function () {
  //放大镜
  var main = document.querySelector('.w1200');
  var left = document.querySelector('.left'); //大盒子

  var mask = document.querySelector('.mask'); //蒙板

  var showbox = document.querySelector('.showbox');
  var maxImg = document.querySelector('.maximg'); //大图

  left.onmouseover = function () {
    showbox.style.display = 'block';
    mask.style.display = 'block';
  };

  left.onmouseout = function () {
    showbox.style.display = 'none';
    mask.style.display = 'none';
  };

  left.onmousemove = function (e) {
    var e = e || event; // console.log(e.clientX)
    // console.log(mask.offsetWidth)

    var l = e.clientX - mask.offsetWidth / 2 - main.offsetLeft;
    var t = e.pageY - mask.offsetHeight / 2 - main.offsetTop - left.offsetTop;

    if (l < 0) {
      l = 0;
    }

    if (l >= left.clientHeight - mask.offsetWidth) {
      l = left.offsetWidth - mask.offsetWidth;
    }

    if (t < 0) {
      t = 0;
    }

    if (t >= left.clientHeight - mask.offsetHeight) {
      t = left.offsetHeight - mask.offsetHeight;
    }

    mask.style.left = l + 'px';
    mask.style.top = t + 'px'; //运动比例

    var scaleX = l / (left.clientHeight - mask.offsetWidth);
    var scaleY = t / (left.clientHeight - mask.offsetHeight);
    maxImg.style.left = -(maxImg.offsetWidth - showbox.offsetWidth) * scaleX + 'px';
    maxImg.style.top = -(maxImg.offsetHeight - showbox.offsetHeight) * scaleY + 'px';
  }; //.rightmain > ul > li 鼠标移动事件


  $('.rightmain > ul > li').mouseover(function () {
    $(this).children('.rightmainC').css({
      display: 'none'
    });
    $(this).children('.rightmainI').css({
      display: 'block'
    });
    $(this).siblings().children('.rightmainI').css({
      display: 'none'
    });
    $(this).siblings().children('.rightmainC').css({
      display: 'block'
    });
  });
  $('.contentL > ul.one > li').mouseover(function () {
    $(this).children('.rightmainC').css({
      display: 'none'
    });
    $(this).children('.rightmainI').css({
      display: 'block'
    });
    $(this).siblings().children('.rightmainI').css({
      display: 'none'
    });
    $(this).siblings().children('.rightmainC').css({
      display: 'block'
    });
  }); //.contentRtop  吸顶事件

  var contentRtop = $('.contentRtop').offset().top;
  var uls = $('.contentRmainR>ul').offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() >= contentRtop) {
      $('.contentRtop').css({
        position: 'fixed',
        top: 0,
        background: 'white'
      });
    } else {
      $('.contentRtop').css({
        position: 'static'
      });
    }

    if ($(this).scrollTop() >= uls) {
      $('.contentRmainR>ul').css({
        position: 'fixed',
        top: 162,
        background: '#f5f5f5',
        width: '98'
      });
    }

    if ($(this).scrollTop() <= uls) {
      $('.contentRmainR>ul').css({
        position: 'static'
      });
    }

    if ($(this).scrollTop() >= $('.contentRmainR').height()) {
      $('.contentRmainR>ul').css({
        position: 'relative',
        top: 592
      });
    }
  }); //获取本地存储

  function getStorage() {
    return JSON.parse(localStorage.getItem('product') || '[]');
  } //设置本地存储


  function setStorage(json) {
    localStorage.setItem('product', JSON.stringify(json));
  } //点击加入购物车，把信息存入本地  


  var addcartbtn = document.querySelectorAll('.addcartbtn');

  for (var i = 0; i < addcartbtn.length; i++) {
    addcartbtn[i].onclick = function () {
      var minHeight = document.querySelector('.minHeight');
      var product = {
        img: minHeight.children[1].children[0].src,
        name: minHeight.children[2].children[0].children[0].children[0].innerHTML,
        vipPrice: minHeight.children[2].children[1].children[2].children[0].innerHTML.substr(1),
        price: minHeight.children[2].children[1].children[0].innerHTML.substr(1)
      }; // console.log(product.vipPrice,product.price)
      // var productPrice = Number((product.price).substr(1));

      var products = getStorage();

      for (var k = 0; k < products.length; k++) {
        if (product.name == products[k].name) {
          // var productsPrice = Number((products[k].price).substr(1));
          products[k].num = products[k].num + 1; // products[k].price = productsPrice+productPrice

          setStorage(products);
          return;
        }
      }

      product.num = 1;
      products.push(product);
      setStorage(products);
    };
  }
};