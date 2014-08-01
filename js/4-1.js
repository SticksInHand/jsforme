/**
 * Created by M.Jin on 14-7-31.
 */
var get = {
    byId:function(id){
        return document.getElementById(id);
    },
    byClass:function(sclass,oparent){
        if(oparent.getElementsByClassName){
            return oparent.getElementsByClassName(sclass);
        }else{
            var results = new Array();
            var allNode = oparent.getElementsByTagName("*");
            for(var p in allNode){
                if(allNode[p] == sclass){
                    results.push(allNode[p]);
                }
            }

            return results;
        }
    },
    byTagName:function(elem,obj){
        return (obj||document).getElementsByTagName(elem);
    }
};

window.onload = function(){
    var oNav = get.byId("nav");
    var oLi = get.byTagName("li",document);
    var aSubNav = get.byClass("subnav",oNav);
    var oSubNav = oArrow = timer = null;

    for(var i = 0;i<oLi.length;i++){
        oLi[i].onmouseover = function(){

            for(var p = 0;p<aSubNav.length;p++){
                aSubNav[p].style.display = "none";
            }

            oSubNav = get.byClass("subnav",this);
            oArrow = get.byClass("arrow",this);
            if(oSubNav[0]){
                oSubNav[0].style.display = "block";
            }
            oNav.offsetWidth - this.offsetLeft > oSubNav[0].offsetWidth ? oSubNav[0].style.left = this.offsetLeft + "px" : oSubNav[0].style.right = 0;

            //给小箭头定位
            oArrow[0].style.left = this.offsetLeft - oSubNav[0].offsetLeft +50+ "px";
            clearTimeout(timer);
            oSubNav[0].onmouseover = function(event){
                (event||window.event).cancelBubble = true;
                clearTimeout(timer);
            }

        };

        oLi[i].onmouseout = function(){
            oSubNav = get.byClass("subnav",this);

            timer = setTimeout(function(){
                oSubNav[0].style.display = "none";
            },300);

        }
    }
};

































