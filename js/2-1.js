/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oDoc = document.getElementById("outer");
    var oBtn = oDoc.getElementsByTagName("button")[0];
    var oUl = document.getElementById("ime");
    var oClose = document.getElementById("close");

    oBtn.onclick = function(){
        oUl.style.display = oUl.style.display == "block" ? "none":"block";
    }
    oClose.onclick = function(){
        this.parentNode.style.display = "none";
    }

}