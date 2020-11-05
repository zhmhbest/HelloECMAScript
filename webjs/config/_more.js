module.exports = (mode, operations) => {
    // 【Babel】
    operations.addLocalConfig(
        '.babelrc',
        {
            presets: [
                ['@babel/preset-env', {targets: {ie: '8'}}]
                // ['@babel/preset-env', {targets: {edge: "17", firefox: "60", chrome: "67", safari: "11.1"}}]
                // ['@babel/preset-env', {targets: '> 1%, not dead'}]
                // ['@babel/preset-env', {targets: '> 80%, not dead'}]
            ],
            plugins: [
                ['@babel/plugin-proposal-object-rest-spread', {}],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: true}],
                // ['@babel/plugin-transform-runtime', {corejs: false}]
            ]
        }
    );
    // 【js】
    const jsMatcher = operations.addMatcher(
        /\.js$/,
        /src/,
        /node_modules/
    );
    jsMatcher('babel-loader');

    // 【tsconfig】
    // https://www.typescriptlang.org/tsconfig
    operations.addLocalConfig(
        'tsconfig.json',
        {
            compilerOptions: {
                allowJs: false,                 // 允许在TS中导入JS模块
                // checkJs: true,               // 报告导入JS中的错误
                skipLibCheck: false,            // 跳过声明文件的类型检查

                strict: true,                   // 启用广泛的类型检查行为
                noImplicitAny: true,            // 存在any类型的参数时报错
                noImplicitThis: true,           // 存在不明确的this时报错
                strictFunctionTypes: true,      // 严格的函数指针检查

                removeComments: false,          // 移除注释
                preserveConstEnums: true,       // 保留 const enums
                sourceMap: true,
                target: "ES2015",               // ES5 ES2015
                module: "CommonJS",
            }
        }
    );
    // 【ts】
    const tsMatcher = operations.addMatcher(
        /\.ts$/,
        /src/,
        /node_modules/
    );
    tsMatcher('babel-loader');  // 再经过babel处理
    tsMatcher('ts-loader');     // 先经过ts处理（后加先处理）
};