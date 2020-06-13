const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
        'index.min': './src/index.js'
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,//Handle TS
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            // disable type checker - we will use it in fork plugin
                            transpileOnly: true
                        },
                    },
                    "eslint-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,//Handle JS
                use: [
                    "babel-loader",
                    "eslint-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            useTypescriptIncrementalApi: true,
            memoryLimit: 4096
        }),
        new TerserWebpackPlugin({
            include: /min/,
            sourceMap: true
        })
    ]
};