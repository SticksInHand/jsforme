/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oImg = document.getElementById("box").getElementsByTagName("img");
    var oDiv = document.getElementsByTagName("div")[0];

    for(var i = 0;i < oImg.length;i++){
        oImg[i].onmouseover = function(){
            var img = new Image();
            img.src = oImg[0].src = this.src.replace(/small/,"big");
            oDiv.style.display = "block";
        }
    }
};