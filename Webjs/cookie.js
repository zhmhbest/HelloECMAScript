

let cookie = (function() {
    /**
     * 获取到期时间
     * @param {Date|String|Number} [expire]
     */
    function _getExpire(expire) {
        // Date: 传入值——到期时间（Date）
        if (expire instanceof Date) {
            return expire;
        }
        // String: 传入值——到期时间（String）
        if ('string' === typeof expire) {
            return new Date(expire);
        }
        // Number: 传入值——有效时间（秒）
        if ('number' === typeof expire) {
            let date = new Date();
            date.setTime(date.getTime() + (expire * 1000));
            return date;
        }
        // Undefined
        return undefined;
    }
    let _cacheCookies = undefined;
    function _loadCookies() {
        _cacheCookies = Object();
        let cookies = document.cookie.split(';');
        for (let item of cookies) {
            item = item.trim();
            let p = item.indexOf('=');
            let key = item.substr(0, p).trim();
            let val = item.substr(p + 1).trim();
            _cacheCookies[key] = decodeURIComponent(val);
        }
    }
    return {

        /**
         * 设置Cookie
         * @param {String} name
         * @param {String|Number|Object} value
         * @param {Date|String|Number} [expire]
         * @param [path]
         */
        set: function (name, value, expire, path) {
            expire = _getExpire(expire);
            const buffer = [];
            // K-V
            buffer.push(name.trim()); buffer.push('=');
            if (value instanceof Object) {
                buffer.push(encodeURIComponent(JSON.stringify(value)));
            } else {
                buffer.push(encodeURIComponent(value));
            }
            // expire
            if (undefined !== expire) {
                buffer.push(';expires='); buffer.push(expire.toUTCString());
            }
            // path
            if (undefined !== path) {
                buffer.push(';path='); buffer.push(path);
            }
            document.cookie = buffer.join('');
        },

        /**
         * 删除Cookie
         * @param name
         * @param [path]
         */
        del: function (name, path) {
            const buffer = [];
            // K-V
            buffer.push(name.trim()); buffer.push('=');
            // expires
            buffer.push(';expires='); buffer.push(new Date().toUTCString());
            // path
            if (undefined !== path) {
                buffer.push(';path='); buffer.push(path);
            }
            document.cookie = buffer.join('');
        },

        /**
         * 获得Cookie
         * @param name
         * @param [parse] JSON解析
         * @param [reload] 刷新缓存
         */
        get: function (name, parse, reload) {
            if (undefined === _cacheCookies || true === reload) { _loadCookies(); }
            if (true===parse) {
                return JSON.parse(_cacheCookies[name]);
            } else {
                return _cacheCookies[name];
            }
        }
    }
})();
