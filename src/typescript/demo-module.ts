
import theModule = require('./module-content');

console.log(theModule.PI);
console.log(theModule.sayHello());

let obj = new theModule.People("Peter", false, 12);
console.log(obj.getName());
console.log(obj.getLivingPlace());
obj.say();
