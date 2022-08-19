const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },

    devtool: 'inline-source-map',

    plugins: [

        new HtmlWebpackPlugin({

            title: 'DropDown Menu',
            template: './src/template.html'

        }),

    ],

    devServer: {

        static: './dist',

    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/DropDownMenu/",
        clean: true
    },

    module: {

        rules: [

            {

                test: /\.css$/i,

                use: ['style-loader', 'css-loader'],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },

        ],

    },
    optimization: {

        runtimeChunk: 'single',

    },
};