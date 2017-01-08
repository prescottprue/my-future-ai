const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	devServer: {
    historyApiFallback: true
  },
	devtool: 'source-map',
	// devtool: 'cheap-module-source-map',
	entry: [
		'./app/index.js'
	],
	output: {
		path: (__dirname + '/dist'),
		publicPath: '/',
		filename: "index.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		// new webpack.DefinePlugin({
		//   'process.env': {
		//     NODE_ENV: JSON.stringify('production')
		//   }
		// }),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
  //       warnings: false
  //   	},
	 //    mangle: true
		// })
	]
}