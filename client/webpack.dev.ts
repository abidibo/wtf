import { merge } from "webpack-merge";
import { Configuration } from "webpack";
import common from "./webpack.common";
import path from "path";

const webpackConfig = merge<Configuration>(common(), {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: '/',
    compress: true,
    serveIndex: false,
    port: 9000, // @TODO put inside an env var
    // allow refreshing subpath page without 404
    historyApiFallback: {
      index: '/'
    }
  },
});

export default webpackConfig;
