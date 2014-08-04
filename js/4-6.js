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
    };
    oInput[2].onclick = function(){
        var mm = getArray(oDiv[1].innerHTML);
        //复制 concat()方法
        oDiv[1].innerHTML = mm.concat(mm).toString().replace(/\s/g,"");
    };
    oInput[3].onclick = function(){
        var mm = getArray(oDiv[1].innerHTML);
        mm.length = 10;
        oDiv[1].innerHTML = mm;
    };
    oInput[4].onclick = function(){
        var mm = ["red","green","blue","white","yellow","black","brown"];
        oDiv[2].innerHTML = mm;
    };

    //删除前三项
    oInput[5].onclick = function(){
        var mm = getArray(oDiv[2].innerHTML);
        mm.splice(0,3);
        oDiv[2].innerHTML = mm;
    };
    //删除第二到三项
    oInput[6].onclick = function(){
        var mm = getArray(oDiv[2].innerHTML);
        mm.splice(1,2);
        oDiv[2].innerHTML = mm;
    };
    //在第二项后插入(orange, purple)
    oInput[7].onclick = function(){
        var mm = getArray(oDiv[2].innerHTML);
        mm.splice(2,0,"orange","purple");
        oDiv[2].innerHTML = mm;
    };
    //替换第二三项
    oInput[8].onclick = function(){
        var mm = getArray(oDiv[2].innerHTML);
        mm.splice(1,2,"#009900","#0000ff");
        oDiv[2].innerHTML = mm;
    }



};