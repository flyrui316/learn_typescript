/**
 * Created by hl on 2019/1/25.
 */
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Ryan';
console.log(sayHello(user));
var createdByBoolean = Boolean(1);
var myName = 'rom';
var myAge = 25;
myName = 23;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is Tom');
    return {};
}
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 11;
var tom = {
    name: 'Tom',
    aaa: 123
};
tom.name = '123';
var fibonacci = [1, 1, 2, 3, 5];
fibonacci.push(1);
var fibonacci2 = ['12'];
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
jQuery('#foo');
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
var direction = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
function reverses(x) {
    var y, z = Math.abs(x), sum = [], flag = false, reverseRes = 0;
    if (z > Math.pow(2, 31) - 1)
        return reverseRes;
    for (var i = 0; i >= 0; i++) {
        y = z % 10;
        z = parseInt((z / 10).toString());
        if (z == 0) {
            sum.push(y);
            break;
        }
        if (y > 0) {
            flag = true;
        }
        if (flag) {
            sum.push(y);
        }
        else {
            continue;
        }
    }
    reverseRes = parseInt(sum.join(''));
    if (reverseRes > Math.pow(2, 31) - 1)
        return 0;
    if (x < 0)
        reverseRes = 0 - reverseRes;
    return reverseRes;
}
function rev(x) {
    var abs = Math.abs(x), z = parseInt(abs.toString()).toString(), temp = z.split(''), max = Math.pow(2, 31) - 1, result = 0;
    if (abs > max)
        return result;
    temp.reverse();
    result = parseInt(temp.join(''));
    if (result > max)
        return 0;
    if (x < 0)
        result = 0 - result;
    return result;
}
