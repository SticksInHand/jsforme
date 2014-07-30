/**
 * Created by M.Jin on 14-7-30.
 */
window.onload = function(){
    var oA = document.getElementsByTagName("a")[0];
    var oLabel = document.getElementsByTagName("label")[0];
    var oInput = document.getElementsByTagName("input");

    var isCheckedAll = function(){
        for(var i = 1,n = 0;i < oInput.length;i++){
            oInput[i].checked && n++;
        }
        oInput[0].checked = n == oInput.length-1;
        oLabel.innerHTML = oInput[0].checked ? "全不选":"全选";
    };

    //全选/全不选
    oInput[0].onclick = function(){
        for(var i = 1;i < oInput.length;i++){
            oInput[i].checked = this.checked;
        }
        isCheckedAll();
    };

    //反选
    oA.onclick = function(){
        for(var i = 1;i < oInput.length;i++){
            oInput[i].checked = !oInput[i].checked;
        }
        isCheckedAll();
    };

    //触发
    for(var m = 1;m < oInput.length;m++){
        oInput[m].onclick = function(){
            isCheckedAll();
        }
    }
};