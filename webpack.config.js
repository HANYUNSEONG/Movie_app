const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_moudes/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}