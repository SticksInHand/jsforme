/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oDiv = document.getElementById("div1");
    oDiv.onmouseover = function(){
        this.className = "hover";
    }
    oDiv.onmouseout = function(){
        this.className = "";
    }
}