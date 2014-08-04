/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oLi = document.getElementsByTagName("li");
    var oBig = document.getElementById("big");
    var oLoading = oBig.getElementsByTagName("div");

    for(var i = 0;i<oLi.length;i++){
        oLi[i].index = i;

        //图片预加载
        oLi[i].onmouseover = function(){
            var oImg = document.createElement("img");
            var img = new Image();
            img.src = oImg.src = oLi[this.index].getElementsByTagName("img")[0].src.replace(".jpg","_big.jpg");
            oBig.style.display = oLoading[0].style.display = "block";
            oBig.appendChild(oImg);
            this.className = "active";
            img.complete ? oLoading[0].style.display = "none":(oImg.onload = function(){oLoading[0].style.display = "none"});
        };
        //鼠标移开
        oLi[i].onmouseout = function(){
            this.className = "";
            oBig.style.display = "none";
            oBig.removeChild(oBig.lastChild);
        };
        //鼠标移动，图片跟随
        oLi[i].onmousemove = function(event){
            var event = event || window.event;
            var iWidth = document.documentElement.offsetWidth - event.clientX;
            //设置big的top值
            oBig.style.top = event.clientY + 20 + "px";
            //设置big的left值, 如果右侧显示区域不够, 大图将在鼠标左侧显示.
            oBig.style.left = (iWidth < oBig.offsetWidth + 10 ? event.clientX - oBig.offsetWidth - 10 : event.clientX + 10) + "px";
        };
    }
};