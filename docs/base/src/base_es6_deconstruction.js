/*
 * Deconstruction
 */
console.log("【Array Deconstruction】");
{
    const test_arr = [1, 2, 3];
    const test_str = "Hi";
    {
        // 解构
        let [a, b, c] = test_arr;
        console.log({a, b, c});
    }
    {
        // 忽略
        let [a, , c] = test_arr;
        console.log({a, c});
    }
    {
        // 剩余
        let [a, ...s] = test_arr;
        console.log({a, s});
    }
    {
        // 字符串
        let [a, b] = test_str;
        console.log({a, b});
    }
    {
        // 不存在
        let [a, b, c] = test_str;
        console.log({a, b, c});
    }
    {
        // 默认值
        let [a, b, c = '#'] = test_str;
        console.log({a, b, c});
    }
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("【Object Deconstruction】");
{
    const test = {A: 'aaa', B: 'bbb', C: 'ccc'};
    {
        // 解构
        let {A, B, C} = test;
        console.log({A, B, C});
    }
    {
        // 解构
        let {A: a, B: b, C: c} = test;
        console.log({a, b, c});
    }
    {
        // 部分
        let {A, C} = test;
        console.log({A, C});
    }
    {
        // 剩余
        let {A, ...others} = test;
        console.log({A, others});
    }
    {
        // 不存在
        let {A, B, D} = test;
        console.log({A, B, D});
    }
    {
        // 默认
        let {A, B, D = '###'} = test;
        console.log({A, B, D});
    }
}