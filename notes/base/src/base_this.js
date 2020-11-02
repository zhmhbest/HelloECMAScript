/*
 * this: 上下文环境（默认为window）
 * call、apply: 手动指定上下文环境
 */
function testThis(words) {console.log(this.name, ":", words)}

let obj1 = {
    name: "A",
    say: testThis
};
obj1.say('Hi!');
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

let obj2 = Object();
obj2.name = "B";
obj2.say = testThis;
obj2.say('Hello!');
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

//  call(context, parameters)
// apply(context, arguments)
testThis.call(obj1, 'call');
testThis.apply(obj2, ['apply']);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("【箭头函数无法传递this】");
(function () {
    console.log(this.name)
}).call({name: 'ES5'});
(() => {
    console.log(this.name)
}).call({name: 'ES6'});