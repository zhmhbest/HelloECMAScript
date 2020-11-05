// require("@babel/polyfill");  // 兼容低版本浏览器Promise

module.exports = {
    hash: require("./lib/hash.ts"),
    screen: require("./lib/screen.ts"),
    form: require("./lib/form.ts"),
    ajax: require("./lib/ajax.ts"),
    cookie: require("./lib/cookie"),
    file: require("./lib/file"),
    date: require("./lib/date"),
};