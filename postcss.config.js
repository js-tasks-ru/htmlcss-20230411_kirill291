module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-nested'),
    require('postcss-advanced-variables'),
    require('postcss-import'),
  ],
};