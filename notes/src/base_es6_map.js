/*
 * Map
 */
{
    const map = new Map();
    map.set('123', 123);
    map.set(123, "123");
    map.set(NaN, "not a number");
    console.log(map.get('123'));
    console.log(map.get(123));
    console.log(map.get(NaN));
    console.log(map);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

{
    const map = new Map();
    map.set('A', "10");
    map.set('B', "11");

    for (let [key, val] of map) {
        console.log(key + " = " + val);
    }
    console.log('');

    for (let [key, value] of map.entries()) {
        console.log(key + " = " + value);
    }
    console.log('');

    map.forEach(function(val, key) {
        console.log(key + " = " + val);
    });
    console.log('');

    for (let key of map.keys()) {
        console.log(key);
    }
    console.log('');

    for (let value of map.values()) {
        console.log(value);
    }
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

{
    /**
     * 从对象创建Map
     * @param {Object} obj
     */
    function MapBuilder(obj) {
        const map = new Map();
        for (let key in obj ) map.set(key, obj[key]);
        return map;
    }
    const map1 = MapBuilder({
        a: 'A',
        b: 'B',
    });
    const map2 = MapBuilder({
        c: 'C',
        d: 'D',
    });
    // 转为数组
    console.log(Array.from(map1));

    // 克隆
    const map11 = new Map(map1);
    console.log(map11);

    // 合并
    const map_merged = new Map([...map1, ...map2]);
    console.log(map_merged);
}