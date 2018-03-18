const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const webpackConfig = require('./webpack.config.js');

/* 将 webpack-dev-middleware 配置到 express 中 */
app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath
}));

/* 监听 3000 端口 */
app.listen(3000, () => {
    console.log('server listen on port 3000\n');
});
