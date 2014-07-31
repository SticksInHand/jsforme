/**
 * Created by M.Jin on 14-7-31.
 */

window.onload = function(){

    var coutt = document.getElementById("countdown");
    var oSpan = coutt.getElementsByTagName("span");
    var oInput = document.getElementsByTagName("input")[0];
    var timer = null;

    oInput.onclick = function(){
        this.className = this.className == "" ? "cancel" :"";
        this.className == "" ? clearInterval(timer):timer = setInterval(updateTime,1000);
    };

    function format(a){
        return a.toString().replace(/^(\d)$/,"0$1");
    }
    function updateTime(){
        var AllTime = oSpan[0].innerHTML.replace(/^0/,"")*60 + parseInt(oSpan[1].innerHTML);
        AllTime -- ;
        if(AllTime <= 0){
            clearInterval(timer);
            return
        }

        oSpan[0].innerHTML = format(parseInt(AllTime/60));
        oSpan[1].innerHTML = format(AllTime%60);


    }

}
