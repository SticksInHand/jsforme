/**
 * Created by M.Jin on 14-8-4.
 */
window.onload = function(){
    var oBox = document.getElementById("box");
    var bLeft = bRight = bTop = bBottom = false;

    document.onkeydown = function(event){
        var event = (event || window.event);

        switch (event.keyCode) {
            case 37:
                bLeft = true;
                break;
            case 38:
                bTop = true;
                break;
            case 39:
                bRight = true;
                break;
            case 40:
                bBottom = true;
                break;
        }

        return false;
    };
    document.onkeyup = function(event){
        var event = (event || window.event);

        switch (event.keyCode){
            case 37:
                bLeft = false;
                break;
            case 38:
                bTop = false;
                break;
            case 39:
                bRight = false;
                break;
            case 40:
                bBottom = false;
                break;
        }
    }

    setInterval(function(){
        if(bLeft){
            oBox.style.left = oBox.offsetLeft - 1 + "px";
        }
        else if(bRight){
            oBox.style.left = oBox.offsetLeft + 1 + "px";
        }
        if(bTop){
            oBox.style.top = oBox.offsetTop - 1 + "px";
        }
        else if(bBottom){
            oBox.style.top = oBox.offsetTop + 1 + "px";
        }
        limit();
    },3);

    //防止溢出方法
    function limit(){
        var doc = [document.documentElement.clientWidth,document.documentElement.clientHeight];
        oBox.offsetLeft <= 0 && (oBox.style.left = 0);
        oBox.offsetTop <= 0 && (oBox.style.top = 0);
        doc[0] - oBox.offsetLeft <= oBox.offsetWidth && (oBox.style.left = doc[0] - oBox.offsetWidth + "px");
        doc[1] - oBox.offsetTop <= oBox.offsetHeight && (oBox.style.top = doc[1] - oBox.offsetHeight + "px");

    }


};























