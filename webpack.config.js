const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	//mode: process.env.environment == "production" ? "production" : "development",
	mode: "production",
	plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "src", "index.html")
	})],
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				//test: path.resolve(__dirname, "src/scss/*"),
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
			},{
				test: /\.(png|jpe?g)$/i,
				type: "asset",
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/"
						}
					}
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.sharpMinify,
					options: {
						encodeOptions: {
							jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 20,
              },
							png: {
								quality: 20,
								compressionLevel: 9
							}
						}
					}
				}
			})
		]
	},
	devtool: "source-map",
	devServer: {
		static: "./dist"
	}
}
