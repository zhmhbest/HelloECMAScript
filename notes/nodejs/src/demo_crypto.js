// npm -g i crypto-js
const CryptoJS = require('crypto-js');

// MD5
console.log(CryptoJS.MD5("123").toString());
// 202cb962ac59075b964b07152d234b70

// SHA256
console.log(CryptoJS.SHA256("123").toString());
// a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3

// SHA512
console.log(CryptoJS.SHA512("123").toString());
// 3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2

// AES
class SimplyAES {
    /**
     * @param {string} key   16Bytes 密钥
     * @param {string} [iv]  16Bytes 偏移
     */
    constructor(key, iv) {
        const zeros = '00000000000000000000000000000000';
        key = (undefined === key) ? zeros : key.substr(0, 16) + zeros.substr(0, 16 - key.length);
        iv = (undefined === iv) ? zeros : iv.substr(0, 32) + zeros.substr(0, 32 - iv.length);
        this._key = CryptoJS.enc.Utf8.parse(key);
        this._cfg = {
            iv: CryptoJS.enc.Hex.parse(iv), 
            mode: CryptoJS.mode.CBC, // AES-128-CBC
            padding: CryptoJS.pad.Pkcs7
        };
    }
    encrypt(text) {
        return CryptoJS.enc.Base64.stringify(
            CryptoJS.AES.encrypt(
                CryptoJS.enc.Utf8.parse(text), 
                this._key, 
                this._cfg
            ).ciphertext
        ).toString();
    }
    decrypt(text) {
        return CryptoJS.enc.Utf8.stringify(
            CryptoJS.AES.decrypt(
                text,
                this._key,
                this._cfg
            )
        );
    }
}
aes1 = new SimplyAES("密钥1");
aes2 = new SimplyAES("密钥1");
aes3 = new SimplyAES("密钥2");
test = aes1.encrypt("密文");
console.log('aes1', test);
console.log('aes2', aes2.decrypt(test));
console.log('aes3', aes3.decrypt(test));