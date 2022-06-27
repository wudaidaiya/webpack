const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/main.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
        }),
        // new CleanWebpackPlugin(),// 删除的是ouput path 里配置的那个输出文件的文件夹
    
    ]
}