/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oSearch = document.getElementById("search");
    var oUl = oSearch.getElementsByTagName("ul")[0];
    var oLi = oSearch.getElementsByTagName("li");
    var oSpan = oSearch.getElementsByTagName("span")[0];

    oSpan.onclick = function(event){
        oUl.style.display = oUl.style.display == "block" ? "none":"block";
        (event || window.event).cancelBubble = true;
    };

    for(var i = 0;i<oLi.length;i++){
        oLi[i].onmouseover = function(){
            this.className = "hover";
        };
        oLi[i].onmouseout = function(){
            this.className = "";
        };
        oLi[i].onclick = function(){
            var content = this.innerHTML;
            oSpan.innerHTML = content;
        }
    }

    document.onclick = function(){
        oUl.style.display = "none";
    }
};