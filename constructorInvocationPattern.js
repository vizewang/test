/**
 * Created by wangweize on 2014/9/14.
 */
var Quo=function(string){
    this.status=string;
}
Quo.prototype.get_status=function(){
    return this.status;
}

var myQuo=new Quo("confused");
console.log(myQuo.get_status());