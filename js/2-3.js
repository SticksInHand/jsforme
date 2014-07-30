/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var Oinput = document.getElementsByTagName("input")[0];
    var Ostrong = document.getElementsByTagName("strong")[0];
    var Obtn = document.getElementsByTagName("button")[0];

    Oinput.onkeyup = function(){
        this.value = this.value.replace(/[^(\d)|(,)]/,"");
    }
    Obtn.onclick = function(){
        var mm = Oinput.value.split(",");
        var sum = 0;
        for(var p in mm){
            mm[p] = mm[p] == "" ? 0:mm[p];
            sum = sum+parseInt(mm[p]);
        }

        Ostrong.innerHTML = sum;
    }

}