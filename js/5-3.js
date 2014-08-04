/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oP = document.getElementsByTagName("p");
    document.onkeydown = function(event){
        var event = (event || window.event);
        oP[0].innerHTML = event.keyCode;
        return false;
    }
};