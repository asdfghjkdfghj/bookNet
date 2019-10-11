"use strict";

window.onload = function () {
  //手机号码进行验证
  var tel = document.getElementById('tel');
  var tip1 = document.getElementById('tip1');
  var flagtel = false;

  tel.onblur = function () {
    var reg = /^1[34578]\d{9}$/;
    var str = tel.value;

    if (!reg.test(str)) {
      tip1.innerText = "请输入您的常用手机号码";
      flagtel = false;
    } else {
      tip1.innerText = "";
      flagtel = true;
    }
  }; //判断是否为空
  // if($.trim(tel)==""){
  //     $('#tip1').html('请输入您的常用手机号码');
  //     $('#tel').css('border',"1px solid red");
  // }
  //密码格式判断


  var passW = document.getElementById('passW');
  var tip2 = document.getElementById('tip2');
  var flagpassW = false;

  passW.onblur = function () {
    var reg = /^[a-z0-9A-Z]{6,16}$/;
    var str = passW.value;

    if (!reg.test(str)) {
      tip2.innerText = "请设置6到16位登录密码";
      flagpassW = false;
    } else {
      tip2.innerText = "";
      flagpassW = true;
    }
  }; //确认密码判断


  var confirmP = document.getElementById('confirmP');
  var tip3 = document.getElementById('tip3');
  var flagconfirmP = true;

  confirmP.onblur = function () {
    var str = confirmP.value;

    if (str == passW.value) {
      tip3.innerText = "";
      flagconfirmP = true;
    } else {
      tip3.innerText = "两次输入密码不一致，请重新输入";
      flagconfirmP = false;
    }
  }; //验证码判断


  var yzm = document.getElementById('yzm'); //验证码输入框

  var yzmName = document.getElementById('yzmName'); //验证码显示框

  var tip4 = document.getElementById('tip4'); //错误提示框

  var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'x', 'y', 'z', 1, 2, 3, 'q', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'J'];
  var sum = '';

  for (var i = 0; i < 4; i++) {
    var index = parseInt(Math.random() * a.length);
    sum += a[index];
  }

  yzmName.innerHTML = sum;
  var look = document.getElementById('look');

  look.onclick = function () {
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'x', 'y', 'z', 1, 2, 3, 'q', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'J'];
    var sum = "";

    for (var i = 0; i < 4; i++) {
      //获取验证码下标
      var index = parseInt(Math.random() * a.length);
      sum += a[index];
    }

    yzmName.innerHTML = sum;
    yzm.value = "";
  }; ////检查验证码是否正确


  var flagyzm = true;

  yzm.onblur = function () {
    if (yzm.value == yzmName.innerHTML) {
      tip4.innerHTML = '';
      flagyzm = true;
    } else {
      tip4.innerHTML = '验证码错误，请重新输入';
      flagyzm = false;
    }
  }; //点击注册


  var ljzc = document.getElementById('ljzc');

  ljzc.onclick = function () {
    if (flagtel && flagpassW && flagconfirmP && flagyzm) {
      var xhr = new XMLHttpRequest();
      xhr.open('post', 'http://10.36.144.249/php/register.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('un=' + tel.value + "&pw=" + confirmP.value);

      xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
          if (xhr.response) {
            alert('注册成功');
            window.location.href = './login.html';
          }
        }
      };

      return true;
    } else {
      alert('请输入正确且完整的用户信息');
      return false;
    }
  };
};