import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import common from "./webpack.common";
import path from "path";

const webpackConfig = merge<Configuration>(common(), {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "assets"),
    publicPath: "/",
    compress: true,
    port: 9000,
  },
});

export default webpackConfig;
