const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const purifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
module.exports = {
    entry:{
        c:'./src/index.js',
        b:'./src/index2.js',
       
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
   module:{
       rules:[
           {
               test:/\.css$/,
               use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader'],
                publicPath: '../' //背景图路径
            })
           },
           {
               test:/\.less$/,
               use:ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader','postcss-loader'],
                publicPath: '../' //背景图路径
            }),
           },
           {
               test:/\.\[\js|jsx\]$/,
               use:['babel-loader'],
               exclude:/node_modules/
           },
           {
               test:/\.\[png|jpg|jpeg\]$/,
               use:{
                   loader:'url-loader',
                   options:{
                    limit:50,
                    outputPath:'images'
                }
               },
              
           }
       ]
   },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks:['c','jquery'],
            minify:{
                collapseWhitespace:true,
                removeAttributeQuotes:true
            },
            template:'./src/index.html',
            filename:'index.html',
            hash:true,
            title:'I Love China'
        }),
        new HtmlWebpackPlugin({
            chunks:['b'],
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            },
            filename:'index2.html',
            template:'./src/index2.html',
            hash:true,
            title:'I love China2'
        }),
        new ExtractTextWebpackPlugin("css/a.css"),
        new purifyCssWebpack({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new CopyWebpackPlugin([
            {
                from:path.resolve(__dirname,'src/assets'),
                to:'./public'
            }
        ]),
        new Webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        hot:true,
        open:true,
        port:'8082'
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    chunks:'initial',
                    name:'jquery',
                    enforce:true
                }
            }
        }
    }

    //mode:'development'
}