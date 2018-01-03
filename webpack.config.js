const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
        
        entry: {
                index: './src/index.js',
                board: './src/board.js',
        },
        
        output: {
                path: path.resolve(__dirname, './js'),
                filename: '[name].bundle.js'
        },
        
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: '/node_modules/',
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: ['env']
                                        }
                                }
                        },
                        {
                                test: /\.css$/,
                                use: ExtractTextPlugin.extract({
                                        fallback: 'style-loader',
                                        use: 'css-loader'
                                })
                        },
                        {
                                test: /\.scss$/,
                                use: ExtractTextPlugin.extract({
                                        fallback: 'style-loader',
                                        use: ['css-loader', 'sass-loader?sourceMap']
                                })
                        },
                        {
                                test: /\.(eot|svg|ttf|woff|woff2)$/,
                                loader: 'file-loader',
                                options: {
                                        name: '[path][name].[ext]',
                                        outputPath: 'img/',
                                        emitFile: true,
                                }
                        },
                        {
                                test: /\.(png|gif|jpg|jpeg)$/,
                                use: {
                                        loader: 'url-loader',
                                        options: {
                                                limit: 8192
                                        }
                                }
                        }
                ]
        },
        
        plugins: [
                // new webpack.optimize.CommonsChunkPlugin({
                //     name: 'vendor',
                //     filename: 'vendor.bundle.js',
                //     minChunks: Infinity,
                // }),
                // new UglifyJSPlugin(),
                new ExtractTextPlugin({
                        filename: (getPath) => {
                                return getPath('../css/[name].bundle.css');
                        }
                }),
                new LiveReloadPlugin()
        ],
        
        devtool: 'eval-source-map',
        
        devServer: {
                contentBase: "./",
                open: true,
        },
};