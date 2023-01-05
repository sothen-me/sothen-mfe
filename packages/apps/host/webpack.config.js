const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;
const path = require('path');
require("dotenv").config({ path: "./.env" });

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  console.log('isProduction', isProduction);
  console.log('process.env.PROD_APP1', process.env.PROD_APP1);
  console.log('process.env.DEV_APP1', process.env.DEV_APP1);
  console.log('process.env.PROD_APP1', process.env.PROD_APP1);
  console.log('process.env.DEV_APP2', process.env.DEV_APP2);
  
  return {
    entry: path.resolve(__dirname, "src", "index.ts"),
    mode: process.env.NODE_ENV || "development",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    devServer: {
      port: 3000,
      open: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          remote1: isProduction ? process.env.PROD_APP1 : process.env.DEV_APP1,
          remote2: isProduction ? process.env.PROD_APP2 : process.env.DEV_APP2,
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-router-dom"],
          },
        },
      }),
    ],
  }
};
