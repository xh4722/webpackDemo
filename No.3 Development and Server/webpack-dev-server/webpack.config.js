/* 引入 HtmlWebpackPlugin */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* webpack 入口文件 */
    entry: './index.js',
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
        contentBase: './dist'
    },
    /* 插件配置 */
    plugins: [
        /* HTML 生成插件 */
        new HtmlWebpackPlugin()
    ]
}
