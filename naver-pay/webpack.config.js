var React = require('react');
var ReactDOM = require('react-dom');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loaders: ['babel-loader'], },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.(s*)css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./src/scss/styles.scss']
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
            ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};