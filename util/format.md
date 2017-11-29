## 工具

* prettier - code formatter
* vetur
* eslint

## 用户设置

"editor.formatOnSave": true, "prettier.eslintIntegration": true,
"prettier.semi": false, "prettier.singleQuote": true,
"vetur.format.defaultFormatter.html": "js-beautify-html"

* vetur\
  // Use color decorators in vue "vetur.colorDecorators.enable": true,

  // Mapping from custom block tag name to language name. Used for generating
  grammar to support syntax highlighting for custom blocks.
  "vetur.grammar.customBlocks": { "docs": "md", "i18n": "json" },

  // Validate vue-html in <template> using eslint-plugin-vue
  "vetur.validation.template": true,

  // Validate css/scss/less/postcss in <style> "vetur.validation.style": true,

  // Validate js/ts in <script> "vetur.validation.script": true,

  // Default formatter for <template> region
  "vetur.format.defaultFormatter.html": "none",

  // Default formatter for <style> region "vetur.format.defaultFormatter.css":
  "prettier",

  // Default formatter for <style lang='postcss'> region
  "vetur.format.defaultFormatter.postcss": "prettier",

  // Default formatter for <style lang='scss'> region
  "vetur.format.defaultFormatter.scss": "prettier",

  // Default formatter for <style lang='less'> region
  "vetur.format.defaultFormatter.less": "prettier",

  // Default formatter for <style lang='stylus'> region
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",

  // Default formatter for <script> region "vetur.format.defaultFormatter.js":
  "prettier",

  // Default formatter for <script> region "vetur.format.defaultFormatter.ts":
  "prettier",

  // Options for all default formatters "vetur.format.defaultFormatterOptions":
  { "js-beautify-html": {} },

  // Whether to have initial indent for <style> region
  "vetur.format.styleInitialIndent": false,

  // Whether to have initial indent for <script> region
  "vetur.format.scriptInitialIndent": false,

* Prettier - Code formatter configuration

## .eslintrc.js

// https://eslint.org/docs/user-guide/configuring

module.exports = { root: true, parser: "babel-eslint", parserOptions: {
sourceType: "module" }, env: { browser: true }, //
https://github.com/standard/standard/blob/master/docs/RULES-en.md extends:
"standard", // required to lint \*.vue files plugins: ["html"], // add your
custom rules here rules: { // allow paren-less arrow functions "arrow-parens":
0, // allow async-await "generator-star-spacing": 0, // allow debugger during
development "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
"space-before-function-paren": 0 } }

## 如果安装了 prettier-eslint & through2

.prettierignore

node_modules .nyc_output coverage dist tests/fixtures/

prettier-eslint.js

var through = require("through2") var prettierEslint =
require("prettier-eslint")

const options = { eslintConfig: { parserOptions: { ecmaVersion: 7 }, rules: {
semi: false } }, prettierOptions: { bracketSpacing: true } }

module.exports = function() { return through.obj(format)

function format(file, encoding, callback) { if (file.isNull()) { return
callback(null, file) }

    if (file.isStream()) {
      return callback(
        new utils.PluginError("prettier-eslint", "doesn't support Streams")
      )
    }

    const sourceCode = file.contents.toString()
    const formatted = prettierEslint({
      ...config,
      text: sourceCode
    })

    file.contents = new Buffer(formatted, encoding)

    return callback(null, file)

} }
