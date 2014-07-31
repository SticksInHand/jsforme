/**
 * Created by M.Jin on 14-7-31.
 */
var get = {
    byId:function(id){
        return document.getElementById(id);
    },
    byClass:function(sclass,oparent){
        if(oparent.getElementsByClassName){
            return oparent.getElementsByClassName(sclass);
        }else{
            var results = new Array();
        }
    }
};