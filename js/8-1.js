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
window.onload = function(){
    var oBox = document.getElementById("box");
    var oUl = get.byClass("list")[0].getElementsByTagName("ul")[0];
    var oNumber = get.byClass("count")[0];

};