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
	    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: 'file' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
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