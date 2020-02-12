

//使用模块
// @ts-ignore
import modTest = require('ts-module');
(function(){
    console.log(modTest.PI);
    console.log(modTest.echoHello());
    let obj = new modTest.People("Peter", false, 12);
    obj.say();
})();


//数据类型
namespace testSpace {
    //常量
    const HELLO1: string = 'Hello World!\t|';
    const HELLO2: string = "Hello World!\t|";
    console.log({HELLO1, HELLO2});
    //number
    let binLiteral: number = 0b1111;    // 二进制
    let octLiteral: number = 0o744;     // 八进制
    let decLiteral: number = 6;         // 十进制
    let hexLiteral: number = 0xff;      // 十六进制
    console.log({binLiteral, octLiteral, decLiteral, hexLiteral});
    //boolean
    let flag: boolean = true;
    console.log(flag);
    //array : 数组中只能存储相同类型的元素
    let arr1: number[] = [1, 2];
    let arr2: Array<number> = [3, 4];
    console.log(arr1);
    console.log(arr2[1]);

    //可变类型
    let x_any: any = 1;         // 数字类型
    x_any = 'I am who I am';    // 字符串类型
    x_any = false;              // 布尔类型

    //混合数组
    let arrayList: any[] = [1, false, 'fine'];
    console.log(arrayList);

    //元组
    let ele1: [string, number] = ["Anne", 16];
    let ele2 = [];
    ele2.push('Peter');
    ele2.push(3.1415);
    ele2.push(996);
    ele2.push(123);
    ele2.pop();
    console.log(ele1, ele1[0]);
    console.log(ele2);

    //联合类型
    let val: string | number;
    val = 12; console.log("数字为 " + val);
    val = "Anything"; console.log("字符串为 " + val);
    function testUnion(name: string | string[]) {
        if (typeof name == "string") {
            console.log(name);
        } else {
            for (let i: number = 0; i < name.length; i++) {
                console.log(name[i]);
            }
        }
    }
    testUnion("Google");
    testUnion(["Baidu", "Google", "Taobao", "Facebook"]);

    //枚举类型
    enum Color {Red, Green, Blue}
    let color: Color = Color.Green;
    console.log("Color:" + color);

    //函数类型
    function sayHello(): void {
        console.log("Hello 1");
    }
    let getHello = function(): string {
        return "Hello 2";
    }
    sayHello();
    let hello = getHello();
    console.log(hello);

    //函数在JSON结构中的3种表示方法
    let arrFun = {
        A: function(arg1: string, arg2: string): void { console.log("arg:" + arg1 + "," + arg2); },
        B: (arg1: string, arg2: string): void => { console.log("arg:" + arg1 + "," + arg2); },
        C: arg => { console.log("arg:" + arg); }
    };
    arrFun.A("1","2");
    arrFun.B("3","4");
    arrFun.C("0");

    //若想命名空间内元素被外访问
    export function saySomething() {
        console.log("Something!");
    }
};


//使用命名空间内容元素
testSpace.saySomething();


//逻辑分支
(function(){
    for (let i: number = 0; i < 10; i++) { //0~9
        console.log(i);
    }
    for (let val in ['a', 'b', 'c']) { //列表输出
        console.log(val);
    }
    for (let it of ['a', 'b', 'c']) { //迭代
        console.log(it);
    }
    let num: number = 3;
    while (num--) {
        console.log(num);
    }
    do {
        console.log(++num);
    } while (num != 2);
})();




