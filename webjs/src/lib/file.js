
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
 * @param {Blob} obj
 * @returns {String}
 */
const createBlobURL = (obj) => {
    return window.URL.createObjectURL(obj)
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
    createBlobURL,
    readFileText,
    readFileBase64,
    readFileBinary
};