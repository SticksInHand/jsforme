/**
 * Created by M.Jin on 14-8-6.
 */

//获取非行间设置的css
function getStyle(obj,name){
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
}

function mymove(obj,json,fnEnd){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var iComp = true;
        for(var attr in json){
            //设置原始点
            var cur = parseFloat(getStyle(obj,attr));
            //取得最终点
            var last = parseFloat(json[attr]);
            //计算速度
            var iSpeed = (last-cur)/6;
            //处理速度
            iSpeed = iSpeed < 0 ? Math.floor(iSpeed):Math.ceil(iSpeed);
            //开始动
            if(last != cur){
                iComp = false;
            }
            //执行动作
            obj.style[attr] = cur+iSpeed+"px";
        }

        if(iComp){
            clearInterval(obj.timer);
            if(fnEnd) fnEnd();
        }
    },30);
}

window.onload = function(){
    function me(){
        alert("ok");
    }
    var oBox = document.getElementById("box");

    oBox.onmouseover = function(){
        mymove(oBox,{"width":"1000","left":"100"});
    };
    oBox.onmouseout = function(){
        mymove(oBox,{"width":"10","left":"10"});
    }

};