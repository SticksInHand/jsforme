/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oDoc = document.getElementById("outer");
    var oLabel = oDoc.getElementsByTagName("input");
    var oBox = document.getElementById("tips");
    oLabel[0].onmouseover = function(){
        oBox.style.display = "block";
    }
    oLabel[0].onmouseout = function(){
        oBox.style.display = "none";
    }
}