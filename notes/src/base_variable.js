/*
 * none
 * var
 * let
 */
console.log("【none】");
(function () {
    for (g = 0; g < 2; g++) console.log(g);
})();
console.log("函数外可以访问：", g);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("【var】");
(function () {
    console.log("可以提前访问", i);
    for (var i = 0; i < 2; i++) console.log(i);
    // 跳出循环后依旧可以访问
    console.log("可以之后访问", i);
    var i = 99;
    console.log("可以重复定义", i);
})();
try { i } catch (e) { console.log("函数外不可以访问", e.name) }
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("【let】");
(function () {
    try { j } catch (e) { console.log("不可以提前访问", e.name) }
    for (let j = 0; j < 2; j++) console.log(j);
    try { j } catch (e) { console.log("不可以块外访问", e.name) }
})();
try { j } catch (e) { console.log("函数外不可以访问", e.name) }