require("@babel/polyfill");  // 解决Promise

module.exports = {
    hash: require("./lib/hash"),
    screen: require("./lib/screen"),
    cookie: require("./lib/cookie"),
    ajax: require("./lib/ajax"),
    file: require("./lib/file"),
    form: require("./lib/form"),
    date: require("./lib/date"),
    ts: require("./lib/ts.ts")
};