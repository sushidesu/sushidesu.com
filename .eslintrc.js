module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:vue/base",
    "plugin:vue/recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
  }
};
