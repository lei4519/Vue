const path = require('path')
// 启用热加载的第二步
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		// 第一种配置webpack-dev-server的方法 在package的script中定义命令行命令
		// "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
		// 第二种配置webpack-dev-server的方法 在webpack.config.js中配置
		open: true,
		port: 3000,
		contentBase: 'src',
		hot: true // 启用热加载的第一步
	},
	plugins: [
		// 启用热加载的第三步
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			// 指定模板页面路径和名称
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	]
}