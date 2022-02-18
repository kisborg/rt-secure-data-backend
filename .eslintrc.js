module.exports = {
  extends: ['airbnb-base'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'linebreak-style': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
  },
};
