const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				// Using babel for backward compatibility
				test: /\.js$/,
				exclude: "/node_module/",
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
});
