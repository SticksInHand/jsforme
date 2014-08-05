/**
 * Created by M.Jin on 14-8-5.
 */
/*-------------------------- +
 获取id、class、tagname
 +-------------------------- */
var get = {
    byId:function(id){
        return typeof id === "string" ? document.getElementById(id):id;
    },
    byTagName:function(elem,obj){
        return (obj||document).getElementsByTagName(elem);
    },
    byClass:function(sclass,oparent){
        var aclass = [];
        var oList = oparent.getElementsByTagName("*");
        for(var i = 0;i<oList.length;i++){
            oList[i].className == sclass && aclass.push(oList[i]);
        }
        return aclass;
    }
};
/*-------------------------- +
 事件绑定, 删除
 +-------------------------- */
var EventUtil = {
    addHandler:function(oElement,sEvent,fnHandler){
        oElement.addEventListener ? oElement.addEventListener(sEvent,fnHandler,false):oElement.attachEvent("on"+sEvent,fnHandler);
    },
    removeHandler:function(oElement,sEvent,fnHandler){
        oElement.removeEventListener ? oElement.removeEventListener(sEvent,fnHandler,false):oElement.detachEvent("on"+sEvent,fnHandler);
    },
    addLoadHandler:function(fnHandler){
        this.addHandler(window,"load",fnHandler);
    }
};
/*-------------------------- +
设置与读取css样式
+ --------------------------- */
function takeCss(obj,attr,value){
    switch (arguments.length){
        case 2:
            if(typeof arguments[1] == "object"){
                for(var i in attr){
                    i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] +")",obj.style[i] = attr[i]/100) :(obj.style[i] = attr[i]);
                }
            }else{
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,null)[attr];
            }
            break;
        case 3:
            attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")",obj.style[attr] = value/100) : obj.style[attr] = value;
            break;
    }
}










