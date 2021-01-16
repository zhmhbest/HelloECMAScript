<link rel="stylesheet" href="https://zhmhbest.gitee.io/hellomathematics/style/index.css">
<script src="https://zhmhbest.gitee.io/hellomathematics/style/index.js"></script>

# [Nodejs](../index.html)

[TOC]

## 环境配置

@import "env.md"

## 包管理器

### NPM

```bash
# npm init
npm init -f

# 安装
npm i                   # 根据package.json自动安装
npm -D i <package_name> # 开发环境
npm -S i <package_name> # 运行环境
npm -g i <package_name> # 全局安装

# 卸载
npm un <package_name>
npm -D un <package_name>
npm -S un <package_name>
npm -g un <package_name>
```

### YARN

```bash
yarn init

# 根据package.json自动安装
yarn install

# 当前开发环境
yarn -D add <package_name>

# 当前运行依赖环境
yarn add <package_name>

# 卸载
yarn remove <package_name>

# 全局安装（不建议使用）
yarn global add <package_name>
```

## <a href="javascript:gotoRepository('src')">查看仓库</a>

<script src="../gotoRepository.js"></script>
