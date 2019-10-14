const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
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
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
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
