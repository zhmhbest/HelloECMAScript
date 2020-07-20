

/**
 * 添加尺寸调整响应
 * @param {function(UIEvent, Number, Number)} fn
 */
pushScreenOnresize = function (fn) {
    if (undefined === window.onresize || null === window.onresize) {
        window.onresize = function (ev) {
            fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
        };
    } else {
        /** @type {function(UIEvent)} */
        let loaded = window.onresize;
        window.onresize = function (ev) {
            loaded(ev);
            fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
        };
    }
    // 第一次 激活
    fn(null, document.documentElement.clientWidth, document.documentElement.clientHeight);
};
