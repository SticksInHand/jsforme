/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oBtn = document.getElementsByTagName("button");
    var oOuter = document.getElementById("outer");
    var oDiv = oOuter.getElementsByTagName("div");

    oBtn[0].onclick = function(){
        for(var p in oDiv){
            oDiv[p].style.background = "red";
        }
    }
}