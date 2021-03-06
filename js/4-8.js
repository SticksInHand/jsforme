/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oStar = document.getElementById("star");
    var oLi = oStar.getElementsByTagName("li");
    var oSpan = oStar.getElementsByTagName("span");
    var oP = oStar.getElementsByTagName("p");
    var iStar = 0;
    var oMsg = [
        "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "不满意|部分有破损，与卖家描述的不符，不满意",
        "一般|质量一般，没有卖家描述的那么好",
        "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ];

    for(var p = 1;p<=oLi.length;p++){
        oLi[p-1].index = p;
        oLi[p-1].onmouseover = function(){
            fnPoint(this.index);
            oSpan
            oP[0].style.display = "block";
        };
        oLi[p-1].onmouseout = function(){
            fnPoint();
        };
        oLi[p-1].onclick = function(){
            iStar = this.index;
            fnPoint();
        }
    }

    //处理评分的方法
    function fnPoint(iArg){
        iScore = (iArg || iStar);
        for(var i = 0;i<=oLi.length;i++){
            oLi[i].className = i < iScore ? "on":"";
        }
    }
};