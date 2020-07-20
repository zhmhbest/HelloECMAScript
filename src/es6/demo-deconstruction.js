
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Array Deconstruction】");
{
    {
        // 解构
        let [a, b, c] = [1, 2, 3];
        console.log({a, b, c});
    }
    {
        // 忽略
        let [a, , c] = [1, 2, 3];
        console.log({a, c});
    }
    {
        // 剩余
        let [a, ...s] = [1, 2, 3];
        console.log({a, s});
    }
    {
        // 字符串
        let [a, b, c, d, e] = 'hello';
        console.log({a, b, c, d, e});
    }
    {
        // 默认值
        let [a, b, c='#'] = 'AB';
        console.log({a, b, c});
    }
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Object Deconstruction】");
{
    {
        // 解构
        let { A, B } = { A: 'aaa', B: 'bbb' };
        console.log({A, B});
    }
    {
        // 解构
        let { A : a } = { A: 'aaa'};
        console.log({a});
    }
    {
        // 部分
        let { A, C } = { A: 'aaa', B: 'bbb', C: 'ccc' };
        console.log({A, C});
    }
    {
        // 剩余
        let { A, ...Others } = { A: 'aaa', B: 'bbb', C: 'ccc' };
        console.log({A, Others});
    }
    {
        // 默认
        let { A, B, C='###' } = { A: 'aaa', B: 'bbb' };
        console.log({A, B, C});
    }
}