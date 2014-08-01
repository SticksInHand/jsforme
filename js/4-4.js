/**
 * Created by M.Jin on 14-8-1.
 */

var i = result = 0;
function sum(){
    for(i = 0;i<arguments.length;i++){
        result += arguments[i];
    }
    return result;
}
alert(sum(1,2,3,4,5,6));