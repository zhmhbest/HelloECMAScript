
- 设置环境变量`NODE_HOME`为Nodejs所在目录
- 设置环境变量`NODE_PATH`为
  - `%NODE_HOME%\bin\node_modules`
- 添加`%NODE_HOME%\bin`到`PATH`中

```batch
REM 准备目录
MKDIR "%NODE_HOME%\bin"
MKDIR "%NODE_HOME%\cache"
MKDIR "%NODE_HOME%\cache\npm"
MKDIR "%NODE_HOME%\cache\yarn"

REM 配置NPM
npm config set prefix %NODE_HOME%\bin
npm config set cache %NODE_HOME%\cache\npm
npm config ls
COPY /y "%NODE_HOME%\node.exe" "%NODE_HOME%\bin\node.exe"

REM 此处可以先配置镜像
"%NODE_HOME%\npm" -g i npm
"%NODE_HOME%\npm" -g i yarn

REM 配置YARN
yarn config set prefix %NODE_HOME%
yarn config set global-folder %NODE_HOME%\cache\modules
yarn config set cache-folder %NODE_HOME%\cache\yarn
yarn config list
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
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm config ls
```
