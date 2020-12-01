const fs = require("fs");
const path = require("path");

/**
 * @callback ReadDirectoryCallback
 * @param {string} name
 * @param {fs.Stats} stat
 */
/**
 * 枚举目录下所有文件和文件夹
 * @param {string} location 
 * @param {ReadDirectoryCallback} callback 
 */
const openDirectory = (location, callback) => {
    try {
        const stat = fs.statSync(location);
        if(!stat.isDirectory()) return false;
        callback(location, stat);
    } catch(err) { return false }
    const files = fs.readdirSync(location);
    for (let file of files) {
        const name = path.join(location, file);
        const stat = fs.statSync(name);
        callback(name, stat);
        if (stat.isDirectory()) {
            openDirectory(name, callback);
        }
    }
    return true;
}

openDirectory("C:/Windows/System32/Boot", (name, stat) => {
    if (stat.isFile()) {
        console.log("f", name, stat.size);
    } else if (stat.isDirectory()) {
        console.log("d", name, stat.size);
    } else {
        console.log("o", name, stat.size);
    }
})