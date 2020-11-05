// @ts-ignore
import hash = require("./hash.ts");


const requestBase = (
    method: string,
    url: string,
    body: BodyInit | null,
    readyCallback: (readyState: number, request: XMLHttpRequest) => any
) => {
    const request: XMLHttpRequest = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    request.onreadystatechange = function (ev: Event) {
        /*readyState
            0 === XMLHttpRequest.UNSENT
            1 === XMLHttpRequest.OPENED
            2 === XMLHttpRequest.HEADERS_RECEIVED
            3 === XMLHttpRequest.LOADING
            4 === XMLHttpRequest.DONE
        */
        readyCallback(this.readyState, this)
    };
    request.open(method, url);
    request.send(body);
};


const requestCommon = (
    method: string,
    url: string,
    type: XMLHttpRequestResponseType,
    body: BodyInit | null,
    headers: object | null
): Promise<any> => {
    return new Promise((resolve: any, reject) => {
        // <Promise>
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        requestBase(method, url, body, (readyState, request) => {
            switch (readyState) {
                case XMLHttpRequest.OPENED:
                    // 设置接受值
                    request.responseType = type || 'text';
                    // 设置请求头
                    if (undefined===headers || null===headers) return;
                    for (let key of Object.keys(headers))
                        // @ts-ignore
                        request.setRequestHeader(key, headers[key]);
                        break;
                case XMLHttpRequest.DONE:
                    if (request.status >= 200 && request.status < 300 || 304 === request.status /* ReadCache */ ) {
                        // request.response
                        // request.getAllResponseHeaders()
                        resolve(request.response);
                    } else {
                        reject(new Error(request.statusText));
                    }
                    break;
            }
        });
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
        // </Promise>
    });
};


const get = (
    url: string,
    type: XMLHttpRequestResponseType,
    data: object,
    headers: object
) => {
    if (undefined !== data && null !== data) {
        url = `${url}?${hash.toGetString(data)}`;
    }
    return requestCommon("GET", url, type, null, headers);
};


const post = (
    url: string,
    type: XMLHttpRequestResponseType,
    data: object | FormData,
    headers: object
) => {
    let form = null;
    if (undefined !== data && null !== data) {
        if (data instanceof FormData) {
            form = data;
        } else {
            form = new FormData();
            for (let key of Object.keys(data)) {
                // @ts-ignore
                form.append(key, data[key]);
            }
        }
    }
    return requestCommon("POST", url, type, form, headers);
};


class Requester {
    get prefix(): string {
        return this._prefix;
    }
    set prefix(value: string) {
        this._prefix = value;
    }
    get data(): object {
        return this._data;
    }
    set data(value: object) {
        this._data = value;
    }
    get headers(): object {
        return this._headers;
    }
    set headers(value: object) {
        this._headers = value;
    }
    private _prefix: string;
    private _data: object;
    private _headers: object;
    constructor(prefix: string, data: object, headers: object) {
        this._prefix = (undefined===prefix || null===prefix) ? "" : prefix;
        this._data = (undefined===data || null===data) ? {} : data;
        this._headers = (undefined===headers || null===headers) ? {} : headers;
    }

    get(url: string, type: XMLHttpRequestResponseType, data: object, headers: object) {
        data = data || {};
        headers = headers || {};
        return get(
            this._prefix + url,
            type,
            {...this._data, ...data},
            {...this._headers, ...headers}
        );
    }
    post(url: string, type: XMLHttpRequestResponseType, data: object, headers: object) {
        data = data || {};
        headers = headers || {};
        return post(
            this._prefix + url,
            type,
            {...this._data, ...data},
            {...this._headers, ...headers}
        );
    }

    getJson(url: string, data: object, headers: object) {
        return get(url, "json", data, headers);
    }
    postJson(url: string, data: object, headers: object) {
        return post(url, "json", data, headers);
    }
    getBlob(url: string, data: object, headers: object) {
        return get(url, "blob", data, headers);
    }
    postBlob(url: string, data: object, headers: object) {
        return post(url, "blob", data, headers);
    }
}


export {
    get,
    post,
    Requester
};
