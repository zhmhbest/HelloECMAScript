require("@babel/polyfill");  // 解决Promise

module.exports = {
    hash: require("./lib/hash.ts"),
    screen: require("./lib/screen.ts"),

    cookie: require("./lib/cookie"),
    ajax: require("./lib/ajax"),
    file: require("./lib/file"),
    form: require("./lib/form"),
    date: require("./lib/date"),
};