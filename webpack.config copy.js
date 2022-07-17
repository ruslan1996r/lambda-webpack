const path = require("path")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const isDev = process.env.NODE_ENV === 'development'

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ['@babel/plugin-proposal-class-properties', { "loose": true }],
      ["@babel/plugin-transform-typescript", { "allowNamespaces": true, "allowDeclareFields": true }]
    ]
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}

const rules = () => {
  const rulesList = [
    // {
    //   test: /\.(png|jpg|svg|gif)$/,
    //   use: ['file-loader']
    // },
    // {
    //   test: /\.(ttf|woff|woff2|eot)$/,
    //   use: ['file-loader']
    // },
    // {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader",
    //     options: babelOptions()
    //   },
    // },
    // {
    //   test: /\.ts$/,
    //   exclude: /node_modules/,
    //   use: {
    //     loader: "babel-loader",
    //     options: babelOptions("@babel/preset-typescript")
    //   },
    // }
  ]
  return rulesList
}

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  // entry: {
  //   main: ['@babel/polyfill', './index.ts'],
  //   second: './second.ts'
  // },
  entry: {
    // main: ['@babel/polyfill', './index.js'],
    // second: './second.js'
    main: "./index.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  // resolve: {
  //   extensions: ['.js', '.ts'],
  //   alias: {
  //     "@": path.resolve(__dirname, "src")
  //   }
  // },
  devServer: {
    open: true,
    port: 4200,
    hot: isDev,
    client: {
      logging: 'none'
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const port = devServer.server.address().port;
      console.log(`Server on: http://localhost:${port}`);
    },
  },
  // devtool: isDev ? 'source-map' : '',
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [
      new TerserWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  // module: {
  //   rules: rules()
  // }
}