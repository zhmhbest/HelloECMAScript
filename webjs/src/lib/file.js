const URL = window.URL || window.webkitURL;

const fileLoader = (() => {
    /** @type {function(FileList)} */
    let callback = null;
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.addEventListener('change', () => {
        if (undefined!==callback) callback(input.files);
    });
    return (cb) => {
        if (undefined!==cb) callback = cb;
        input.value = null; // 解决选择相同文件问题
        input.click();
    }
})();


/**
 * 生成文件下载
 * @param {Blob} blob
 * @param {String} [filename]
 */
const fileDownloadBlob = (blob, filename) => {
    filename = filename || "file@" + new Date().getTime();
    const element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(blob));
    element.setAttribute('download', filename);
    element.click();
    element.remove();
};


/**
 * 生成文件下载
 * @param {String|Object} text
 * @param {String} [filename]
 */
const fileDownloadText = (text, filename) => {
    let blob;
    if (text instanceof Object) {
        blob = new Blob([JSON.stringify(text,undefined, '    ')])
    } else {
        blob = new Blob([text])
    }
    fileDownloadBlob(blob, filename);
};


/**
 * @param {Blob} obj
 * @returns {String}
 */
const createBlobURL = (obj) => {
    return URL.createObjectURL(obj)
};


/**
 * @param {File} f
 * @param {function(String)} callback
 */
const readFileText = (f, callback) => {
    const reader = new FileReader();
    reader.readAsText(f);
    reader.onload = function() { callback(this.result) }
};
/**
 * @param {File} f
 * @param {function(String)} callback
 */
const readFileBase64 = (f, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = function() { callback(this.result) }
};
/**
 * @param {File} f
 * @param {function(ArrayBuffer)} callback
 */
const readFileBinary = (f, callback) => {
    const reader = new FileReader();
    reader.readAsBinaryString(f);
    reader.onload = function() { callback(this.result) }
};


module.exports = {
    loader: fileLoader,
    download: fileDownloadBlob,
    downloadText: fileDownloadText,
    createBlobURL,
    readFileText,
    readFileBase64,
    readFileBinary
};