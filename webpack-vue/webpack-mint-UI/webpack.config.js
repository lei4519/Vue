const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|png|gif|bmp)$/, use: 'url-loader?limit=1024'},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.vue$/, use: 'vue-loader'}
		]
  }
}