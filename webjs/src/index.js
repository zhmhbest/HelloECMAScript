require("@babel/polyfill");  // 解决Promise

module.exports = {
    hash: require("./lib/hash.ts"),
    screen: require("./lib/screen.ts"),
    form: require("./lib/form.ts"),
    ajax: require("./lib/ajax.ts"),
    cookie: require("./lib/cookie"),
    file: require("./lib/file"),
    date: require("./lib/date"),
};