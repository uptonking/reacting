var path = require('path');
var webpack = require('webpack');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        // './demo/index.js',
        './project/datasheet/src/index.js',
    ],

    output: {
        // path: path.join(__dirname, 'public'),
        path: __dirname,
        filename: 'bundle.js',
    },

    module:
        {

            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: [
                        __dirname,
                        path.join(__dirname, 'src'),
                        path.join(__dirname, 'demo'),
                    ],
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.s?css/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                    }),
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',    // where the fonts will go
                            publicPath: '../'       // override the default path
                        }
                    }]
                },
            ],
        },

    plugins:
        [
            new ExtractTextPlugin("styles.css"),
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.NoErrorsPlugin(),
            new FileManagerPlugin({
                onEnd: [
                    {
                        copy: [
                            //目录是相对于执行npm run命令的根目录，而不是webpack.config.js的位置
                            {source: "./public", destination: "./docs"}
                        ]
                    },
                ]
            }),
        ],

    // resolve: {
    //
    //     // 可以替换初始模块路径，此替换路径通过使用 resolve.alias 配置选项来创建一个别名
    //     alias: {
    //         'react': path.join(__dirname, '..', 'src/index.js'),
    //     },
    // },


    devtool: 'inline-source-map',
    devServer:
        {
            contentBase: path.join(__dirname, 'public'),
            port: 8900,
            hot: true,
            inline: true,
            publicPath: '/',
            watchContentBase: true,
        }

};
