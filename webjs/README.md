# webjs

```bash
npm init -f
npm -D i webpack webpack-cli
# "main": "src/index.js"
node attachScript.js "build=webpack --env dev=0"
node attachScript.js "build.prod=webpack --env dev=0"
node attachScript.js "build.dev=webpack --env dev=1"
```