const hash = require("./hash");
// console.log(0, XMLHttpRequest.UNSENT);
// console.log(1, XMLHttpRequest.OPENED);
// console.log(2, XMLHttpRequest.HEADERS_RECEIVED);
// console.log(3, XMLHttpRequest.LOADING);
// console.log(4, XMLHttpRequest.DONE);
/**
 * request
 * @param {String} method
 * @param {String} url
 * @param {BodyInit} body
 * @param {function(XMLHttpRequest)} preProcess
 * @param {function(XMLHttpRequest, XMLHttpRequest)} callback
 * @returns {void}
 */
const requestBase = (method, url, body, preProcess, callback) => {
    const request = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");
    request.onreadystatechange = function () { callback(request, this) };
    request.open(method, url);
    if (undefined!==preProcess) preProcess(request);
    request.send(body);
};


/**
 * request
 * @param {String} method = GET | POST
 * @param {String} url
 * @param {Object|null} body
 * @param {Object|undefined} header
 * @returns {Promise}
 */
const requestCommon = (method, url, body, header) => {
    return new Promise(function (resolve, reject) {
        // <Promise>
        requestBase(method, url, body, req => {
            if (undefined===header) return;
            for (let key of Object.keys(header))
                req.setRequestHeader(key, header[key]);
        }, (req, res) => {
            if (XMLHttpRequest.DONE === req.readyState) {
                if (req.status >= 200 && req.status < 300 || 304 === req.status /* ReadCache */ ) {
                    resolve(res.response);
                } else {
                    reject(new Error(res.statusText));
                }
            }
        });
        // </Promise>
    });
};


/**
 * Get
 * @param {String} url
 * @param {Object} [data]
 * @param {Object} [header]
 * @returns {Promise<unknown>}
 */
const requestGet = (url, data, header) => {
    if (undefined!==data) {
        url = url + "?" + hash.toGetString(data);
    }
    return requestCommon("GET", url, null, header);
};


/**
 * Post
 * @param {String} url
 * @param {Object} [data]
 * @param {Object} [header]
 * @returns {Promise<unknown>}
 */
const requestPost = (url, data, header) => {
    let form = null;
    if (undefined!==data) {
        form = new FormData();
        for (let key of Object.keys(data)) form.append(key, data[key]);
    }
    return requestCommon("POST", url, form, header);
};


module.exports = {
    get: requestGet,
    post: requestPost
};