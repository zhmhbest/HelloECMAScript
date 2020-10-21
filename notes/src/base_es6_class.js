/*
 * Class
 */

class Animal {
    // 静态方法
    static sum(num1, num2) {
        return num1 + num2;
    }
    // 构造函数
    constructor(age) {
        this.m_age = age;
    }
    // getter | setter
    get age() { return this.m_age }
    set age(val) { this.m_age = val }
    // method
    nextYearAge() {
        return Animal.sum(this.m_age, 1);
    }
}
class Mammal extends Animal{ // 哺乳动物
    constructor(gender, age) {
        super(age);
        this.m_gender = gender;
    }
    set gender(val) { this.m_gender = val }
    get gender() { return this.m_gender }
}
class Human extends Mammal {
    constructor(name, gender, age) {
        super(gender, age);
        this.m_name = name;
    }
    set name(val) { this.m_name = val }
    get name() { return this.m_name }
    printMessage() {
        console.log(this.name, this.gender, this.age)
    }
}

const man = new Human("Peter", false, 16);
man.printMessage();
console.log(man.nextYearAge());