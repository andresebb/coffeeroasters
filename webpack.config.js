const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    publicPath: "/",
    // watchContentBase: true,
    historyApiFallback: {
      index: "/",
    },
  },
};
