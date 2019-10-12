function getS(){
    return JSON.parse(localStorage.getItem("product")||"[]" )
}
function setS(productData){
    localStorage.setItem("product",JSON.stringify(productData))
}

function render(productList){
    var str = ""
    var box = document.querySelector(".shoppingCar")
    str = `<div class="shoppingTitle">
    <ul>
        <li class="f1"><span class="J_selectALL"></span>全选</li>
        <li class="f2">图书名称</li>
        <li class="f3">定价（元）</li>
        <li class="f4">一星会员（元）</li>
        <li class="f5">数量操作</li>
        <li class="f6">小计（元）</li>
        <li class="f7">操作</li>
    </ul>
</div>`
    for(var i = 0;i < productList.length;i++){
        str += `
        <div class="shoppingListWrap shoppingListContent">
        <div class="shoppingItem NoActivity">
            <div class="shoppingList clearfix">
                <div class="cartCheckbox fl">
                    <span class="J_check">选中</span>
                </div>
                <div class="goodImg fl">
                    <a href="javascript:;"><img src="${productList[i].img}" alt=""></a>
                </div>
                <div class="goodName fl">
                    <a href="javascript:;">${productList[i].name}</a>
                </div>
                <div class="goodPrice fl">
                    <strong>￥${productList[i].vipPrice}</strong>
                </div>
                <div class="goodSellPrice fl">
                    <strong>￥${productList[i].price}</strong>
                </div>
                <div class="goodQuantity fl">
                    <div class="quantityForm fl">
                        <a href="javascript:;" class="cut">-</a>
                        <input type="text" name="" id="" value="${productList[i].num}">
                        <a href="javascript:;" class="add">+</a>
                    </div>
                    <div class="limitText"></div>
                </div>
                <div class="goodSum fl">
                    <strong class="subtotal">￥${productList[i].vipPrice*productList[i].num}</strong>
                </div>
                <div class="goodOperation fl">
                    <a href="javascript:;" class="del">删除</a>
                    <a href="javascript:;">移入收藏</a>
                </div>
            </div>
        </div>
    </div>`;
    }
    box.innerHTML = str
    del()
    changeNum()
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
      allPrice()
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
      allPrice()
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
      allPrice()
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
    }
    allPrice()
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
function allPrice(){
  var subtotal = document.querySelectorAll(".subtotal")
  var zongjia = document.querySelector("#J_SumZongJia")
  var J_SumCount = document.querySelector("#J_SumCount")
  var num = getS().length
  var allPrice = 0
  for(var i = 0;i < subtotal.length;i++){
      allPrice += Number(subtotal[i].innerHTML.substr(1))
  }
  zongjia.innerHTML =  allPrice
  J_SumCount.innerHTML = num
}
















