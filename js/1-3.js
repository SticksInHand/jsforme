/**
 * Created by M.Jin on 14-7-30.
 */
function myAlert(a,b){
    alert(a.value+"  "+ b.value);
}

window.onload = function(){
    var oInput1 = document.getElementsByTagName("input");
    var oBtn = document.getElementsByTagName("button");


    oBtn[0].onclick = function(){
        myAlert(oInput1[0],oInput1[1]);
    }
}