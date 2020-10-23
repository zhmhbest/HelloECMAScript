const fs = require('fs');
const path = require('path');
const root = path.resolve('.');

module.exports = function (argv) {
    const mode = parseInt(argv['prod']); // 0 1 2
    // console.log(mode);
    const configBase = {
        devtool: 'source-map',
        mode: mode ? 'production' : 'development',
        entry: {index: "./src/index.js"},  // 入口JS文件
        output: { // 编译后输出位置
            library: 'zhmh',
            libraryTarget: 'var',
            // libraryExport: [],
            path: path.resolve(root, "dist"),
            filename: (() => {
                switch (mode) {
                    case 0:
                        return "[name].dev.js";
                    case 1:
                        return "[name].js";
                    case 2:
                        return "[name].min.js";
                }
            })()
        }
    };
    let configEnhance = {
        resolve: {},
        plugins: [],
        optimization: {minimize: 2 === mode, minimizer: undefined},
        module: {rules: []}
    };
    const addLocalConfig = (filename, options) => fs.writeFileSync(path.join(root, filename), JSON.stringify(options, undefined, '    '));
    const addPlugin = plugin => configEnhance.plugins.push(plugin);
    const addMinimizer = opt => {
        if (undefined === configEnhance.optimization.minimizer)
            configEnhance.optimization.minimizer = [];
        configEnhance.optimization.minimizer.push(opt);
    };
    const getLoaderMatcher = (test, include, exclude) => {
        const use = [];
        let rule = {test};
        if (undefined !== include) rule.include = include;
        if (undefined !== exclude) rule.exclude = exclude;
        rule.use = use;
        configEnhance.module.rules.push(rule);
        return (name, options) => {
            let obj = {loader: name};
            if (undefined !== options) obj.options = options;
            use.push(obj);
        };
    };
    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■
    // 【Babel】
    addLocalConfig(
        '.babelrc',
        {
            presets: [
                // targets: {edge: "17", firefox: "60", chrome: "67", safari: "11.1"}
                ['@babel/preset-env', {targets: "> 1%, not dead"}]
            ],
            plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                ['@babel/plugin-proposal-decorators', {"legacy": true}],
                ['@babel/plugin-proposal-class-properties', {"loose": true}]
            ]
        }
    );
    getLoaderMatcher(/\.js$/, /src/, /node_modules/)('babel-loader');
    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■
    // console.log(configEnhance);
    return {...configBase, ...configEnhance};
};