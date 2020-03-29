
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Set】");
{
    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add("Hello");
    set.add(3); // 重复添加无效
    console.log(set);

    // 迭代
    for (let ele of set) {
        console.log(ele);
    }

    // 从字符串创建
    let set_str = new Set("Hello");
    console.log(set_str);

    // 从数组创建
    let set_arr = new Set(['a', 'b', 'b', 'c']);
    console.log(set_arr);
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Set Operation】");
{
    // 并集
    {
        let a = new Set([1, 2, 3]);
        let b = new Set([2, 3, 4]);
        let union = new Set([...a, ...b]);
        console.log(union);
    }

    // 交集
    {
        let a = new Set([1, 2, 3]);
        let b = new Set([2, 3, 4]);
        let intersect = new Set([...a].filter(x => b.has(x)));
        console.log(intersect);
    }

    // 差集
    {
        let a = new Set([1, 2, 3]);
        let b = new Set([2, 3, 4]);
        let difference1 = new Set([...a].filter(x => !b.has(x)));
        console.log(difference1);
        let difference2 = new Set([...b].filter(x => !a.has(x)));
        console.log(difference2);
    }
}