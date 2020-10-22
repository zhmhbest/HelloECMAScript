
/**
 * 添加尺寸调整响应
 * @param {function(UIEvent, Number, Number)} fn
 */
pushOnScreenResize = function (fn) {
    if (undefined === window.onresize || null === window.onresize) {
        window.onresize = function (ev) {
            fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
        };
    } else {
        let preChangeEvent = window.onresize;
        window.onresize = function (ev) {
            preChangeEvent(ev);
            fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
        };
    }
    // Active
    fn(null, document.documentElement.clientWidth, document.documentElement.clientHeight);
};

module.exports = {
    pushOnScreenResize
};