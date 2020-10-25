module.exports = (mode, operations) => {
    // 【Babel】
    operations.addLocalConfig(
        '.babelrc',
        {
            presets: [
                ['@babel/preset-env', {targets: {ie: '8'}}]
                // ['@babel/preset-env', {targets: {edge: "17", firefox: "60", chrome: "67", safari: "11.1"}}]
                // ['@babel/preset-env', {targets: '> 1%, not dead'}]
            ],
            plugins: [
                ['@babel/plugin-proposal-object-rest-spread', {}],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: true}],
                // ['@babel/plugin-transform-runtime', {corejs: false}]
            ]
        }
    );
    const matcher = operations.addMatcher(
        /\.js$/,
        /src/,
        /node_modules/
    );
    matcher('babel-loader')
};