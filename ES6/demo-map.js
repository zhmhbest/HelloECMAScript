
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Map】");
{
    const map = new Map();
    map.set('123', 123);
    map.set(123, "!@#");
    map.set(NaN, "not a number");

    console.log(map.get('123'));
    console.log(map.get(123));
    console.log(map.get(NaN));
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Map Iterator】");
{
    const map = new Map();
    map.set('a', "zero");
    map.set('b', "one");
    map.set('c', 'two');

    // [key, val]
    for (let [key, val] of map) {
        console.log(key + " = " + val);
    }
    console.log('');

    // [key, val]
    for (let [key, value] of map.entries()) {
        console.log(key + " = " + value);
    }
    console.log('');

    // [val, key]
    map.forEach(function(val, key) {
        console.log(key + " = " + val);
    });
    console.log('');

    // keys
    for (let key of map.keys()) {
        console.log(key);
    }
    console.log('');

    // values
    for (let value of map.values()) {
        console.log(value);
    }
    console.log('');
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Map Operation】");
{
    /**
     * 从对象创建Map
     * @param {Object} dict
     */
    function MapConstructor(dict) {
        const map = new Map();
        for (let key in dict ) {
            map.set(key, dict[key]);
        }
        return map;
    }
    const map1 = MapConstructor({
        a: 'Apple',
        b: 'Bubble',
        c: 'Candy'
    });
    const map2 = MapConstructor({
        d: 'Duck',
        e: 'Email',
        f: 'Future'
    });
    // console.log(map1);
    // console.log(map2);

    // 转为数组
    console.log(Array.from(map1));

    // 克隆
    const map11 = new Map(map1);
    console.log(map11);

    // 合并
    const map_merged = new Map([...map1, ...map2]);
    console.log(map_merged);
}