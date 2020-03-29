/**
 * Promise
 */


function doSomething(is_success, err_text) {
    return new Promise((__success__, __err__) => {
        if (is_success) {
            //Success
            setTimeout(function() {
                __success__('Return Value');
            }, 300);
        } else {
            //Error
            __err__(err_text);
        }
    });
}

doSomething(true).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});

doSomething(false, "错误信息！").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
});