let path = require("path");
let webpack = require("webpack");
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
      'vue_runtime': [path.join(__dirname, "src", "vue_runtime.js")]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].dll.js",
      library: "[name]"
    },
    plugins: [
      new webpack.DllPlugin({
        path: 'dist/[name]-manifest.json',
        name: "[name]"
      }),
      new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
      new webpack.optimize.UglifyJsPlugin(),
      new CleanWebpackPlugin(['dist'], {root: __dirname, verbose: true, dry: false}),
    ],
};
