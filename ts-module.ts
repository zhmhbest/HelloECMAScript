//导出内容

//常量
export const PI : number = 3.1415926;

//函数
export function echoHello() : void {
    console.log('Hello');
}

//接口
export interface Animal {
    getAge() : number;
    setAge(age : number);
    getGender() : boolean;
    setGender(gender : boolean);
}

//抽象类
export abstract class BigAnimal implements Animal {
    protected name: string;
    protected gender: boolean;
    protected age: number;
    private LivingPlace: string;
    protected constructor() {
        this.LivingPlace = 'Earth';
    }
    public getLivingPlace() : string { return this.LivingPlace;}

    public abstract getAge(): number;
    public abstract setAge(age: number);
    public abstract getGender(): boolean;
    public abstract setGender(gender : boolean);
    public abstract getName(): string;
    public abstract setName(name : string);
}

//类
export class People extends BigAnimal {
    public constructor(name: string, gender: boolean, age: number) {
        super();
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public getName(): string { return this.name; }
    public setName(name: string) { this.name = name; }
    public getGender(): boolean { return this.gender; }
    public setGender(gender: boolean) { this.gender = gender; }
    public getAge(): number { return this.age; }
    public setAge(age: number) { this.age = age; }

    public say(): void {
        console.log(this.name + ", " + (this.gender?"male":"female") + ", " + this.age);
    }
}