/**
 * String
 */

console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Multiline】");
{
    let str1 =  `Hey,
can you stop angry now?`;
    console.log(str1);
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Format】");
{
    function getName() {
        return "Oliver";
    }
    let age = 12;
    console.log(`My Name is ${getName()}, I am ${age+1} years old next year.`);
}