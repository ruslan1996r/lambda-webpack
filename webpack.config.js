const path = require("path")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    // plugins: [
    //   ["@babel/plugin-proposal-decorators", { "legacy": true }],
    //   ['@babel/plugin-proposal-class-properties', { "loose": true }],
    //   ["@babel/plugin-transform-typescript", { "allowNamespaces": true, "allowDeclareFields": true }]
    // ]
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}

const rules = () => {
  const rulesList = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: babelOptions()
      },
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: babelOptions("@babel/preset-typescript"),
      },
    }
  ]
  return rulesList;
}


module.exports = {
  target: 'node',
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./handler.js",
  },
  output: {
    // filename: "[name].js",
    filename: "handler.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserWebpackPlugin(),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: rules(),
  }
}