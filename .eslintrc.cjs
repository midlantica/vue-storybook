/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

// {
//   "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": true
//   },
//   "eslint.packageManager": "yarn",
//   "eslint.options": {
//     "cache": true,
//     "cacheLocation": ".cache/eslint",
//     "extensions": [".js", ".jsx", ".json", ".html", ".ts", ".tsx", ".mjs"]
//   },
//   "eslint.alwaysShowStatus": true
// }