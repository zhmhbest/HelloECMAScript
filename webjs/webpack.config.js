const path = require('path');
const root = path.resolve('.');

module.exports = function (argv) {
    const isDev = parseInt(argv['dev']);
    return {
        mode: isDev ? 'development' : 'production',
        // 入口JS文件（可以使用相对路径）
        entry: {index: "./src/index.js"},
        // 编译后输出位置
        output: {
            path: path.resolve(root, "dist"),
            // [name]@[hash].dev.js
            filename: isDev ? "[name].dev.js" : "[name].js"
        }
    };
};