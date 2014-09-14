/**
 * Created by wangweize on 2014/9/14.
 */
var empty_object = {};
var stooge = {
    "first-name": 'Jerome',
    "last-name": "Howard"
};

stooge["middle-name"] = 'Lester';
stooge.nickname = 'Curly';


if (typeof Object.beget !== 'function') {
    Object.create = function (o) {
        var F = function () {
        };
        F.prototype = o;
        return new F();
    };
}
var another_stooge=Object.create(stooge);

another_stooge['first-name']="Harry";
another_stooge['middle-name']="Moses";
another_stooge.nickname="Moe";
console.log(another_stooge.nickname);
stooge.profession="vize";
delete another_stooge.nickname;
console.log(another_stooge.nickname);
console.log(another_stooge.profession);
console.log(stooge.nickname);