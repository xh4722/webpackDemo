/* 引入 HtmlWebpackPlugin */
var HtmlWebpackPlugin = require('html-webpack-plugin');
/* 引入 WebpackBrowserPlugin */
var WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    /* webpack 入口文件 */
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],
    /* webpack 输出文件 */
    output: {
        filename: './dist/test.js'
    },
    /* webpack loaders 配置 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    /* 配置 webpack-dev-server */
    devServer: {
        contentBase: './dist',
        open: true
    },
    /* 插件配置 */
    plugins: [
        /* HTML 生成插件 */
        new HtmlWebpackPlugin(),
        /* 浏览器控制插件 */
        new WebpackBrowserPlugin({
            url: 'http://localhost',
            port: 8080
        })
    ]
}
