/*
 * 工厂方式创建对象
 */

function newFactory1(name) {
    return {
        name: name,
        sayName: function () {
            console.log(this.name);
        }
    }
}
newFactory1('张3').sayName();
newFactory1('李4').sayName();
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

function newFactory2(name) {
    var obj = {}; // Object()
    obj.name = name;
    obj.sayName = function () {
        console.log(this.name);
    };
    return obj
}
newFactory2('王5', 1).sayName();
newFactory2('赵6', 1).sayName();
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

function Factory1(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    };
    return this
}
var objF1_1 = new Factory1('钱7');
var objF1_2 = new Factory1('宋8');
console.log(objF1_1);
console.log(objF1_2);
console.log(objF1_1.sayName === objF1_2.sayName);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

var Factory2 = (function () {
    function sayName() {
        console.log(this.name);
    }
    return function(name) {
        this.name = name;
        this.sayName = sayName;
        return this
    }
})();
var objF2_1 = new Factory2('钱9');
var objF2_2 = new Factory2('宋A');
console.log(objF2_1);
console.log(objF2_2);
console.log(objF2_1.sayName === objF2_2.sayName);