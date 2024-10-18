/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/renderer/index.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: { appendTsSuffixTo: [/\.vue$/] },
			},
		],
	},
	plugins: [new VueLoaderPlugin()],
	target: 'electron-renderer',
	mode: 'development',
};
