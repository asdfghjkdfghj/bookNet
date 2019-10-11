"use strict";

function getS() {
  return JSON.parse(localStorage.getItem("product") || "[]");
}

function setS(productData) {
  localStorage.setItem("product", JSON.stringify(productData));
}

function render(productList) {
  var str = "";
  var box = document.querySelector(".shoppingCar");
  str = "<div class=\"shoppingTitle\">\n    <ul>\n        <li class=\"f1\"><span class=\"J_selectALL\"></span>\u5168\u9009</li>\n        <li class=\"f2\">\u56FE\u4E66\u540D\u79F0</li>\n        <li class=\"f3\">\u5B9A\u4EF7\uFF08\u5143\uFF09</li>\n        <li class=\"f4\">\u4E00\u661F\u4F1A\u5458\uFF08\u5143\uFF09</li>\n        <li class=\"f5\">\u6570\u91CF\u64CD\u4F5C</li>\n        <li class=\"f6\">\u5C0F\u8BA1\uFF08\u5143\uFF09</li>\n        <li class=\"f7\">\u64CD\u4F5C</li>\n    </ul>\n</div>";

  for (var i = 0; i < productList.length; i++) {
    str += "\n        <div class=\"shoppingListWrap shoppingListContent\">\n        <div class=\"shoppingItem NoActivity\">\n            <div class=\"shoppingList clearfix\">\n                <div class=\"cartCheckbox fl\">\n                    <span class=\"J_check\">\u9009\u4E2D</span>\n                </div>\n                <div class=\"goodImg fl\">\n                    <a href=\"javascript:;\"><img src=\"".concat(productList[i].img, "\" alt=\"\"></a>\n                </div>\n                <div class=\"goodName fl\">\n                    <a href=\"javascript:;\">").concat(productList[i].name, "</a>\n                </div>\n                <div class=\"goodPrice fl\">\n                    <strong>\uFFE5").concat(productList[i].vipPrice, "</strong>\n                </div>\n                <div class=\"goodSellPrice fl\">\n                    <strong>\uFFE5").concat(productList[i].price, "</strong>\n                </div>\n                <div class=\"goodQuantity fl\">\n                    <div class=\"quantityForm fl\">\n                        <a href=\"javascript:;\" class=\"cut\">-</a>\n                        <input type=\"text\" name=\"\" id=\"\" value=\"").concat(productList[i].num, "\">\n                        <a href=\"javascript:;\" class=\"add\">+</a>\n                    </div>\n                    <div class=\"limitText\"></div>\n                </div>\n                <div class=\"goodSum fl\">\n                    <strong class=\"subtotal\">\uFFE5").concat(productList[i].vipPrice * productList[i].num, "</strong>\n                </div>\n                <div class=\"goodOperation fl\">\n                    <a href=\"javascript:;\" class=\"del\">\u5220\u9664</a>\n                    <a href=\"javascript:;\">\u79FB\u5165\u6536\u85CF</a>\n                </div>\n            </div>\n        </div>\n    </div>");
  }

  box.innerHTML = str;
  del();
  changeNum();
}

render(getS());

function addData() {
  var productList = getS();
  var addBtn = document.querySelectorAll(".p_button>a");

  for (var i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = function () {
      var li = this.parentNode.parentNode;
      var productData = {
        img: li.children[0].children[0].src,
        name: li.children[1].children[0].innerHTML,
        vipPrice: li.children[2].children[0].children[1].innerHTML,
        price: li.children[2].children[1].children[1].innerHTML
      };
      addCart(productData);

      if (productList < 1) {
        window.location.reload();
      }
    };
  }
}

addData();

function addCart(productData) {
  var productList = getS();

  for (var i = 0; i < productList.length; i++) {
    if (productList[i].name == productData.name) {
      productList[i].num += 1;
      setS(productList);
      render(productList);
      return;
    }
  }

  productData.num = 1;
  productList.push(productData);
  setS(productList);
  render(productList);
}

function del() {
  var delBtn = document.querySelectorAll(".del");
  var productList = getS();

  for (var i = 0; i < delBtn.length; i++) {
    delBtn[i].onclick = function () {
      var name = this.parentNode.parentNode.children[2].children[0].innerHTML;

      for (var j = 0; j < productList.length; j++) {
        if (name == productList[j].name) {
          productList.splice(j, 1);
          setS(productList);
          render(productList);
        }
      }

      if (productList < 1) {
        window.location.reload();
      }
    };
  }
}

function changeNum() {
  var addBtn = document.querySelectorAll(".add");
  var cutBtn = document.querySelectorAll(".cut");
  var productList = getS();

  for (var i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = function () {
      var name = this.parentNode.parentNode.parentNode.children[2].children[0].innerHTML;

      for (var j = 0; j < productList.length; j++) {
        if (productList[j].name == name) {
          productList[j].num++;
          setS(productList);
          render(productList);
          return;
        }
      }
    };

    cutBtn[i].onclick = function () {
      var name = this.parentNode.parentNode.parentNode.children[2].children[0].innerHTML;

      for (var k = 0; k < productList.length; k++) {
        if (productList[k].name == name) {
          productList[k].num--;

          if (productList[k].num == 0) {
            productList.splice(k, 1);
            setS(productList);
            render(productList);
            carStyle();
            window.location.reload();
            return;
          }

          setS(productList);
          render(productList);
          return;
        }
      }
    };
  }
}

function carStyle() {
  var div = document.querySelectorAll(".shoppingList");
  var fullCar = document.querySelector(".full_car");
  var empty = document.querySelector(".empty_cart");
  var footCar = document.querySelector(".shoppingfootWrap");
  var myf = document.querySelector(".myf");

  if (div.length) {
    empty.classList.remove("show");
    fullCar.classList.add("show");
    footCar.classList.add("show");
  } else {
    fullCar.classList.remove("show");
    empty.classList.add("show");
    footCar.classList.remove("show");
    myf.style.display = "none";
  }
}

carStyle();