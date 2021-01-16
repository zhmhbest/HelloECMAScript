const arr_enum = ['a', 'b'];
arr_enum['attr'] = 'wtf';
console.log(arr_enum);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array for i】');
for (let i=0; i<arr_enum.length; i++) {
    console.log(i, arr_enum[i]);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array for in】');
for (let i in arr_enum) {
    if (arr_enum.hasOwnProperty(i)) {
        console.log(i, arr_enum[i]);
    }
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array for of】');
for (let item of arr_enum) {
    console.log(item);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array for each】');
arr_enum.forEach(function (item, i) {
    console.log(i, item);
});
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array map】');
const result_map = arr_enum.map(function (item, i) {
    console.log(i, item);
    return i + 1; // 决定元素是什么
});
console.log(result_map);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array filter】');
const result_filter = arr_enum.filter(function (item, i) {
    console.log(i, item);
    return true; // 决定是否有此元素
});
console.log(result_filter);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array every】');
const result_every = arr_enum.every(function (item, i) {
    console.log(i, item);
    return true;
});
console.log(result_every); // 每一项都是true结果为true
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array some】');
const result_some = arr_enum.some(function (item, i) {
    console.log(i, item);
    return true;
});
console.log(result_some); // 有一项是true结果为true
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array keys】');
for (let index of arr_enum.keys()) {
    console.log(index); // 遍历索引值
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array keys】');
for (let elem of arr_enum.values()) {
    console.log(elem); // 遍历元素值
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array entries】');
for (let [index, elem] of arr_enum.entries()) {
    console.log(index, elem); // 遍历 索引值 元素值
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array reduce left】');
arr_enum.reduce(function (pre, cur, index) {
    console.log(pre, cur, index); // 用于从左累加元素
});
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array reduce right】');
arr_enum.reduceRight(function (pre, cur, index) {
    console.log(pre, cur, index); // 用于从右累加元素
});
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【array find】');
const result_find = arr_enum.find(function (item, index) {
    console.log(item, index);
    return false; // 返回true即停止循环
});
console.log(result_find); // 结果为返回true时的元素或undefined