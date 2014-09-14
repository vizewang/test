/**
 * Created by wangweize on 2014/9/14.
 */
function c(){
    b();
}
function b(){
    a();
}
function c(){
    throw new Error('here');
}
c();