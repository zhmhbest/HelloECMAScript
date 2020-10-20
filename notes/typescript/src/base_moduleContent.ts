export const PI : number = 3.1415926;

export function sayHello() : void {
    console.log('Hello');
}

export interface Animal {
    getAge() : number;
    setAge(age : number);
}

export abstract class Mammal implements Animal {
    // private readonly LivingPlace: string;
    protected gender: boolean;
    protected age: number;
    public abstract getAge(): number;
    public abstract setAge(age: number);
    public abstract getGender(): boolean;
    public abstract setGender(gender : boolean);
}

export class People extends Mammal {
    protected name: string;
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