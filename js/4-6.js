/**
 * Created by M.Jin on 14-8-1.
 */
window.onload = function(){
    var oInput = document.getElementsByTagName("input");
    var oDiv = document.getElementsByTagName("div");
    var bS1 = bS2 = true;
    var mm = [];

    function getArray(str){
        mm.length = 0;
        str = str.split(",");
        for(var i in str){
            mm.push(str[i]);
        }
        return mm;
    }

    oInput[0].onclick = function(){
        var mm = getArray(oDiv[0].innerHTML);
        bS1 ? (mm.shift(),this.value = this.value.replace("删除","添加"),bS1 = false,oDiv[0].innerHTML = mm):(mm.unshift("January(1)"),this.value = this.value.replace("添加","删除"),bS1 = true,oDiv[0].innerHTML = mm);
    };
    oInput[1].onclick = function(){
        var mm = getArray(oDiv[0].innerHTML);
        bS2 ? (mm.pop(),this.value = this.value.replace("删除","添加"),bS2 = false,oDiv[0].innerHTML = mm):(mm.push("December(12)"),this.value = this.value.replace("添加","删除"),bS2 = true,oDiv[0].innerHTML = mm);
    }
};