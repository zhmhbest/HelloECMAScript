/*
 * prototype
 */
function ClassCreator(name) { this.name = name }
ClassCreator.prototype.sayName = function () {
    console.log(this.name);
};

var obj1 = new ClassCreator("A");
var obj2 = new ClassCreator("B");
console.log(obj1);
console.log(obj2);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

/**
 * 显式原型: __proto__
 * 隐式原型: prototype
 */
function getProto(obj) {
    // ES5: return obj.__proto__;
    // ES6: return Object.getPrototypeOf(obj);
    return obj.__proto__;
}
console.log("obj1           is obj2                  ", obj1 === obj2);
console.log("obj1.proto     is obj2.proto            ", getProto(obj1) === getProto(obj2));
console.log("obj1.prototype is obj2.prototype        ", obj1.prototype === obj2.prototype);
console.log("obj1.proto     is ClassCreator.prototype", getProto(obj1) === ClassCreator.prototype);
console.log("obj1.prototype is ClassCreator.prototype", obj1.prototype === ClassCreator.prototype);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("sayName in obj1", 'sayName' in obj1);
console.log("obj1 hasOwnProperty sayName", obj1.hasOwnProperty('sayName'));