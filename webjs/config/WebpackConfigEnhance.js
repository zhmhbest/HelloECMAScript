const fs = require('fs');
const path = require('path');
const root = path.resolve('.');

class WebpackConfigEnhance {
    /**
     * @param {string} path
     * @returns {boolean}
     */
    isNotReadEnable(path) {
        try {
            fs.accessSync(path, fs.constants.R_OK);
            return false
        } catch (e) {
            return true
        }
    }

    /**
     * @param filename
     * @param options
     * @param {boolean} [force]
     */
    addLocalConfig(filename, options, force) {
        const fullFileName = path.join(root, filename);
        if (force || this.isNotReadEnable(fullFileName)) {
            fs.writeFileSync(
                fullFileName,
                JSON.stringify(options, undefined, '    '
                )
            );
        }
    }

    constructor() {
        this._options = {
            resolve: {},
            plugins: [],
            optimization: {
                minimize: false,
                minimizer: undefined
            },
            module: {rules: []}
        };
        this._matchers = new Map();
    }
    addOptions(options) {
        this._options = {...this._options, ...options};
    };
    getOptions() {
        return this._options;
    }

    /**
     *
     * @param pathname
     * @param filename
     * @param [others]
     */
    addOutput(pathname, filename, others) {
        if (undefined === this._options.output)
            this._options.output = {};
        this._options.output.path = path.resolve(root, pathname);
        this._options.output.filename = filename;
        if (undefined !== others)
            this._options.output = {...this._options.output, ...others};
    }

    /**
     * @param {boolean} minimize
     */
    setMinimize(minimize) {
        this._options.optimization.minimize = minimize;
    }

    addPlugin(plugin) {
        this._options.plugins.push(plugin)
    }

    addMinimizer(minimizer) {
        if (undefined === this._options.optimization.minimizer)
            this._options.optimization.minimizer = [];
        this._options.optimization.minimizer.push(minimizer);
    }

    /**
     *
     * @param test
     * @param include
     * @param exclude
     * @returns {function(name, options)}
     */
    addMatcher(test, include, exclude) {
        const key = test.toString();
        if (this._matchers.has(key)) {
            return this._matchers.get(key);
        } else {
            const use = [];
            let rule = {test: test, use: use};
            if (undefined !== include) rule.include = include;
            if (undefined !== exclude) rule.exclude = exclude;
            this._options.module.rules.push(rule);
            const addLoader = (name, options) => {
                let obj = {loader: name};
                if (undefined !== options) obj.options = options;
                use.push(obj);
            };
            this._matchers.set(key, addLoader);
            return addLoader;
        }
    }
}


module.exports = WebpackConfigEnhance;