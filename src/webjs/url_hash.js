
/**
 * Dict->String
 * @param {string} separator
 * @param {string} equalSign
 * @returns {string}
 */
Object.prototype.toString = function (separator, equalSign) {
    const buffer = [];
    separator = separator || '&';
    equalSign = equalSign || '=';
    for (let key of Object.keys(this)) {
        buffer.push([
            key.toString(),
            encodeURIComponent(this[key].toString())
        ].join(equalSign));
    }
    return buffer.join(separator);
};


/**
 * String->Dict
 * @param {string} separator
 * @param {string} equalSign
 * @returns {object}
 */
String.prototype.parseArguments = function (separator, equalSign) {
    let buffer = Object();
    let str = this.trim();
    if (0 === str.length) { return buffer; }
    separator = separator || '&';
    equalSign = equalSign || '=';
    let items = str.split(separator);
    for (let item of items) {
        let kv = item.split(equalSign);
        buffer[kv[0]] = decodeURIComponent(kv[1]);
    }
    return buffer;
};


/**
 * Hash改变捕获
 * @param {function(HashChangeEvent, String)} fn
 */
pushOnHashChange = function (fn) {
    if (undefined === window.onhashchange || null === window.onhashchange) {
        window.onhashchange = function (ev) {
            fn(ev, window.location.hash.substr(1));
        }
    } else {
        let loaded = window.onhashchange;
        window.onhashchange = function (ev) {
            loaded(ev);
            fn(ev, window.location.hash.substr(1));
        };
    }
};