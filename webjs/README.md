# webjs

```bash
npm init -f
npm -D i webpack webpack-cli
node attach.js "main=src/index.js" "scripts>build=webpack --env dev=0"
node attach.js "scripts>build.prod=webpack --env dev=0"
node attach.js "scripts>build.dev=webpack --env dev=1"
```