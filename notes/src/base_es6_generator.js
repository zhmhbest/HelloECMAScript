/*
 * Generator
 */

/** @return {number} */
function* Generator123() {
    yield 1;
    yield 2;
    return 3;
}

const generators = {
    /** @return {number} */* Generator456() {
        let i;
        for (i = 4; i < 6; i++) yield i;
        return i;
    },
    /** @return {number} */
    Generator789: function* () {
        let i;
        for (i = 7; i < 9; i++) yield i;
        return i;
    }
};

function runGenerator(g) {
    for (; ;) {
        let next = g.next();
        console.log(next.value);
        if (next.done) break;
    }
}

let generator;

generator = Generator123();
runGenerator(generator);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

generator = generators.Generator456();
runGenerator(generator);
console.log("■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■");

generator = generators.Generator789();
runGenerator(generator);