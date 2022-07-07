const webpack = require("webpack");
const path = require("path");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const app = express();
app.use(bodyParser.json());
app.use(express.static("build"));

const server = http.createServer(app);
const serverPort = 8080;

server.listen(serverPort);

app.get("/version", (req, res) => {
  res.send("0.0.1");
});

const compiler = webpack({
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "source-map",
  entry: "./public/js/worker.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "worker.js",
    hashFunction: "sha256",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public/index.js"),
          to: path.resolve(__dirname, "./build/index.js"),
        },
      ],
    }),
  ],
});

compiler.watch(
  {
    aggregateTimeout: 300,
    poll: undefined,
  },
  (err, stats) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Compiled...");
    }
  }
);

console.log(`Server listening on port ${serverPort}.`);
