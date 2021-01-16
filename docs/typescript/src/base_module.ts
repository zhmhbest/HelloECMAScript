import theModule = require('./base_moduleContent');
console.log(theModule.PI);
theModule.sayHello();
let obj = new theModule.People("Peter", false, 12);
obj.say();