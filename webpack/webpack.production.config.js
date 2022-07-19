const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  entry: {
    worker: "./src/ts/worker.tsx",
    index: "./src/ts/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              limit: 1000000,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: "/app/dist",
    filename: "[name].js",
    hashFunction: "sha256",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
