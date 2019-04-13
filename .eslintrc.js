module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:vue/essential',
    '@vue/prettier',
    'eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
