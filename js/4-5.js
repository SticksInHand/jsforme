/**
 * Created by M.Jin on 14-8-1.
 */
function takeCss(obj,attr,value){
    switch (arguments.length)
    {
        case 2:
            if(typeof arguments[1] == "object"){
                //批量设置属性
                for(var p in attr){
                    obj.style[p] = attr[p];
                }
            }else{
                //两个参数，第二个参数为字符串，获取属性
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr];
            }
            break;
        case 3:
            //三个参数，单个设置属性
            obj.style[attr] = value;
            break;
        default :
            alert("参数有误！");
    }
}

window.onload = function(){
    var oBox = document.getElementById("box");
    var aInput = oBox.getElementsByTagName("input");

    aInput[0].onclick = function ()
    {
        alert("width: " + takeCss(oBox, "width") + "\nheight: " + takeCss(oBox, "height") + "\nbackground-color: " + takeCss(oBox, "backgroundColor"))
    };

    aInput[1].onclick = function ()
    {
        takeCss(oBox, {width: "330px", height: "100px", borderColor: "#0084ff", backgroundColor: "#eff8ff"});
        for (i = 0; i < aInput.length; i++) takeCss(aInput[i], "backgroundColor", "#0084ff")
    }

    aInput[2].onclick = function ()
    {
        takeCss(oBox, {width: "400px", height: "200px", borderColor: "#f60", backgroundColor: "#fef4eb"});
        for (i = 0; i < aInput.length; i++) takeCss(aInput[i], "backgroundColor", "#f60")
    }
};