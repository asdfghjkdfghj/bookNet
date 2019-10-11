window.onload = function () {
    var ul = document.querySelector('.ul1');
    // var li = ul.children[0]
    // console.log(li)
    var tstList = document.querySelector('.tstList')
    var leftArrow = document.querySelector('.xleftArrow')
    var reghtArrow = document.querySelector('.reghtArrow')
    //给ul做移入移出事件
    tstList.onmouseover = function () {
        // console.log(1)
        leftArrow.style.display = "block";
        reghtArrow.style.display = "block";  
    }
    tstList.onmouseout = function () {
            leftArrow.style.display = "none";
            reghtArrow.style.display = "none";    
        }
    var index = 0;
    reghtArrow.onclick = function () {
        index++;
        if(index==2){
            ul.style.left = 0+'px';
            index = 0;
        }else{
            ul.style.left = -1215*index+'px';
        }  
    }
    leftArrow.onclick = function () {
        if(index == 0 ){
            ul.style.left = -1215+'px';
            index++;
        }else{
            ul.style.left = 0+'px';
            index=0; 
        }   
    }

    //利用ajax拿到假数据
    var xhr = new XMLHttpRequest();
    xhr.open('get','../json/rexiao.json');
    xhr.send(null);
    xhr.onload = function () {
        var result = JSON.parse(xhr.response);
        console.log(result)
        var str = "";
        for (let i = 0; i < result.length; i++) {
            str += `<li>
            <div class="bookCover">
                <a href="http://tuan.bookschina.com/tuan/11894" target="_blank"><img
                        src="${result[i].img}"
                        alt=""></a>
            </div>
            <p><a href=""
                    title="">${result[i].cont}</a>
            </p>
            <div class="priceWrap">
                <span>
                    <b>团购价:</b>
                    <i>￥</i>
                    ${result[i].price}
                </span>
                <del>${result[i].del}</del>
                <em>${result[i].discount}折</em>
            </div>
        </li>`
            
        }
        var ul1 = document.querySelector('.ul1');
        ul1.innerHTML = str;
    }
    // 楼层1效果
    $(".floor1_ul").children().on("mouseenter", function () {
        $(this).addClass("cur").show().siblings().removeClass("cur");//显示当前li,隐藏兄弟元素
        $(".tabItem1").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
    })
    // 右侧效果
    $(".seriesBook .series_ul1").children().on("mouseenter",function(){
        $(this).addClass("cur").show().siblings().removeClass("cur");
    })
    // 楼层2效果
    $(".floor2_ul").children().on("mouseenter", function () {
        $(this).addClass("cur").show().siblings().removeClass("cur");//显示当前li,隐藏兄弟元素
        $(".tabItem2").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
    })
    // 右侧效果
    $(".seriesBook .series_ul2").children().on("mouseenter",function(){
        $(this).addClass("cur").show().siblings().removeClass("cur");
    })
    // 底部特效
    $(".cur").on("mouseover",function(){
        $(".pubItem").eq($(this).attr("index")).show().siblings().hide();
    })
    $(".downArrow").on("click",function(){
        $(".pub_temp>.pub_ul").animate({top:'-420px'})
    })
    $(".upArrow").on("click",function(){
        $(".pub_temp>.pub_ul").animate({top:'0px'})
    })
}