"use strict";

window.onload = function () {
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


  var flagyzm = false;

  yzm.onblur = function () {
    if (yzm.value == yzmName.innerHTML) {
      tip4.innerText = '';
      flagyzm = true;
      tip4.parentNode.style.display = "none";
    } else {
      tip4.innerHTML = '验证码错误，请重新输入';
      flagyzm = false;
      tip4.parentNode.style.display = "block";
    }
  };

  var unInp = document.getElementById('userName');
  var pwInp = document.getElementById('passWord');
  var logIn = document.getElementById('logIn');

  logIn.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://10.36.144.249/php/login.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('un=' + unInp.value + "&pw=" + pwInp.value);

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        console.log(xhr.response);
        console.log(xhr.response == 2);

        if (xhr.response == 2) {
          if (yzm.value == yzmName.innerHTML) {
            alert('登录成功');
            window.location.href = './index.html';
          } else {
            alert("请输入正确的验证码");
          }
        }

        if (xhr.response == 1) {
          alert('用户名账号或者密码错误');
          unInp.value = '';
          pwInp.value = '';
          yzm.value = '';
        }

        if (xhr.response == 0) {
          alert('用户不存在，请先注册');
          window.location.href = './register.html';
        }
      }
    };
  };
};