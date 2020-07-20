
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
/**
 * this是上下文环境
 * 如果上下文没有明显的对象，this指代window
 */
(function () {
    function WhatIsThis(word1, word2) {
        console.log(this.name, word1, word2)
    }

    let obj1 = {
        name: "obj1",
        say: WhatIsThis,
    };

    let obj2 = Object();
    obj2.name = "obj2";
    obj2.say = WhatIsThis;

    obj1.say('小瞎子', '');
    obj2.say('小鸵鸟', '');

    // 通过call或apply方法，可以手动指定this
    // call  this后接 形参
    // apply this后接 arguments
    WhatIsThis.call(obj1, 'call', '2nd');
    WhatIsThis.apply(obj2, ['apply', '2nd']);
})();


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
/**
 * 工厂方式创建对象
 */
(function () {
    /**
     * 方式1
     */
    function newFactory1(name) {
        return {
            name: name,
            sayName: function () {
                console.log(this.name);
            }
        }
    }
    newFactory1('张3').sayName();
    newFactory1('李4').sayName();


    /**
     * 方式2
     */
    function newFactory2(name) {
        var obj = {};
        obj.name = name;
        obj.sayName = function () {
            console.log(this.name);
        };
        return obj
    }
    newFactory2('王5', 1).sayName();
    newFactory2('赵6', 1).sayName();


    /**
     * 方式3
     */
    function Factory1(name) {
        this.name = name;
        this.sayName = function () {
            console.log(this.name);
        };
        return this
    }
    var obj1 = new Factory1('钱7');
    var obj2 = new Factory1('宋8');
    console.log(obj1); obj1.sayName();
    console.log(obj2); obj2.sayName();
    console.log(obj1.sayName === obj2.sayName);


    /**
     * 方式4
     */
    var Factory2 = (function () {
        function sayName() {
            console.log(this.name);
        }
        return function(name) {
            this.name = name;
            this.sayName = sayName;
            return this
        }
    })();

    var obj3 = new Factory2('钱9');
    var obj4 = new Factory2('宋A');
    console.log(obj3); obj3.sayName();
    console.log(obj4); obj4.sayName();
    console.log(obj3.sayName === obj4.sayName);
})();


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
/**
 * 原型对象
 */
(function () {
    function ClassCreator(name) { this.name = name; }
    ClassCreator.prototype.sayName = function () {
        console.log(this.name);
    };

    var obj1 = new ClassCreator("张3");
    var obj2 = new ClassCreator("李4");
    obj1.sayName();
    obj2.sayName();

    // __proto__: 对象原型的prototype
    // prototype: 当前对象的prototype
    console.log("obj1 is obj2", obj1 === obj2);
    console.log("obj1.proto is obj2.proto", obj1.__proto__ === obj2.__proto__);
    console.log("obj1.proto is ClassCreator.prototype", obj1.__proto__ === ClassCreator.prototype);

    console.log("sayName in obj1", 'sayName' in obj1);
    console.log("obj1 hasOwnProperty sayName", obj1.hasOwnProperty('sayName'));
})();