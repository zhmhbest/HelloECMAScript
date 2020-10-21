/*
 * Set
 */
{
    let set_test = new Set();
    set_test.add(1);
    set_test.add(2);
    set_test.add(2); // 重复添加无效
    set_test.add(3);
    console.log(set_test);
    // 迭代
    for (let ele of set_test) {
        console.log(ele);
    }
    // 从字符串创建
    let set_str = new Set("Hello");
    console.log(set_str);
    // 从数组创建
    let set_arr = new Set(['a', 'b', 'b', 'c']);
    console.log(set_arr);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

{
    let set1 = new Set([1, 2, 3]);
    let set2 = new Set([2, 3, 4]);
    // 并集
    console.log(new Set([...set1, ...set2]));
    // 交集
    console.log(new Set([...set1].filter(x => set2.has(x))));
    // 差集
    console.log(new Set([...set1].filter(x => !set2.has(x))));
    console.log(new Set([...set2].filter(x => !set1.has(x))));
}