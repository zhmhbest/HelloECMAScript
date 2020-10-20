<link rel="stylesheet" href="https://zhmhbest.gitee.io/hellomathematics/style/index.css">
<script src="https://zhmhbest.gitee.io/hellomathematics/style/index.js"></script>

# [基本语法](./index.html)

[TOC]

## 数据类型

@import "src/base_datatype.js" {code_block=true class="line-numbers"}

```txt
string
number
boolean
function
object
object
object
undefined
```

## 变量声明

@import "src/base_variable.js" {code_block=true class="line-numbers"}

## 函数

@import "src/base_function.js" {code_block=true class="line-numbers"}

### arguments

@import "src/base_arguments.js" {code_block=true class="line-numbers"}

```txt
object 1 [Arguments] { '0': 1 }
object 2 [Arguments] { '0': 1, '1': 2 }
object 3 [Arguments] { '0': 1, '1': 2, '2': 3 }
```

### this

@import "src/base_this.js" {code_block=true class="line-numbers"}

## 对象

### factory

@import "src/base_factory.js" {code_block=true class="line-numbers"}

### prototype

@import "src/base_prototype.js" {code_block=true class="line-numbers"}

## 数组

### 数组操作

@import "src/base_array.js" {code_block=true class="line-numbers"}

### 数组遍历

@import "src/base_array_enum.js" {code_block=true class="line-numbers"}

## 集合

@import "src/base_set.js" {code_block=true class="line-numbers"}

```txt
set1 = [ 1, 2, 3 ]
set2 = [ 3, 2, 5 ]
set1 ∪ set2 = [ 1, 2, 3, 5 ]
set2 ∪ set1 = [ 3, 2, 5, 1 ]
set1 ∩ set2 = [ 2, 3 ]
set2 ∩ set1 = [ 3, 2 ]
[ 1, 2, 3 ] - [ 2, 3 ] = [ 1 ]
[ 3, 2, 5 ] - [ 3, 2 ] = [ 5 ]
```

## 日期

@import "src/base_date.js" {code_block=true class="line-numbers"}

## 容器

