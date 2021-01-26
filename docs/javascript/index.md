<link rel="stylesheet" href="https://zhmhbest.gitee.io/hellomathematics/style/index.css">
<script src="https://zhmhbest.gitee.io/hellomathematics/style/index.js"></script>

# [Javascript](../index.html)

[TOC]

## 文档注释

### 定义变量

```js
/** @type {number} */
const PI = 3.1415926;
```

### 自定义类型

```js
/**
 * @typedef {string|number} myType
 */
/** @type {myType} */
let x;
x = 123;
x = "abc";
```

```js
/**
 * @typedef {{x: number, y:number, z?: number|undefined}} Position
 */
/**
 * @type {Position}
 */
let pos = {};
pos.x = 1366;
pos.y = 768;
console.log(pos);
```

### 注释已有函数

```js
/**
 * 说你好
 * @param {string} name
 * @param {string} [age]
 * @return {void}
 * @example sayHello("Peter");
 */
const sayHello = (name, age) => {
    age = age || 0;
    console.log(`${name} ${age}: Hello!`);
}
```

### 定义回调函数

```js
/**
 * @callback Callback
 * @param {string} name
 * ...
 * @return {number}
 */
```

## <a href="javascript:gotoRepository('src')">查看仓库</a>

<script src="../gotoRepository.js"></script>
