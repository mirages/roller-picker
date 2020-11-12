# lib-starter

<p align="center">
  <a href="https://travis-ci.com/mirages/lib-starter"><img src="https://travis-ci.com/mirages/lib-starter.svg?branch=main" alt="Build Status"/></a>
  <a href="https://codecov.io/gh/mirages/lib-starter"><img src="https://codecov.io/gh/mirages/lib-starter/branch/main/graph/badge.svg?token=GALVPD9GXI" alt="Coverage Status" /></a>
</p>
<p align="center">
  <a href="https://github.com/microsoft/TypeScript"><img src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/typescript" alt="typescript" /></a>
  <a href="https://github.com/rollup/rollup"><img src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/rollup" alt="rollup" /></a>
  <a href="https://github.com/karma-runner/karma"><img src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/karma" alt="karma" /></a>
  <a href="https://github.com/mochajs/mocha"><img src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/mocha" alt="mocha" /></a>
</p>
<p align="center">
  <a href=""><img src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/eslint" alt="eslint" /></a>
  <a><img alt="husky" src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/husky"></a>
  <a><img alt="lint-staged" src="https://img.shields.io/github/package-json/dependency-version/mirages/lib-starter/dev/lint-staged"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="prettier" /></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="commitizen" /></a>
</p>

一个基于 `typescript` + `rollup` + `karma` + `mocha` 的库开发脚手架。

## Env

- `node>=10.13.0` - `lint-staged v10` 对 `node` 版本的要求。
- `git>=2.13.0` - `husky v4` 对 `git` 版本的要求。

## rollup

`rollup` 打包工具。

- `@rollup/plugin-node-resolve` - `typescript` 插件，使用 `node module` 的解析算法，当使用 `node_modules` 中的第三方模块时需要该插件。

- `@rollup/plugin-commonjs` - `typescript` 插件，用于将 `CommonJS` 模块转换成 `ES6` 模块。参考：[How do I use Rollup in Node.js with CommonJS modules?](https://rollupjs.org/guide/en/#how-do-i-use-rollup-in-nodejs-with-commonjs-modules)

- `@rollup/plugin-typescript` - `typescript` 插件，用于将 `ts` 文件编译成 `js` 文件，以便 `rollup` 进行后续处理。

- `rollup-plugin-terser` - `typescript` 插件，用于压缩文件。既可以压缩 `es5` 文件，也可以压缩 `es6` 文件。

## mocha

是一个可以在真实浏览器中运行的测试框架。

## chai

断言库，既支持 `Expect/Should` `BDD` 式的断言风格，也支持 `Assert` `TDD` 式的断言风格。

## karma

`karma` 是一个 `test runner`。

- `karma-mocha` - `karma` 适配器插件，用于适配 `mocha` 测试框架。需要在 `karma.conf.js` 中配置 `client.mocha` 选项进行相关配置。

- `karma-mocha-reporter` - `karma` 测试报告插件，用于在控制台中生成 `mocha` 风格的测试报告。需要在 `karma.conf.js` 中配置 `mochaReporter` 选项进行相关配置。

- `karma-chai` - `karma` 适配器插件，用于适配 `chai` 断言库。可以在测试用例中直接使用 `chai.expect` 和 `chai.assert` 以及 `should` 断言，而不需要在每个测试文件中单独 `import` 引入。

- `karma-typescript` - `karma` 预处理器插件，用于将 `ts` 转换成 `js` 。需要在 `karma.conf.js` 中配置 `karmaTypescriptConfig` 选项进行相关配置。

- `karma-chrome-launcher` - `karma` 浏览器插件，用于启动本地的 `chrome` 浏览器或者 `ChromeHeadless` 浏览器执行测试用例。

## husky

方便自定义 `git hook`，主要用于在 `git commit` 和 `git push` 之前进行一些代码检查之类的操作。

## commitizen

通过命令行交互的形式规范 `commit message` 的提交格式，详见：[commitizen](https://github.com/commitizen/cz-cli)。

- 通过 `npm script` 提交， `package.json` 配置：

  ```json
  "scripts": {
    "cm": "cz"
  }
  ```

  运行 `npm run cm` 提交。参考：[Optional: Install and run Commitizen locally](https://github.com/commitizen/cz-cli#optional-install-and-run-commitizen-locally)。

- 和 `husky` 配合使用，`package.json` 配置：

  ```json
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  }
  ```

  直接运行 `git commit` 提交，交互完成后会展示出最终提交信息的格式，然后在命令行中输入 `:wq` 完成本次提交。

  _注意_：在 window 平台直接使用 `git commit` 命令可能会出现问题，参考 [How to husky prepare-commit-msg on windows?](https://github.com/commitizen/cz-cli/issues/627) 其中 [cmd 输出混乱的问题](https://github.com/commitizen/cz-cli/issues/627#issuecomment-551356945)。可通过配置 `npm script` 来提交。

- `conventional-changelog-cli` - 用于根据 `commitizen` 信息生成 `changelog` 文档，详见：[conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)。

- `@commitlint/cli` - 用于校验提交的数据是否符合 `commitizen`。配合 `husky` 使用：

  ```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
  ```

- `@commitlint/config-conventional` - `commitizen` 的校验规则配置。配置文件为 `.commitlintrc.yml`，规则参考：[rules](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md)。

## lint-staged

只对 `git` 暂存区（本次要提交）的内容进行相关检查，例如：`prettier`, `eslint`, `stylelint` 等等。

配置文件为 `.lintstagedrc.yml`。详情参见：[lint-staged](https://github.com/okonet/lint-staged#readme)。

常见问题：

- 某些命令不能直接添加到 `lint-staged` 中，例如 `karma start`：

  ```yaml
  # .lintstagedrc.yml
  '*.ts':
    # 这里 karma start 命名执行时会报错
    - karma start --single-run --browsers ChromeHeadless
    - prettier --write
  ```

  上面命令执行到 `karma start ...` 时会报错，因为 `lint-staged` 命令会把匹配到的文件作为参数传递给 `karma start ...` 命令，这时会错把 `ts` 文件作为配置文件进行解析，因此会报错。

  1. 可以参考使用 [js config file](https://github.com/okonet/lint-staged/blob/master/README.md#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments)。
  2. 将 `karma start` 命令添加到 `pre-commit hook` 中：`"pre-commit": "karma start ... && lint-staged"。`

## eslint

`js` 代码检查工具。配置文件为 `.eslintrc.yml`。详情参见：[Configuring ESLint](https://eslint.bootcss.com/docs/user-guide/configuring)。

> 使用 `eslint --init` 命令按照步骤初始化生成 `.eslintrc.yml` 文件即可。

配合 `lint-staged`，在 `.lintstagedrc.yml` 中配置对应的匹配模式。

## prettier

代码风格格式化插件，配置文件为 `.prettierrc.yml`。详细配置参见：[prettier](https://prettier.io/docs/en/cli.html)。

配合 `lint-staged`，在 `.lintstagedrc.yml` 中配置对应的匹配模式。

## travis-ci

持续集成工具，针对开源项目免费，登录[官网：https://travis-ci.com/](https://travis-ci.com) 注册账号（不要再去 https://travis-ci.org 进行注册了），或直接使用 `github` 账号授权登录。

配置文件为 `.travis.yml`。详情参考：[Travis CI Tutorial](https://docs.travis-ci.com/user/tutorial/)。配置成功后便可以添加自己的 [![Build Status](https://travis-ci.com/mirages/lib-starter.svg?branch=main)](https://travis-ci.com/mirages/lib-starter) 徽标。

_注意避免泄露自己的隐私数据_：[Best Practices in Securing Your Data](https://docs.travis-ci.com/user/best-practices-security/#recommendations-on-how-to-avoid-leaking-secrets-to-build-logs)。

## codecov

统计测试覆盖率，针对开源项目免费，登录[官网：https://www.codecov.io/](https://www.codecov.io/) 注册账号，或直接使用 `github` 账号授权登录。将测试覆盖率报告上传到 `codecov` 平台后便可以添加自己的 [![codecov](https://codecov.io/gh/mirages/lib-starter/branch/main/graph/badge.svg?token=GALVPD9GXI)](https://codecov.io/gh/mirages/lib-starter) 徽标。

配合 `travis ci` 自动上传测试覆盖率报告，`.travis.yml` 配置：

```yml
after_success:
  - bash <(curl -s https://codecov.io/bash) -s ./coverage/
```
