/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oTab = document.getElementById("tab");
    var oContent = document.getElementById("content");

    var oTabChil = oTab.getElementsByTagName("li");
    var oContentChil = oContent.getElementsByTagName("ul");

    for(var i = 0;i < oTabChil.length;i++){
        oTabChil[i].index = i;
        oTabChil[i].onmouseover = function(){
            var mm = this.index;
            for(var p in oTabChil){oTabChil[p].className = ""}
            this.className = "current";
            for(var q in oContentChil){
                if(mm == q){
                    oContentChil[q].style.display = "block";
                }else{
                    oContentChil[q].style.display = "none";
                }
            }
        }
    }
}