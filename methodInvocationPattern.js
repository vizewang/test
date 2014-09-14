/**
 * Created by wangweize on 2014/9/14.
 */
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);
var add=function(x,y){
    return x+y;
}

myObject.double = function () {
    var that = this;
    var helper = function () {
        that.value = add(that.value, that.value);
        console.log(this.value);
    };
    helper();
}
myObject.double();
