/**
 * Object->String
 * @param {Object} obj
 * @param {String} [sep]
 * @param {String} [eqs]
 * @returns {string}
 */
function toGetString(obj, sep, eqs) {
    sep = sep || '&';
    eqs = eqs || '=';
    let buffer = [];
    for (let key of Object.keys(obj)) {
        buffer.push([
            key.toString(),
            encodeURIComponent(obj[key].toString())
        ].join(eqs));
    }
    return buffer.join(sep);
}

/**
 * String->Dict
 * @param {String} str
 * @param {String} [sep]
 * @param {String} [eqs]
 * @returns {Object}
 */
function parseGetString(str, sep, eqs) {
    let buffer = Object();
    str = str.trim();
    if (0 === str.length) return buffer;
    sep = sep || '&';
    eqs = eqs || '=';
    let items = str.split(sep);
    for (let item of items) {
        let kv = item.split(eqs);
        buffer[kv[0]] = decodeURIComponent(kv[1]);
    }
    return buffer;
}

/**
 * Hash改变捕获
 * @param {function(HashChangeEvent, String)} fn
 */
function pushOnHashChange(fn) {
    if (undefined === window.onhashchange || null === window.onhashchange) {
        window.onhashchange = function (ev) {
            fn(ev, window.location.hash.substr(1));
        }
    } else {
        let preChangeEvent = window.onhashchange;
        window.onhashchange = function (ev) {
            preChangeEvent(ev);
            fn(ev, window.location.hash.substr(1));
        };
    }
}

module.exports = {
    toGetString,
    parseGetString,
    pushOnHashChange
};