const fs = require("fs");
const path = require("path");
const readFiles = (location, callback) => {
    const files = fs.readdirSync(location);
    for (let file of files) {
        const filename = path.join(location, file);
        const stat = fs.statSync(filename);
        if (stat.isDirectory()) {
            readFiles(filename, callback);
        } else if (stat.isFile()) {
            callback(filename.replace(/\\/, '/'));
        }
    }
}
const fp = fs.openSync(`./src.md`, "w");
readFiles("./src", filename => {
    fs.writeSync(fp, `- [${path.basename(filename)}](${filename})\n`);
})
fs.closeSync(fp);