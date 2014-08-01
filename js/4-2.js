/**
 * Created by M.Jin on 14-8-1.
 */
window.onload = function(){

    var oBox = document.getElementById("box");
    var oUl = oBox.getElementsByTagName("ul");
    var oImg = oUl[0].getElementsByTagName("li");
    var oNum = oUl[1].getElementsByTagName("li");
    var timer = play =  null;
    var index = 1;
    var mm = 0;
//    //鼠标移入取消自动播放
//    oBox.onmouseover = function(){
//        clearInterval(play);
//    };
//    //鼠标移出恢复自动播放
//    oBox.onmouseout = function(){
//        autoPlay();
//    };
//
//    autoPlay();

    //自动播放
//    function autoPlay(){
//        play = setInterval(function(){
//            index++;
//            if(index < oImg.length){
//                show(index,index-1);
//            }else{
//                index = 1;
//                show(index,oImg.length);
//            }
//        },1000);
//    }

    //鼠标滑过启动
    for(var i = 0;i<oNum.length;i++){

        oNum[i].index = i;
        oNum[i].onmouseover = function(){

            for(var pp in  oNum){
                if(oNum[pp].className == "current"){
                    mm = pp;
                }
            }
            show(this.index,mm);
        }
    }

    //淡入淡出
    function show(a,b){
        clearInterval(timer);
        var alpha_a = 0;
        var alpha_b = 100;

        for(var p in oNum){
            oNum[p].className = "";
        }
        oNum[a].className = "current";


        timer = setInterval(function(){

            alpha_a += 2;
            alpha_b -= 2;

            alpha_a > 100 && (alpha_a = 100);
            alpha_b < 0 && (alpha_b = 0);

            oImg[b].style.opacity = alpha_b/100;
            oImg[a].style.opacity = alpha_a/100;

            oImg[b].style.filter = "alpha(opacity = "+alpha_b+")";
            oImg[a].style.filter = "alpha(opacity = "+alpha_a+")";

            (alpha_a == 100 && alpha_b == 0) && clearInterval(timer);
        },20);

    }


};