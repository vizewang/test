/**
 * Created by wangweize on 2014/9/15.
 */
var http=require('http');
var server=http.createServer(function(req,res){
    res.write('hello world');
    res.end()
});
server.listen(3000);