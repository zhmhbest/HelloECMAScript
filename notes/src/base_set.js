/*
 * set
 */
// 并集
Array.prototype.union = function (arr) { return this.concat(arr.filter(v => -1 === this.indexOf(v))) };
// 交集
Array.prototype.intersection = function (arr) { return this.filter(v => arr.indexOf(v) > -1) };
// 差集
Array.prototype.difference = function (arr) { return this.filter(v => -1 === arr.indexOf(v)) };
// ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■

const set1 = [1, 2, 3];
const set2 = [3, 2, 5];
console.log("set1 =", set1);
console.log("set2 =", set2);

const union1 = set1.union(set2);
const union2 = set2.union(set1);
console.log("set1 ∪ set2 =", union1);
console.log("set2 ∪ set1 =", union2);

const intersection1 = set1.intersection(set2);
const intersection2 = set2.intersection(set1);
console.log("set1 ∩ set2 =", intersection1);
console.log("set2 ∩ set1 =", intersection2);

const difference1 = set1.difference(set2);
const difference2 = set2.difference(set1);
console.log( set1, "-", intersection1, "=", difference1);
console.log( set2, "-", intersection2, "=", difference2);