/**
 * Created by M.Jin on 14-8-6.
 */
//获取非行间的属性，下面主要是为了兼容各个浏览器
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name]
    }else{
        return getComputedStyle(obj,false)[name]
    }
}
//完美运动框架， 对象，json,函数
function move(obj,json,fnEnd){
    //关闭定时器
    clearInterval(obj.timer);
    //同时开好几个对象定时器
    obj.timer=setInterval(function()
    {
        //声明一个变量，看下JSON中的属性点是已经达到==目标点是都已经完成
        var bStop=true;
        //使用for 循环，引出json中的各个目标点
        for(attr in json)
        {
            //声明一个变量，主要存储原始点
            var cur=0;
            //如果 属性==opacity，要另行考虑
            if(attr=='opacity')
            {
                //为了确保得到的数字是整数，所以使用Math.round,后面是转义，*100是因为opacity的值为小数
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                //正常情况下的转义并赋值
                cur=parseInt(getStyle(obj,attr));
            }
            //声明变量，获取速度
            // 速度=（目标点-原始点）/number
            var speed=(json[attr]-cur)/6;
            //进行速度的取整 Math.ceil 向上取整 Math.floor 向下取整
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //如果 原始点！=目标点 ，不停止运动
            if(cur!=json[attr]) bStop=false;
            //如果 目标点==opacity
            if(json[attr]=='opacity')
            {
                //使用下面的代码求出 opacity
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }else{
                //使用下面的代码求出 [attr]也就是目标点的属性！
                obj.style[attr]=cur+speed+'px';
            }
            //当所有的运动都完成后，关闭定时器，若有函数，执行函数！
            if(bStop){
                clearInterval(timer);
                if(fnEnd)fnEnd();
            }
        }
    },30)
}
window.onload = function(){
    function me(){
        alert("ok");
    }
    var oBox = document.getElementById("box");
    oBox.onmouseover = function(){
        move(oBox,{"width":"1000"},me);
    };
    oBox.onmouseout = function(){
        move(oBox,{"width":"10"},me);
    }
};