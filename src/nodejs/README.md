# Nodejs

- [Download](https://nodejs.org/en/download/)
- [API Docs](http://nodejs.cn/api/)

## NPM

### 修改目录

```batch
REM cd /d D:\ProgramFiles\Programmer\Language\Nodejs
mkdir bin & mkdir cache
REM 全局包安装位置
npm config set prefix %CD%\bin
REM 包缓存位置
npm config set cache %CD%\cache
```

### 镜像设置

```bash
npm config set registry https://registry.npm.taobao.org/
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm config ls
```

### 初始化

```bash
npm init
# npm init -f
```

### 包安装

```bash
# 当前开发环境
npm -D i <package_name>
```

```bash
# 当前运行依赖环境
npm -S i <package_name>
```

```bash
# 全局安装
npm -g i <package_name>
```

## YARN

```bash
# 全局安装
npm -g i yarn
yarn --version
```

### 安装包

```bash
# 根据package.json自动安装
yarn install
```

```bash
# 当前开发环境
yarn -D add <package_name>
```

```bash
# 当前运行依赖环境
yarn add <package_name>
```