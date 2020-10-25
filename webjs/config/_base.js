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
                return "[name].dev.js";
            case 1:
                return "[name].min.js";
        }
    })(), {
        library: 'zhmh',
        libraryTarget: 'var',
        // libraryExport: [],
    });
};