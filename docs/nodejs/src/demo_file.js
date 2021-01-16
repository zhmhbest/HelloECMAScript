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
        callback(location.replace(/\\/g, '/'), stat);
    } catch(err) { return false }
    const recursion = (loc) => {
        const files = fs.readdirSync(loc);
        for (let file of files) {
            const name = path.join(loc, file);
            const stat = fs.statSync(name);
            callback(name.replace(/\\/g, '/'), stat);
            if (stat.isDirectory()) {
                recursion(name);
            }
        }
    };
    recursion(location);
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