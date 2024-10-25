/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/renderer/app.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new VueLoaderPlugin()],
	target: 'electron-renderer',
	mode: 'development',
};
