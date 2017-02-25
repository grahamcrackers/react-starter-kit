const path = require('path');
//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}