
- 设置环境变量`NODE_HOME`为Nodejs所在目录
- 设置环境变量`NODE_PATH`为`%NODE_HOME%\bin\node_modules`
- 添加`%NODE_HOME%\bin`到`PATH`中

```batch
MKDIR "%NODE_HOME%\bin"
MKDIR "%NODE_HOME%\cache"
npm config set prefix %NODE_HOME%\bin
npm config set cache %NODE_HOME%\cache
COPY /y "%NODE_HOME%\node.exe" "%NODE_HOME%\bin\node.exe"

REM 此处可以先配置镜像
"%NODE_HOME%\npm" -g i npm yarn
npm -v
yarn -v

REM 配置Yarn
yarn config set prefix %NODE_HOME%
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
