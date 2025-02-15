/// <reference types="./source/globals" />

import path from 'path';
import {readdirSync, readFileSync} from 'fs';
import webpack from 'webpack';
import SizePlugin from 'size-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

function parseFeatureDetails(name: string): FeatureInfo {
	const content = readFileSync(`source/features/${name}.tsx`, {encoding: 'utf-8'});
	const rawRegex = ['description', 'screenshot', 'disabled']
		.map(field => `\n\t${field}: '(?<${field}>[^\\n]+)'`) // Named group regex
		.join('|');

	const feature = new RegExp(rawRegex).exec(content)!.groups!;
	feature.name = name;
	return feature as unknown as FeatureInfo;
}

const features = readdirSync(path.join(__dirname, 'source/features'))
	.filter(filename => filename.endsWith('.tsx'))
	.map(filename => filename.replace('.tsx', ''));

module.exports = (_env: string, argv: Record<string, boolean | number | string>): webpack.Configuration => ({
	devtool: 'source-map',
	stats: 'errors-only',
	entry: {
		content: './source/content',
		background: './source/background',
		options: './source/options',
		'resolve-conflicts': './source/resolve-conflicts'
	},
	output: {
		path: path.join(__dirname, 'distribution'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						query: {
							compilerOptions: {
								// Enables ModuleConcatenation. It must be in here to avoid conflict with ts-node
								module: 'es2015',

								// With this, TS will error but the file will still be generated (on watch only)
								noEmitOnError: argv.watch === false
							}
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			// These aren't dynamic because `runtimeValue` doesn't update when "any" file updates, but only when the files with these variables update — which is not very useful.
			__featuresList__: JSON.stringify(features),
			__featuresInfo__: JSON.stringify(features.map(parseFeatureDetails)),

			// @ts-ignore
			__featureName__: webpack.DefinePlugin.runtimeValue(({module}) => {
				return JSON.stringify(path.basename(module.resource, '.tsx'));
			})
		}),
		new MiniCssExtractPlugin({
			filename: 'features.css'
		}),
		new SizePlugin(),
		new CopyWebpackPlugin([
			{
				from: '*',
				context: 'source',
				ignore: [
					'*.js',
					'*.ts',
					'*.tsx'
				]
			},
			{
				from: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js'
			}
		])
	],
	resolve: {
		extensions: [
			'.tsx',
			'.ts',
			'.js'
		]
	},
	optimization: {
		// Without this, function names will be garbled and enableFeature won't work
		concatenateModules: true,

		// Automatically enabled on production; keeps it somewhat readable for AMO reviewers
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: false,
					compress: false,
					output: {
						beautify: true,
						indent_level: 2 // eslint-disable-line @typescript-eslint/camelcase
					}
				}
			})
		]
	}
});
