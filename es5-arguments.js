
function f() {
    console.log(typeof arguments);
    console.log(arguments.length, arguments)
}


f(1);
f(1, 2);
f(1, 2, 3);
f(1, 2, 3, 4);
