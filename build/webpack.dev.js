const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');
module.exports = merge(common, {
    mode: 'development', // Don't minify the source
    devtool: 'eval-source-map', // Source map for easier development
    devServer: {
        hot: true, // Reload our page when the code changes
    },
})
