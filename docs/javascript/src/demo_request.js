/**
 * @callback onStateChangeCallback
 * @param {number} state
 * @param {XMLHttpRequest} request
 * @param {Event} ev
 * @return {void}
 */
/**
 * @param {string} url
 * @param {string} method
 * @param {BodyInit | null} body
 * @param {onStateChangeCallback} readyCallback
 * @return {void}
 */
 const requestBase = (url, method, body, readyCallback) => {
    const request = new XMLHttpRequest();
    /**
     * @param {XMLHttpRequest} this
     * @param {Event} ev
     */
    request.onreadystatechange = function (ev) {
        /*readyState
            0 === XMLHttpRequest.UNSENT
            1 === XMLHttpRequest.OPENED
            2 === XMLHttpRequest.HEADERS_RECEIVED
            3 === XMLHttpRequest.LOADING
            4 === XMLHttpRequest.DONE
        */
        readyCallback(this.readyState, this, ev);
    };
    request.open(method, url);
    request.send(body);
};
/**
 * @param {string} url
 * @param {string} [method]
 * @param {XMLHttpRequestResponseType} [type]
 * @param {BodyInit | null} [body]
 * @param {object} [headers]
 * @return {Promise<any>}
 */
const requestCommon = (url, method, type, body, headers) => {
    return new Promise((resolve, reject) => {
        requestBase(
            url,
            (undefined === method ? 'GET' : method),
            (undefined === body ? null : body),
            (state, request, ev) => {
                switch (state) {
                    case XMLHttpRequest.OPENED:
                        // 设置接受值
                        request.responseType = type || 'text';
                        // 设置请求头
                        if (undefined !== headers) {
                            for (let key of Object.keys(headers)) {
                                request.setRequestHeader(key, headers[key]);
                            }
                        }
                        break;
                    case XMLHttpRequest.DONE:
                        if (
                            request.status >= 200 && request.status < 300 ||
                            304 === request.status /* ReadCache */
                        ) {
                            resolve({
                                header: request.getAllResponseHeaders().split('\n'),
                                data: request.response
                            });
                        } else {
                            reject(new Error(request.statusText));
                        }
                        break;
                }
            }
        );
    });
};

// // demo
// requestCommon("https://www.baidu.com/").then(res => {
//     console.log(res);
// });