/**
 * Symbol
 * 数据类型，表示独一无二的值。
 * 一般用来定义对象的唯一属性名。
 */


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
{
    let syb1 = Symbol("SYMBOL");
    let syb2 = Symbol("SYMBOL");
    console.log({syb1, syb2});
    console.log('type:', typeof syb1, typeof syb2);
    console.log('syb1 === syb2:', syb1 === syb2);
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
{
    let syb = Symbol("the_key");
    // 写法1
    {
        let obj = {};
        obj[syb] = "first";
        console.log(obj);
    }
    // 写法2
    {
        let obj = {
            [syb]: "second"
        };
        console.log(obj);
    }
    // 写法3
    {
        let obj = {};
        Object.defineProperties(obj, {
            [syb]: {value: "third"}
        });
        console.log(obj);
    }
}

