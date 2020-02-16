
/**
 * 字典数据转换为URL请求字符串
 */
Object.prototype.toURIArgs = function () {
    var __this__ = this;
    var buffer = [];
    Object.keys(__this__).forEach(function(item) {
        buffer.push([item, '=', encodeURIComponent(__this__[item])].join(''));
    });
    return buffer.join('&');
};


/**
 * URL请求字符串转换为字典数据
 */
String.prototype.parseAsArgs = function () {
    var buffer = {};
    var __this__ = this.trim();
    if (0===__this__.length) {return buffer;}
    var items = __this__.split('&');
    items.forEach(function (item) {
        var kv = item.split('=');
        buffer[kv[0]] = decodeURIComponent(kv[1]);
    });
    return buffer;
};


/**
 * 集合操作
 */
/*并集*/ Array.prototype.union = function (arr) {
    var __this__=this;
    return __this__.concat(arr.filter(function(v){return __this__.indexOf(v)===-1}));
};
/*交集*/ Array.prototype.intersection = function (arr) {
    var __this__=this;
    return arr.filter(function(v){return __this__.indexOf(v)>-1});
};
/*差集*/ Array.prototype.difference = function (arr) {
    var __this__=this;
    return arr.filter(function(v){return __this__.indexOf(v)===-1});
};


/**
 * Hash操作器
 * @constructor
 */
var HashHolder = (function () {
    function apply() {
        this.hash = this.dict.toURIArgs();
        window.location.hash = this.hash;
    }
    function load(hash_string) {
        this.hash = hash_string || window.location.hash.substr(1);
        this.dict = this.hash.parseAsArgs();
    }
    function toString() {
        return this.hash;
    }
    return function() {
        /**
         * 将修改dict的数据应用到全局
         */
        this.apply = apply;
        this.load = load;
        this.toString = toString;
    }
})();


var zhmh_api = (function () {
    var __this__ = Object();
    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■
    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■


    /**
     * 设置Cookie
     * @param {String} name
     * @param {String|Number|Object} value
     * @param {Date|String|Number} [expire]
     * @param [path]
     */
    __this__.cookie_set = function(name, value, expire, path) {
        // 检查有效期值
        expire = (function () {
            var tmp;
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
                tmp = new Date();
                tmp.setTime(tmp.getTime() + (expire * 1000));
                return tmp;
            }
            // Undefined
            return undefined;
        })();

        var buffer = [];
        buffer.push(name.trim());
        buffer.push('=');
        if (value instanceof Object) {
            buffer.push(encodeURIComponent(JSON.stringify(value)));
        } else {
            buffer.push(encodeURIComponent(value));
        }
        if (undefined !== expire) {
            buffer.push(';expires=');
            buffer.push(expire.toUTCString());
        }
        if (undefined !== path) {
            buffer.push(';path=');
            buffer.push(path);
        }
        console.log(buffer.join(''));
        document.cookie = buffer.join('');
    };


    /**
     * 删除Cookie
     * @param name
     * @param [path]
     */
    __this__.cookie_del = function (name, path) {
        var expire = new Date(); // 当前时间
        var buffer = [];
        buffer.push(name.trim());
        buffer.push('=');
        //
        buffer.push(';expires=');
        buffer.push(expire.toUTCString());
        //
        if (undefined !== path) {
            buffer.push(';path=');
            buffer.push(path);
        }
        document.cookie = buffer.join('');
    };


    var private_cache_cookies;
    /**
     * 获得Cookie
     * @param name
     * @param [parse] JSON解析
     * @param [reload] 刷新缓存
     */
    __this__.cookie_get = function (name, parse, reload) {
        if (undefined === private_cache_cookies || true === reload) {
            // console.log('Cookie ReSplit');
            private_cache_cookies = Object();
            var cookies = document.cookie.split(";");
            cookies.forEach(function (value) {
                value = value.trim();
                var p = value.indexOf('=');
                var key = value.substr(0, p).trim();
                var val = value.substr(p + 1).trim();
                private_cache_cookies[key] = decodeURIComponent(val);
            });
        }
        if (true===parse) {
            return JSON.parse(private_cache_cookies[name]);
        } else {
            return private_cache_cookies[name];
        }
    };


    /**
     * 添加尺寸调整响应
     * @param {function(UIEvent, Number, Number)} fn = function(ev, width, height)
     */
    __this__.screen_onresize = function (fn) {
        if (undefined === window.onresize || null === window.onresize) {
            window.onresize = function (ev) {
                fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
            };
        } else {
            var fn_loaded = window.onresize;
            window.onresize = function (ev) {
                fn_loaded(ev);
                fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
            };
        }
        // 激活第一次
        fn(null, document.documentElement.clientWidth, document.documentElement.clientHeight);
    };


    /**
     * Hash改变捕获
     * @param {function(HashChangeEvent, HashHolder)} fn
     */
    __this__.hash_onchange = function (fn) {
        var hash = new HashHolder();
        if (undefined === window.onhashchange || null === window.onhashchange) {
            window.onhashchange = function (ev) {
                hash.load();
                fn(ev, hash);
            }
        } else {
            var fn_loaded = window.onhashchange;
            window.onhashchange = function (ev) {
                fn_loaded(ev);
                hash.load();
                fn(ev, hash);
            };
        }
    };


    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■
    // ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■
    return __this__;
})();