# webpack practice!

- 初始化项目

        mkdir webpack-demo && cd webpack-demo
        npm init 或 npm init -y
        sudo cnpm i webpack webpack-cli -D

- 创建目录

        webpack-demo
        |- package.json
        |- webpack.config.js
        |- /dist
          |- index.html
        |- /src
          |- index.js

- 构建项目

        npx webpack

        npx webpack --config webpack.config.js

        npm run build (配置package.json npm scripts可使用)

  `注：如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。`

- 加载 css | scss

      sudo cnpm i style-loader css-loader -D
      sudo cnpm i node-sass sass-loader webpack -D

  - 配置 webpack.config.js：

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
              test: /\.scss$/,
              use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
              ]
            },
          ]
        }

  - 问题：`Cannot find module 'import-local'`
    - 解决办法：

          删除 node_modules
          重新安装 sudo cnpm i

- 加载 images 图像、fonts 字体

      sudo cnpm i file-loader -D

  - 配置 webpack.config.js：

        module: {
          rules: [
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader',
              ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader',
              ]
            },
          ]
        }

- resolve.alias

  `创建 import 或 require 的别名，来确保模块引入变得更简单。`

  wepack.config.js:

      const path = require('path');

      resolve: {
        alias: {
          Name: path.resolve(__dirname, 'src/PATH'),
        }
      },

- 配置输出目录, 多入口文件

  webpack.config.js:

      const path = require('path');

      // entry: './src/index.js',
      entry: {
        app: './src/index.js',
        print: './src/print.js'
      },
      output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
      },

- 设置 HtmlWebpackPlugin

  `HtmlWebpackPlugin 还是会默认生成它自己的 index.html 文件`

      sudo cnpm i html-webpack-plugin -D

  webpack.config.js:

      const HtmlWebpackPlugin = require('html-webpack-plugin');

      plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack-demo'
        })
      ],
