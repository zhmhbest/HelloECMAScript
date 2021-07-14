
- 下载[Binary NodeJs](https://nodejs.org/en/download/)

```batch
REM 删除历史配置
DEL /F /Q %Userprofile%\.npmrc
DEL /F /Q %Userprofile%\.yarnrc
```

```batch
REM 临时环境
SET NODE_HOME=D:\ProgramFiles\Programming\Nodejs\node-v14.17.3-win-x64
CD /D "%NODE_HOME%"

REM 准备目录
MKDIR .\bin
MKDIR .\cache
MKDIR .\cache\npm

REM 准备NPM、Yarn
SET NPM=node "%NODE_HOME%\node_modules\npm\bin\npm-cli.js"
%NPM% config set registry https://registry.npm.taobao.org/
%NPM% config set cache "%NODE_HOME%\cache\npm"
%NPM% config set prefix "%NODE_HOME%\bin"
%NPM% -g i npm yarn
%NPM% config delete prefix

REM 准备Node
COPY /y .\node.exe .\bin\node.exe

REM 配置环境变量
SETX NODE_HOME "%NODE_HOME%"
REM SET NODE_HOME=
REM SETX NODE_PATH "%NODE_HOME%\bin\node_modules"
```

- 手动添加`%NODE_HOME%\bin`到`%PATH%`中

```batch
REM 测试
node -v
npm config ls
yarn config list

REM 配置YARN
MKDIR "%NODE_HOME%\cache\yarn"
MKDIR "%NODE_HOME%\cache\modules"
yarn config set cache-folder "%NODE_HOME%\cache\yarn"
yarn config set global-folder "%NODE_HOME%\cache\modules"
```

### 关联JS启动

```batch
REM 在管理员命令窗口中输入
REM C:\Windows\System32\CScript.exe "%1" %*
reg add "HKCR\JSFile\Shell\Open\Command" /f /ve /t REG_SZ /d "\"%NODE_HOME%\bin\node.exe\" \"%1\" %*"
```

### 关联TS启动

```batch
npm -g i typescript ts-node
REM 在管理员命令窗口中输入
reg add "HKCR\.ts" /f /ve /t REG_SZ /d "TSFile"
reg add "HKCR\TSFile\DefaultIcon" /f /ve /t REG_SZ /d "\"%NODE_HOME%\bin\node.exe\""
reg add "HKCR\TSFile\Shell\Open\Command" /f /ve /t REG_SZ /d "\"%NODE_HOME%\bin\ts-node.cmd\" \"%1\" %*"
```

### 镜像设置

```bash
npm config set registry https://registry.npm.taobao.org/
npm config set NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node/
npm config set NVMW_NPM_MIRROR=http://npm.taobao.org/mirrors/npm/
npm config set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
npm config set ELECTRON_BUILDER_BINARIES_MIRROR=http://npm.taobao.org/mirrors/electron-builder-binaries/
npm config set SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass/
npm config set PYTHON_MIRROR=http://npm.taobao.org/mirrors/python/
npm config ls
```
