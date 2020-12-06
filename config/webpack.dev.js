const path = require("path");
const webpack = require("webpack");

const env =

module.exports = {
  entry: {
    main: [
      "./src/index.ts"
    ]
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    hot: true,
    contentBase: "dist",
    overlay: true,
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: "ts-loader"
      }],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts']
  }
}
