/**
 *
 * @param generator
 * @param callback
 */
const generator_iteration = (generator, callback) => {
    for(;;) {
        let next = generator.next();
        callback(next.value);
        if (next.done) {
            break;
        }
    }
};


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Generator】");
{
    function* generator(){
        yield '1';
        yield '2';
        return '3';
    }
    generator_iteration(generator(), it => {
        console.log(it)
    });
}


console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
console.log("【Abbreviation】");
{
    let generator = {
        *generateHello() {
            yield 'Hello1';
            return 'Hello2';
        },
        generateGoodbye: function* () {
            yield 'Goodbye1';
            return 'Goodbye2';
        }
    };
    generator_iteration(generator.generateHello(), it => {console.log(it)});
    generator_iteration(generator.generateGoodbye(), it => {console.log(it)});
}
