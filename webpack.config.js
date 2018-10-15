const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        stats: "errors-only",
    },
    module: {
        rules: [
            // CSS
            /*
            {
                test:/\.(s*)css$/,
                //use: ["style-loader", "css-loader", "sass-loader"],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            */

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                })
            },

            // TSX
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            // IMAGES
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: './img/[hash]-[name].[ext]',
                    }
                }]
            },

            // FONTS
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[hash].[ext]',
                            outputPath: 'fonts/'
                        }
                }]
            }
            
        ]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        }),
        new ExtractTextPlugin('index.css')
    ]
};