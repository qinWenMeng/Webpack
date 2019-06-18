const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development', // 开发模式,打包出来的bundle不压缩代码
  optimization: {
    usedExports: true // 打包出来的bundle里注释 导出但未引用的 export
  },
  devtool: 'inline-source-map', // 浏览器报错定位到源文件
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    publicPath: '/',
    // publicPath: '/webpack/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新
  ],
});
