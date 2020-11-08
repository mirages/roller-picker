# lib-starter

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

一个基于 `typescript` + `rollup` + `karma` + `mocha` 的库开发脚手架

## commitizen

用于规范 `commit message` 的格式，详见：[commitizen](https://github.com/commitizen/cz-cli)。其中 `"prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"` 用与在执行 `git commit` 命令时可以交互式的输入提交说明信息，交互完成后会展示出最终提交说明的格式，然后在命令行中输入 `:wq` 完成本次提交。

## conventional-changelog-cli

用于生成 `changelog` 文档，详见：[conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)。

## rollup

`rollup` 打包工具。

### @rollup/plugin-node-resolve

`typescript` 插件，使用 `node module` 的解析算法，当使用 `node_modules` 中的第三方模块时需要该插件。

### @rollup/plugin-commonjs

`typescript` 插件，用于将 `CommonJS` 模块转换成 `ES6` 模块。参考：[How do I use Rollup in Node.js with CommonJS modules?](https://rollupjs.org/guide/en/#how-do-i-use-rollup-in-nodejs-with-commonjs-modules)

### @rollup/plugin-typescript

`typescript` 插件，用于将 `ts` 文件编译成 `js` 文件，以便 `rollup` 进行后续处理。

### rollup-plugin-terser

`typescript` 插件，用于压缩文件。既可以压缩 `es5` 文件，也可以压缩 `es6` 文件。

## karma

`karma` 是一个 `test runner`。

### mocha

可以在真实浏览器中运行的测试框架。

### karma-mocha

`karma` 适配器插件，用于适配 `mocha` 测试框架。需要在 `karma.conf.js` 中配置 `client.mocha` 选项进行相关配置。

### karma-mocha-reporter

`karma` 测试报告插件，用于在控制台中生成 `mocha` 风格的测试报告。需要在 `karma.conf.js` 中配置 `mochaReporter` 选项进行相关配置。

### chai

断言库，既支持 `Expect/Should` `BDD` 式的断言风格，也支持 `Assert` `TDD` 式的断言风格。

### karma-chai

`karma` 适配器插件，用于适配 `chai` 断言库。可以在测试用例中直接使用 `chai.expect` 和 `chai.assert` 以及 `should` 断言，而不需要在每个测试文件中单独 `import` 引入。

### karma-typescript

`karma` 预处理器插件，用于将 `ts` 转换成 `js` 。需要在 `karma.conf.js` 中配置 `karmaTypescriptConfig` 选项进行相关配置。

### karma-chrome-launcher

`karma` 浏览器插件，用于启动本地的 `chrome` 浏览器或者 `ChromeHeadless` 浏览器执行测试用例。



