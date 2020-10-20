console.log('【Concat】');
console.log(['a', 'b', 'c'].concat([1, 2, 3]));
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log('【Slice】');
const arr_slice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Left(len)     = slice(0, len)   ", arr_slice.slice(0, 3));
console.log("Right(len)    = slice(-len)     ", arr_slice.slice(-3));
console.log("DelLeft(len)  = slice(len)      ", arr_slice.slice(5));
console.log("DelRight(len) = slice(0, -len)  ", arr_slice.slice(0, -5));
console.log("Mid[startL, endL) = slice(startL, endL)  ", arr_slice.slice(2, 5));
console.log("Mid[startL, endR] = slice(startL, -endR) ", arr_slice.slice(5, -2));
console.log("Mid[startR, endR] = slice(-startR, -endR)", arr_slice.slice(-4, -2));