module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
