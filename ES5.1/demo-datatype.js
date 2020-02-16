/**
 * 基本数据类型
 */
(function() {
    /**
     * String
     * Number
     * Boolean
     * function
     * Object、null、Array
     * undefined
     */
    console.log(typeof String());
    console.log(typeof Number());
    console.log(typeof Boolean());
    console.log(typeof function(){});
    console.log(typeof Object(), typeof Array(), typeof null);
    console.log(typeof undefined);
})();


/**
 * 数组
 */
(function () {
    // 数组遍历
    var arr1 = ['a', 'b', 'c', 'd'];
    arr1.forEach(function (item, index, arr) {
        console.log(index, item);
    });

    // 数组 合并
    var arr2 = ['a', 'b', 'c'].concat([1, 2, 3]);
    console.log(arr2);

    // 数组切片
    var arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("取左(len) = slice(0, len)", arr3.slice(0, 3));
    console.log("取右(len) = slice(-len)", arr3.slice(-3));
    console.log("删左(len) = slice(len)", arr3.slice(3));
    console.log("删右(len) = slice(0, -len)", arr3.slice(0, -3));
    console.log("Mid[L_start, L_end) = slice(L_start, L_end)", arr3.slice(2, 5));
    console.log("Mid[L_start, R_end] = slice(L_start, -R_end)", arr3.slice(2, -2));

    // 数组剪切
    var arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var tmp = arr4.splice(3, 2);
    console.log(arr4, tmp);

    // 集合操作
    Array.prototype.union = function (arr) /*并集*/
        { var __this__=this;return __this__.concat(arr.filter(function(v){return __this__.indexOf(v)===-1}));};
    Array.prototype.intersection = function (arr)  /*交集*/
        { var __this__=this;return arr.filter(function(v){return __this__.indexOf(v)>-1});};
    Array.prototype.difference = function (arr) /*差集*/
        { var __this__=this;return arr.filter(function(v){return __this__.indexOf(v)===-1});};
    var set1 = [1, 2, 3];
    var set2 = [3, 2, 5];
    console.log( set1.union(set2) );
    console.log( set2.union(set1) );
    console.log( set1.intersection(set2) );
    console.log( set2.intersection(set1) );
    console.log( set1.difference(set2) );
    console.log( set2.difference(set1) );
})();