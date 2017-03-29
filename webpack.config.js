module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/lib',
		filename: 'index.js'
	},
	module: {
		loaders: [
		  {
		    test: /\.js$/,
		    loader: 'babel-loader',
		    query: {
		      presets: ['es2015']
		    }
		  }
		]
	}
};