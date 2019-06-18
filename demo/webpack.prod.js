const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production', // 删除的“未引用代码(dead code)” 压缩代码
  output: {
    // filename: '[name].[contenthash].js',
    publicPath: '/',
  }
});
