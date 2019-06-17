const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// console.log('🎈 🎈 🎈', require('clean-webpack-plugin'));

module.exports = {
  /* mode: 'development', // 开发模式,打包出来的bundle不压缩代码
  optimization: {
    usedExports: true // 打包出来的bundle里注释 导出但未引用的 export
  }, */
  mode: 'production', // 删除的“未引用代码(dead code)” 压缩代码
  devtool: 'inline-source-map', // 浏览器报错定位到源文件
  devServer: {
    contentBase: './dist',
    hot: true
  },
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    // print: './src/print.js',
  },
  output: {
    // filename: 'main.js',
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    publicPath: '/webpack/',
  },
  resolve: {
    alias: {
      Css: path.resolve(__dirname, 'src/resources/css'),
      Images: path.resolve(__dirname, 'src/resources/images'),
      Fonts: path.resolve(__dirname, 'src/resources/fonts'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // 清除输出目录dist文件夹
    /**
     * 自动生成index.html
     */
    new HtmlWebpackPlugin({
      title: 'Webpack-demo'
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          { loader: 'style-loader' }, // 将 JS 字符串生成为 style 节点
          { loader: 'css-loader' }, // 将 CSS 转化成 CommonJS 模块
          { loader: 'sass-loader' }, // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          }
        ]
      },
    ],
  },
};
