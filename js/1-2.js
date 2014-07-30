/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){

    var oLink = document.getElementsByTagName("link")[0];
    var oBtn = document.getElementById("skin").getElementsByTagName("li");

    for(var i = 0;i< oBtn.length;i++){
        oBtn[i].onclick = function(){
            for(var p in oBtn){
                oBtn[p].className = "";
            }
            this.className = "current";

            var oId = this.id;
            oLink.href = "../css/" + oId + ".css";
        }
    }

}