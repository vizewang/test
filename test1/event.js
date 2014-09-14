/**
 * Created by wangweize on 2014/9/14.
 */
var eventEmitter=require('events').EventEmitter
,a=new eventEmitter;
a.on('event',function(){
    console.log('event called');
})
a.emit('event');