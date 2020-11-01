const fs = require('fs');
const [, , ...argv] = process.argv;
const FilenamePackage = 'package.json';
// const currentPackage = JSON.parse(fs.readFileSync(FilenamePackage).toString());
const currentPackage = require('./package.json');

for (let item of argv) {
    let sp = item.search(/=/); if (0===sp) continue;
    let val = item.substr(sp + 1).trim();
    let loc = item.substr(0, sp).trim().split('>');
    let dir = loc.slice(0, -1);
    let key = loc.slice(-1);

    let cur = currentPackage;
    if (0!==dir.length) {
        for (let item of dir) {
            if (undefined===cur) {
                console.error("Unexpect key", dir);
                process.exit(1);
            } cur = cur[item];
        }
    }
    if (0===val.length)
        delete cur[key];
    else
        cur[key] = val;
}
fs.writeFileSync(FilenamePackage, JSON.stringify(currentPackage, undefined, '    '));