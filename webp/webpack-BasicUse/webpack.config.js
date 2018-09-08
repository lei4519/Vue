const path = require('path')
// 启用热加载的第二步
const webpack = require('webpack')
// 插件的两个作用
// 1 自动在内存中根据指定页面生成一个内存中的页面
// 2 自动把打包好的bundle.js追加到页面中去
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
	],
  module: { // 配置所有的第三方模块加载器
    rules: [ // 所有第三方模块的匹配规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			// limit 给定的值是图片的大小 单位是byte 如果我们引用的图片大于等于给定的值 则不会转换为base64位格式的字符串
      {test: /\.(jpg|png|gif|bmp)$/, use: 'url-loader?limit=1024'},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
			{test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
		]
  }
}