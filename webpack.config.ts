import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
