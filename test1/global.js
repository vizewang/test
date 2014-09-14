/**
 * Created by wangweize on 2014/9/14.
 */
console.log(1);
process.nextTick(function(){console.log(2)});
console.log(3);