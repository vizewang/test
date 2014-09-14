/**
 * Created by wangweize on 2014/9/14.
 */
var sum=function(){
    var i,sum=0;
    for(i=0;i<arguments.length;i+=1){
        sum +=arguments[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5))