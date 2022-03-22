const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require('dotenv-webpack');

console.log(`Loading webpack in ${__dirname}`)

module.exports = {
    mode: 'development',
    entry: `${__dirname}/code/app.ts`,
    
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [{ loader: 'ts-loader' }],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            { 
                test: /\.pug$/, 
                use: [{ loader: 'pug3-loader' }] 
            },

        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./markup/index.pug",
            inject: 'body',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new Dotenv()
    ],

    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            frontend: `${__dirname}/code/`
        }
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: 'bundle.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        port: 9001,
        open: false,
        hot: true,
        allowedHosts: 'all',
        watchFiles: ['markup/**/*.pug']
    }
}