const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 또는 production
    resolve: {
        extensions: ['.jsx', '.js'] // a Webpack library that helps locate imported modules. 
    } ,
    entry: { //시작하는 파일 넣을 것
        app: ['./index.jsx']
    },
    module: { //loaders
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
              exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            }
          ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./index.html")
      })],
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "app.js",
      },
};