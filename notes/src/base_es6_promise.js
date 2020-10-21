/*
 * Promise
 */

function doSomething(ok) {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve("Success!");
        } else {
            reject("Error!");
        }
    });
}

doSomething(true).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

doSomething(false).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});