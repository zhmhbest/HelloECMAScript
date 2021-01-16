const mod = require('./base_module_com.js');

// CommonJS 模块保留的是对象
console.log(mod.count);
mod.plusCount();
console.log(mod.count);
