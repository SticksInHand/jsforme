/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oBox = document.getElementById("box");
    var oH2 = oBox.getElementsByTagName("h2");
    var oSpan = oBox.getElementsByTagName("span");
    var oA = oBox.getElementsByTagName("a");
    var disX = disY = 0;
    var bDrag = false;//设置句柄，状态为静止状态
    var aPos = [{x:oBox.offsetLeft,y:oBox.offsetTop}];//坐标记录

    //监听状态函数
    function status(){
        oSpan[0].innerHTML = bDrag;
        oSpan[1].innerHTML = oBox.offsetLeft;
        oSpan[2].innerHTML = oBox.offsetTop;
    }

    status();
    //鼠标按下，拖拽激活
    oH2[0].onmousedown = function(event){
        var event = (event || window.event);

        //激活句柄，变更为拖拽状态
        bDrag = true;
        //留住初始点击相对于box的位置
        disX = event.clientX - oBox.offsetLeft;
        disY = event.clientY - oBox.offsetTop;
        //记录坐标
        aPos.push({x:oBox.offsetLeft,y:oBox.offsetTop});
        this.setCapture && this.setCapture();

        return false;

    };

    //开始拖拽
    document.onmousemove = function(event){
        if(!bDrag) return;
        var event = (event || window.event);
        var iL = event.clientX - disX;
        var iT = event.clientY - disY;

        //设置最大移动距离
        var maxL = document.documentElement.clientWidth - oBox.offsetWidth;
        var maxT = document.documentElement.clientHeight - oBox.offsetHeight;

        iL = iL<0?0:iL;
        iL = iL>maxL?maxL:iL;

        iT = iT<0?0:iT;
        iT = iT>maxT?maxT:iT;

        oBox.style.marginLeft = oBox.style.marginTop = 0;
        //设定拖动位置
        oBox.style.left = iL + "px";
        oBox.style.top = iT + "px";

        aPos.push({x:iL,y:iT});
        status();
        return false;

    };
    //结束拖拽
    oH2[0].onmouseup = function(){
        bDrag = false;//更改状态
        this.releaseCapture && this.releaseCapture();
        status();
    };

    //回放拖拽轨迹
    oA[0].onclick = function(){
        if(aPos.length == 1) return;
        var timer = setInterval(function(){
            var oPos = aPos.pop();
            oPos?(oBox.style.left = oPos.x + "px",oBox.style.top = oPos.y + "px",status()):clearInterval(timer);
        },30);

        this.focus = false;
        return false;
    };

    //阻止事件冒泡
    oA[0].onmousedown = function(event){
        var event = (event || window.event);

        event.cancelBubble = true;
    }

};


















