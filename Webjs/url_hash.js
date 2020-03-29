/**
 * Dict->String
 */
Object.prototype.toString = function (separator, equal) {
    const buffer = [];
    separator = separator || '&';
    equal = equal || '=';
    for (let key of Object.keys(this)) {
        buffer.push([
            key.toString(),
            encodeURIComponent(this[key].toString())
        ].join(equal));
    }
    return buffer.join(separator);
};


/**
 * String->Dict
 */
String.prototype.parseArguments = function (separator, equal) {
    let buffer = {};
    let str = this.trim();
    if (0 === str.length) { return buffer; }
    separator = separator || '&';
    equal = equal || '=';
    let items = str.split(separator);
    for (let item of items) {
        let kv = item.split(equal);
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