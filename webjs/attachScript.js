const fs = require('fs');
const [, , ...argv] = process.argv;
const FilenamePackage = 'package.json';
const currentPackage = JSON.parse(fs.readFileSync(FilenamePackage).toString());
const currentScripts = currentPackage['scripts'];
for (let item of argv) {
    let sp = item.search(/=/); if (0===sp) continue;
    let key = item.substr(0, sp).trim();
    let val = item.substr(sp + 1).trim();
    if (0===val.length)
        delete currentScripts[key];
    else
        currentScripts[key] = val;
}
fs.writeFileSync(FilenamePackage, JSON.stringify(currentPackage, undefined, '    '));