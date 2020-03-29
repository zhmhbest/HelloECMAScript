
console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Abbreviation】"); // 对象简写
{
    // 键值对
    let a = 123;
    console.log({a});
    console.log({a: a});

    // 方法
    let obj = {
        sayGoodbye: function() {
            console.log("Goodbye")
        },
        sayHello() {
            console.log("Hello")
        }
    };
    obj.sayHello();
    obj.sayGoodbye();
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Class】");
{
    class Animal {
        // 静态方法
        static sum(num1, num2) {
            return num1 + num2;
        }
        // 构造函数
        constructor(age) {
            this.m_age = age;
        }
        // setter
        set age(val) {
            this.m_age = val;
        }
        // getter
        get age() {
            return this.m_age;
        }
        // method
        nextYearAge() {
            return Animal.sum(this.m_age, 1);
        }
    }
    console.log(Animal.sum(1, 2));
    const animal = new Animal(12);
    console.log(animal.age);
    console.log(animal.nextYearAge());
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Class Extends】");
{
    class Mammal { // 哺乳动物
        constructor(age, gender) {
            this.m_age = age;
            this.m_gender = gender;
        }
        set age(val) { this.m_age = val; }
        get age() { return this.m_age; }
        set gender(val) { this.m_gender = val; }
        get gender() { return this.m_gender; }
    }
    class Human extends Mammal {
        constructor() {
            super(73, 1);
            this.m_name = 'Trump';
        }
        set name(val) { this.m_name = val; }
        get name() { return this.m_name; }
        printMessage() {
            console.log(this.name, this.gender, this.age)
        }
    }
    const man = new Human();
    man.printMessage();
}