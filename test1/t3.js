/**
 * Created by wangweize on 2014/9/14.
 */
var a={a:'b'};
Object.prototype.c= 'd1';

for(var i in a){
    if(a.hasOwnProperty(i)){
        console.log(a[i]);
    }
}
console.log(Object.keys(a));