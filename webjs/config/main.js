const WebpackConfigEnhance = require('./WebpackConfigEnhance');

module.exports = function (argv) {
    let operations = new WebpackConfigEnhance();
    const mode = parseInt(argv['prod']); // 0:dev 1:normal 2:compress
    require('./_base')(mode, operations);
    require('./_more')(mode, operations);
    console.log(operations.getOptions());
    return operations.getOptions();
};