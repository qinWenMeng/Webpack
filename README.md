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

  `注：如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。`
