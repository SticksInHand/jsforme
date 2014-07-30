/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){


    var oBtn = document.getElementsByTagName("button")[0];
    var oBack = document.getElementById("overlay");
    var oWin = document.getElementById("win");
    var oClose = document.getElementById("close");

    oBtn.onclick = function(){
        oBack.style.display = "block";
        oWin.style.display = "block";
    }

    oClose.onclick = function(){
        oBack.style.display = "none";
        oWin.style.display = "none";
    }
}