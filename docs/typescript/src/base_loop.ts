console.log("[0, 5)");
for (let i: number = 0; i < 5; i++) { //0~4
    console.log(i);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("list: index");
for (let index in ['a', 'b', 'c']) {
    console.log(index);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

console.log("list: iterator");
for (let it of ['a', 'b', 'c']) { //迭代
    console.log(it);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

let num: number = 3;
while (num--) {
    console.log("while", num);
}
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

do {
    console.log("do-while", ++num);
} while (num != 2);