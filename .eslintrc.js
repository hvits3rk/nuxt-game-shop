module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
  },
  overrides: [
    {
      files: ['store/*.js', 'plugins/*.js', 'middleware/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  globals: {},
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
};