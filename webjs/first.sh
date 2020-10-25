npm init -f
npm -D i webpack webpack-cli
npm -D i babel-loader @babel/core @babel/preset-env
npm -D i @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-decorators
# npm -D i @babel/plugin-transform-runtime
# npm -S i @babel/runtime
node attach.js "main=src/index.js"
node attach.js "scripts>build.dev=webpack  --config config/main.js --mode=development --env prod=0"
node attach.js "scripts>build.pro=webpack  --config config/main.js --mode=production  --env prod=1"
node attach.js "scripts>build.prod=webpack --config config/main.js --mode=production  --env prod=2"