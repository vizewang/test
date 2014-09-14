/**
 * Created by wangweize on 2014/9/14.
 */
var requestHandler = require("./requestHandler");
var server = require("./server");
var route = {
    "/hello": requestHandler.hello,
    "/upload": requestHandler.upload
};
server.start(route);