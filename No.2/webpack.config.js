module.exports = {
    /* webpack 入口文件 */
    entry: './index.js',
    /* webpack 输出文件 */
    output: {
        filename: './test.js'
    },
    /* webpack loaders 配置 */
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
}
