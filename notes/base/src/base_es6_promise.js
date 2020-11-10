
/**
 * doPromise
 * @return {Promise}
 */
function doPromise(ok) {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve("Promise: Success!");
        } else {
            reject("Promise: Error!");
        }
    });
}

doPromise(true).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

doPromise(false).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

// ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■

/**
 * doasync
 * @return {Promise}
 */
async function doasync(ok) {
    if (ok) {
        return "async: Success!";
    } else {
        return "async: Error!";
    }
}

doasync(true).then(res => {
    console.log(res)
});

doasync(false).then(res => {
    console.log(res)
});

// ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■

/*
 * async await
 */

function getPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(num);
        }, 500);
    });
}

(async function() {
    for (let i=0; i<3; i++) {
        let res = await getPromise(i);
        console.log(res );
    }
})();
