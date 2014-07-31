/**
 * Created by M.Jin on 14-7-31.
 */
window.onload = function(){

    var Oclock = document.getElementById("clock");
    var Ospan = Oclock.getElementsByTagName("span");

    function getTimes(){
        var oDate = new Date();
        var aDate = [oDate.getHours(),oDate.getMinutes(),oDate.getSeconds()];

        for(var i = 0;i<Ospan.length;i++){
            Ospan[i].innerHTML = formate(aDate[i]);
        }
    }
    getTimes();
    setInterval(getTimes,1000);

    function formate(a){
        return a.toString().replace(/^(\d)$/,"0$1");
    }
};