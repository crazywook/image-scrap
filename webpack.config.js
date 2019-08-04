const webpack = require("webpack")
const {getWebpackMode} = require("./common/webpack/utils")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const env = process.env.NODE_ENV;
console.log("mode", getWebpackMode(env));
console.log("process.env.NODE_ENV", typeof process.env.NODE_ENV)
console.log("process.env.API_URL", JSON.stringify(process.env.API_URL))

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `app-dist.${env}.js`,
  },
  devtool: "inline-source-map",
  mode: getWebpackMode(env),
  node: {
    child_process: "empty"
 },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /(\.tsx?|\.jsx?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /(\.png|\.jpg|\.gif|\.svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "static/images/",
            name: "[name]-[hash:9].[ext]"
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "src", "template", "index-template.ejs"),
      inject: "body",
      apiBasePath: JSON.stringify(process.env.API_URL),
      // isMobile: process.env.IS_MOBILE === "true"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
      }
    })
  ]
}