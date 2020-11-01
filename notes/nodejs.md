<link rel="stylesheet" href="https://zhmhbest.gitee.io/hellomathematics/style/index.css">
<script src="https://zhmhbest.gitee.io/hellomathematics/style/index.js"></script>

# [Nodejs](./index.html)

[TOC]

## 环境配置

设置环境变量`NODE_HOME`为Nodejs所在目录
设置环境变量`NODE_PATH`为`%NODE_HOME%\bin\node_modules`
添加`%NODE_HOME%`、`%NODE_HOME%\bin`到`PATH`中。

```batch
MKDIR "%NODE_HOME%\bin"
MKDIR "%NODE_HOME%\cache"
npm config set prefix %NODE_HOME%\bin
npm config set cache %NODE_HOME%\cache
```

### 关联JS启动

```batch
REM 在管理员命令窗口中输入
REM C:\Windows\System32\CScript.exe "%1" %*
reg add "HKCR\JSFile\Shell\Open\Command" /f /ve /t REG_SZ /d "\"%NODE_HOME%\node.exe\" \"%1\" %*"
```

### 镜像设置

```bash
npm config set registry https://registry.npm.taobao.org/
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm config ls
```

## NPM & YARN

### NPM

#### 初始化

```bash
npm init
# npm init -f
```

#### 包安装

```bash
# 根据package.json自动安装
npm install

# 当前开发环境
npm -D i <package_name>

# 当前运行依赖环境
npm -S i <package_name>

# 全局安装
npm -g i <package_name>
```

### YARN

```bash
# 全局安装yarn
npm -g i yarn
yarn --version
```

#### 初始化

```bash
yarn init
```

#### 包安装

```bash
# 根据package.json自动安装
yarn install

# 当前开发环境
yarn -D add <package_name>

# 当前运行依赖环境
yarn add <package_name>

# 全局安装
yarn global add <package_name>
```
