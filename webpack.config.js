const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  inject: true,
  favicon: "./public/favicon.ico",
  manifest: "./public/manifest.json"
});
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    static: [
      { directory: path.join(__dirname, "dist") },
      { directory: path.join(__dirname, "public") },
    ],
    port: 3001,
    historyApiFallback: {
      index: "./public/index.html"
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Shared",
      filename: "remoteEntry.js",
      exposes: { "./Header": "./src/Header.tsx" },
      shared: { react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } }
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      // You can add more options as needed
    }),
  ]
};
