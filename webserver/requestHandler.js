/**
 * Created by wangweize on 2014/9/14.
 */
exports.hello = function(res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("say hello.");
    res.end();
};
exports.upload = function(res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("upload");
    res.end();
};