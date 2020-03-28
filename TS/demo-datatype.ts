/**
 * 数据类型
 */

console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Constant String】");
const HELLO1: string = 'Hello World!\t|';
const HELLO2: string = "Hello World!\t|";
console.log({HELLO1, HELLO2});


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Number】");
let num_bin: number = 0b1111;    // 二进制
let num_oct: number = 0o744;     // 八进制
let num_dec: number = 6;         // 十进制
let num_hex: number = 0xff;      // 十六进制
console.log({num_bin, num_oct, num_dec, num_hex});


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Boolean】");
let flag1: boolean = true;
let flag2: boolean = false;
console.log({flag1, flag2});


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Array】");
// 数组中只能存储相同类型的元素
let arr1: number[] = [1, 2];
let arr2: Array<number> = [3, 4];
console.log(arr1);
console.log(arr2[1]);


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Any】");
// 可变类型
let var_any: any;
var_any = 1;                // Number
console.log(var_any);
var_any = 'I am who I am';  // String
console.log(var_any);
var_any = false;            // Boolean
console.log(var_any);
var_any = [1,2];            // Array
console.log(var_any);


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Any Array】");
// Any数组中可存储不同类型的元素
let list_any: any[] = [1, false, 'fine'];
console.log(list_any);


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Tuple】"); // 元组
let ele1: [string, number] = ["Anne", 16];
console.log(ele1);
let [ele1_1, ele1_2] = ele1;
console.log({ele1_1, ele1_2});
let ele2 = [];
ele2.push('Peter');
ele2.push(3.1415);
ele2.push(996);
ele2.push(123);
ele2.pop();
console.log(ele2);


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Union】"); // 联合类型
let var_union: string | number;
var_union = 99999; console.log("num:" + var_union);
var_union = "str"; console.log("str:" + var_union);
function testUnion(name: string | string[]) {
    if (typeof name == "string") {
        console.log("1:", name);
    } else {
        for (let i: number = 0; i < name.length; i++) {
            console.log("*:", name[i]);
        }
    }
}
testUnion("Google");
testUnion(["Twitter", "Google", "Facebook"]);


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Enum】"); // 枚举类型
enum Color {Red, Green, Blue}
let color_r: Color = Color.Red;
let color_g: Color = Color.Green;
let color_b: Color = Color.Blue;
console.log({color_r, color_g, color_b});


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Function】");

function sayHello(): void {
    console.log("Hello");
}
sayHello();

let add = function(num1: number, num2: number): number {
    return num1 + num2;
};
console.log(add(1, 2));


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Function In JSON】");
//函数在JSON结构中的3种表示方法
let fun_arr = {
    A: function(arg1: string, arg2: string): void { console.log({arg1, arg2}); },
    B: (arg1: string, arg2: string): void => { console.log({arg1, arg2}); },
    C: arg => { console.log({arg}); }
};
fun_arr.A("A1","A2");
fun_arr.B("B1","B2");
fun_arr.C("C1");