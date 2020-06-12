const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.[jt]s$/,
                use: ["babel-loader", "ts-loader", "eslint-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ]
};