const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				// To compile a normal sass file
				test: /\.(scs|sas)s$/,
				exclude: [/\.webcomp.scss$/, /node_modules/],
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
				],
			},
			{
				// To compile a component sass file
				test: /\.webcomp.(scs|sas)s$/,
				use: [
					{
						loader: "sass-to-string",
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
				],
			},
			{
				// To compile css file
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
			{
				// To compile font file
				test: /\.(woff|woff2|eot|ttf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "font/",
						},
					},
				],
			},
			{
				// To compile image file
				test: /\.(gif|jpg|png|svg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/",
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "index.html",
			favicon: "./src/images/logo.png",
		}),
	],
};
