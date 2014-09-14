/**
 * Created by wangweize on 2014/9/14.
 */
var start=Date.now();
setTimeout(function(){
    console.log(Date.now()-start);
    for(var i=0;i<10000000;i++){
    }
},1000);

setTimeout(function(){
    console.log(Date.now()-start);
},2000)