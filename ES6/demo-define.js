
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【let var Scope】"); // 作用域
{
    var scope_var = 66;
    let scope_let = 99;
    console.log('inner scope_var is', scope_var);
    console.log('inner scope_let is', scope_let);
}
// var 全局范围内有效
console.log('scope_var is', scope_var);
// let 仅在代码块内有效
try {
    console.log('scope_let is', scope_let);
} catch (e) {
    console.log(e.message, '<-err')
}

console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【let var Lift】"); // 变量提升
{
    // var 存在变量提升
    console.log('lift_var is', lift_var);
    var lift_var = 66;
    console.log('lift_var is', lift_var);

    // let 不存在变量提升
    try {
        console.log('lift_let is', lift_let);
    } catch (e) {
        console.log(e.message, '<-err');
    }
    let lift_let = 99;
    console.log('lift_let is', lift_let);
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【const】"); // 常量
{
    const PI = 3.1415926;
    console.log(PI);
    try {
        PI = 3.14;
    } catch (e) {
        console.log(e.message, '<-err');
    }
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Dead Zone】"); // 死区
// 代码块内如果存在 let 或者 const，代码块会对这些命令声明的变量从块的开始就形成一个封闭作用域。
// 在此之前不能再使用var声明变量。
{

    // var dead_let = 22;
    let dead_let = 99;

    // var dead_con = 33;
    const dead_con = 77;
}
