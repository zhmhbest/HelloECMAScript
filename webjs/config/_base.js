const packageInfo = require('../package.json');

module.exports = (mode, operations) => {
    operations.setMinimize(1 === mode);
    operations.addOptions({
        devtool: 'source-map',
        mode: mode ? 'production' : 'development',
        entry: {
            index: "./src/index.js"
        }
    });
    operations.addOutput('dist',(() => {
        switch (mode) {
            case 0:
                return `${packageInfo.name}-${packageInfo.version}.dev.js`;
            case 1:
                return `${packageInfo.name}-${packageInfo.version}.min.js`;
        }
    })(), {
        library: 'zhmh',
        libraryTarget: 'var',
        // libraryExport: [],
    });
};