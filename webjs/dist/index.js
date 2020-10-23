var zhmh;zhmh =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// <script src="https://zhmhbest.github.io/HelloECMAScript/webjs/dist/index.js"></script>
module.exports = {
  hash: __webpack_require__(698),
  screen: __webpack_require__(603),
  cookie: __webpack_require__(961),
  ajax: __webpack_require__(147),
  file: __webpack_require__(15),
  form: __webpack_require__(622)
};

/***/ }),

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hash = __webpack_require__(698); // console.log(0, XMLHttpRequest.UNSENT);
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


var requestBase = function requestBase(method, url, body, preProcess, callback) {
  var request = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");

  request.onreadystatechange = function () {
    callback(request, this);
  };

  request.open(method, url);
  if (undefined !== preProcess) preProcess(request);
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


var requestCommon = function requestCommon(method, url, body, header) {
  return new Promise(function (resolve, reject) {
    // <Promise>
    requestBase(method, url, body, function (req) {
      if (undefined === header) return;

      for (var _i = 0, _Object$keys = Object.keys(header); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        req.setRequestHeader(key, header[key]);
      }
    }, function (req, res) {
      if (XMLHttpRequest.DONE === req.readyState) {
        if (req.status >= 200 && req.status < 300 || 304 === req.status
        /* ReadCache */
        ) {
            resolve(res.response);
          } else {
          reject(new Error(res.statusText));
        }
      }
    }); // </Promise>
  });
};
/**
 * Get
 * @param {String} url
 * @param {Object} [data]
 * @param {Object} [header]
 * @returns {Promise<unknown>}
 */


var requestGet = function requestGet(url, data, header) {
  if (undefined !== data && null !== data) {
    url = url + "?" + hash.toGetString(data);
  }

  return requestCommon("GET", url, null, header);
};
/**
 * Post
 * @param {String} url
 * @param {Object|FormData} [data]
 * @param {Object} [header]
 * @returns {Promise<unknown>}
 */


var requestPost = function requestPost(url, data, header) {
  var form = null;

  if (undefined !== data && null !== data) {
    if (data instanceof FormData) {
      form = data;
    } else {
      form = new FormData();

      for (var _i2 = 0, _Object$keys2 = Object.keys(data); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        form.append(key, data[key]);
      }
    }
  }

  return requestCommon("POST", url, form, header);
};

var Requester = /*#__PURE__*/function () {
  /**
   *
   * @param {String} [prefixUrl]
   * @param {Object} [defaultData]
   * @param {Object} [defaultHeader]
   */
  function Requester(prefixUrl, defaultData, defaultHeader) {
    _classCallCheck(this, Requester);

    this.prefix = undefined === prefixUrl || null === prefixUrl ? "" : prefixUrl;
    this.data = undefined === defaultData || null === defaultData ? {} : defaultData;
    this.header = undefined === defaultHeader || null === defaultHeader ? {} : defaultHeader;
  }
  /**
   * @param {String} url
   * @param {Object} [data]
   * @param {Object} [header]
   * @returns {Promise<unknown>}
   */


  _createClass(Requester, [{
    key: "post",
    value: function post(url, data, header) {
      data = data || {};
      header = header || {};
      return requestPost(this.prefix + url, _objectSpread(_objectSpread({}, this.data), data), _objectSpread(_objectSpread({}, this.header), header));
    }
    /**
     * @param {String} url
     * @param {Object} [data]
     * @param {Object} [header]
     * @returns {Promise<unknown>}
     */

  }, {
    key: "get",
    value: function get(url, data, header) {
      data = data || {};
      header = header || {};
      return requestGet(this.prefix + url, _objectSpread(_objectSpread({}, this.data), data), _objectSpread(_objectSpread({}, this.header), header));
    }
  }]);

  return Requester;
}();

module.exports = {
  get: requestGet,
  post: requestPost,
  Requester: Requester
};

/***/ }),

/***/ 961:
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 获取到期时间
 * @param {Date|String|Number} [expire]
 */
function getExpireTime(expire) {
  // Date: 传入值——到期时间（Date）
  if (expire instanceof Date) {
    return expire;
  } // String: 传入值——到期时间（String）


  if ('string' === typeof expire) {
    return new Date(expire);
  } // Number: 传入值——有效时间（秒）


  if ('number' === typeof expire) {
    var date = new Date();
    date.setTime(date.getTime() + expire * 1000);
    return date;
  } // Undefined


  return undefined;
}
/**
 * 设置Cookie
 * @param {String} name
 * @param {String|Number|Object} value
 * @param {Date|String|Number} [expire]
 * @param [path]
 */


function setCookie(name, value, expire, path) {
  expire = getExpireTime(expire);
  var buffer = []; // K-V

  buffer.push(name.trim());
  buffer.push('=');

  if (value instanceof Object) {
    buffer.push(encodeURIComponent(JSON.stringify(value)));
  } else {
    buffer.push(encodeURIComponent(value));
  } // expire


  if (undefined !== expire) {
    buffer.push(';expires=');
    buffer.push(expire.toUTCString());
  } // path


  if (undefined !== path) {
    buffer.push(';path=');
    buffer.push(path);
  }

  document.cookie = buffer.join('');
}
/**
 * 删除Cookie
 * @param name
 * @param [path]
 */


function delCookie(name, path) {
  var buffer = []; // K-V

  buffer.push(name.trim());
  buffer.push('='); // expires

  buffer.push(';expires=');
  buffer.push(new Date().toUTCString()); // path

  if (undefined !== path) {
    buffer.push(';path=');
    buffer.push(path);
  }

  document.cookie = buffer.join('');
}

var cacheCookies = undefined;
/**
 * 加载Cookie
 */

function loadCookies() {
  cacheCookies = Object();
  var cookies = document.cookie.split(';');

  var _iterator = _createForOfIteratorHelper(cookies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item = item.trim();
      var p = item.indexOf('=');
      var key = item.substr(0, p).trim();
      var val = item.substr(p + 1).trim();
      cacheCookies[key] = decodeURIComponent(val);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * 获得Cookie
 * @param name
 * @param [parse] JSON解析
 * @param [reload] 刷新缓存
 */


function getCookie(name, parse, reload) {
  if (undefined === cacheCookies || true === reload) loadCookies();

  if (true === parse) {
    return JSON.parse(cacheCookies[name]);
  } else {
    return cacheCookies[name];
  }
}

module.exports = {
  get: getCookie,
  set: setCookie,
  del: delCookie
};

/***/ }),

/***/ 15:
/***/ ((module) => {

var fileLoader = function () {
  /** @type {function(FileList)} */
  var callback = null;
  var input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.addEventListener('change', function () {
    if (undefined !== callback) callback(input.files);
  });
  return function (cb) {
    if (undefined !== cb) callback = cb;
    input.value = null; // 解决选择相同文件问题

    input.click();
  };
}();
/**
 * @param {Blob} obj
 * @returns {String}
 */


var createBlobURL = function createBlobURL(obj) {
  return window.URL.createObjectURL(obj);
};
/**
 * @param {File} f
 * @param {function(String)} callback
 */


var readFileText = function readFileText(f, callback) {
  var reader = new FileReader();
  reader.readAsText(f);

  reader.onload = function () {
    callback(this.result);
  };
};
/**
 * @param {File} f
 * @param {function(String)} callback
 */


var readFileBase64 = function readFileBase64(f, callback) {
  var reader = new FileReader();
  reader.readAsDataURL(f);

  reader.onload = function () {
    callback(this.result);
  };
};
/**
 * @param {File} f
 * @param {function(ArrayBuffer)} callback
 */


var readFileBinary = function readFileBinary(f, callback) {
  var reader = new FileReader();
  reader.readAsBinaryString(f);

  reader.onload = function () {
    callback(this.result);
  };
};

module.exports = {
  loader: fileLoader,
  createBlobURL: createBlobURL,
  readFileText: readFileText,
  readFileBase64: readFileBase64,
  readFileBinary: readFileBinary
};

/***/ }),

/***/ 622:
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 * @param objForm
 * @returns {{}|null}
 */
var formSeries = function formSeries(objForm) {
  if ('FORM' !== objForm.tagName.toUpperCase()) return null;
  var elements = objForm.elements;
  var buff = {};

  for (var i = 0; i < elements.length; i++) {
    var field = elements[i];

    switch (field.type) {
      case 'radio':
        if (!field.checked) break;
        buff[field.name] = field.value;
        break;

      case 'checkbox':
        if (undefined === buff[field.name]) buff[field.name] = [];
        if (field.checked) buff[field.name].push(field.value);
        break;

      case 'select-one':
      case 'text':
      case 'textarea':
      case 'number':
      case 'email':
      case 'date':
        buff[field.name] = field.value;
        break;
    }
  }

  return buff;
};
/**
 *
 * @param objForm
 * @param {Object} data
 */


var formSetValues = function formSetValues(objForm, data) {
  // const assemblies = objForm.querySelectorAll(`input,select,textarea`);
  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    var value = data[name];
    var elements = objForm.querySelectorAll("input[name='".concat(name, "'],select[name='").concat(name, "'],textarea[name='").concat(name, "']"));
    if (0 === elements.length) continue; // console.log("elements", name, elements[0].type, elements);

    switch (elements[0].type) {
      case 'radio':
        var _iterator = _createForOfIteratorHelper(elements),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.checked = value == item.value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        break;

      case 'checkbox':
        var _iterator2 = _createForOfIteratorHelper(elements),
            _step2;

        try {
          var _loop = function _loop() {
            var item = _step2.value;
            item.checked = value.some(function (x) {
              return x == item.value;
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        break;

      default:
        elements[0].value = value;
        break;
    }
  }
};

module.exports = {
  series: formSeries,
  values: formSetValues
};

/***/ }),

/***/ 698:
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  var buffer = [];

  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    buffer.push([key.toString(), encodeURIComponent(obj[key].toString())].join(eqs));
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
  var buffer = Object();
  str = str.trim();
  if (0 === str.length) return buffer;
  sep = sep || '&';
  eqs = eqs || '=';
  var items = str.split(sep);

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var kv = item.split(eqs);
      buffer[kv[0]] = decodeURIComponent(kv[1]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
    };
  } else {
    var preChangeEvent = window.onhashchange;

    window.onhashchange = function (ev) {
      preChangeEvent(ev);
      fn(ev, window.location.hash.substr(1));
    };
  }
}

module.exports = {
  toGetString: toGetString,
  parseGetString: parseGetString,
  pushOnHashChange: pushOnHashChange
};

/***/ }),

/***/ 603:
/***/ ((module) => {

/**
 * 添加尺寸调整响应
 * @param {function(UIEvent, Number, Number)} fn
 */
pushOnScreenResize = function pushOnScreenResize(fn) {
  if (undefined === window.onresize || null === window.onresize) {
    window.onresize = function (ev) {
      fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
    };
  } else {
    var preChangeEvent = window.onresize;

    window.onresize = function (ev) {
      preChangeEvent(ev);
      fn(ev, document.documentElement.clientWidth, document.documentElement.clientHeight);
    };
  } // Active


  fn(null, document.documentElement.clientWidth, document.documentElement.clientHeight);
};

module.exports = {
  pushOnScreenResize: pushOnScreenResize
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(579);
/******/ })()
;
//# sourceMappingURL=index.js.map