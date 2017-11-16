# Repo showing vuetify a-la-carte bug

### This repo created with the vue-pwa template

## Error during build:

```
ERROR in ./node_modules/css-loader!./node_modules/stylus-loader!./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"minimize":true,"sourceMap":true}!./node_modules/stylus-loader?{"sourceMap":true}!./node_modules/vuetify/src/stylus/app.styl
Module build failed: ParseError: /private/var/tmp/alc-pwa/node_modules/vuetify/src/stylus/app.styl:4:94
   1| // style-loader: Adds some css to the DOM by adding a <style> tag
   2|
   3| // load the styles
   4| var content = require("!!../../../css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../../stylus-loader/index.js?{\"sourceMap\":true}!./app.styl");
---------------------------------------------------------------------------------------------------^
   5| if(typeof content === 'string') content = [[module.id, content, '']];
   6| if(content.locals) module.exports = content.locals;
   7| // add the styles to the DOM

expected "indent", got "!"

    at Parser.error (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:259:11)
    at Parser.expect (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:287:12)
    at Parser.block (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:845:12)
    at Parser.selector (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:1555:24)
    at Parser.ident (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:1446:25)
    at Parser.stmt (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:778:26)
    at Parser.statement (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:685:21)
    at Parser.parse (/private/var/tmp/alc-pwa/node_modules/stylus/lib/parser.js:236:25)
    at Renderer.render (/private/var/tmp/alc-pwa/node_modules/stylus/lib/renderer.js:80:22)
    at /private/var/tmp/alc-pwa/node_modules/stylus-loader/index.js:165:12
    at tryCatchReject (/private/var/tmp/alc-pwa/node_modules/when/lib/makePromise.js:840:30)
    at runContinuation1 (/private/var/tmp/alc-pwa/node_modules/when/lib/makePromise.js:799:4)
    at Fulfilled.when (/private/var/tmp/alc-pwa/node_modules/when/lib/makePromise.js:590:4)
    at Pending.run (/private/var/tmp/alc-pwa/node_modules/when/lib/makePromise.js:481:13)
    at Scheduler._drain (/private/var/tmp/alc-pwa/node_modules/when/lib/Scheduler.js:62:19)
    at Scheduler.drain (/private/var/tmp/alc-pwa/node_modules/when/lib/Scheduler.js:27:9)
 @ ./node_modules/vuetify/src/stylus/app.styl 4:14-279
 @ ./src/main.js
```




> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
