var path = require('path');
var webpack = require('webpack');
var bourbon = require('node-bourbon');
var ProvidePlugin = require('webpack/lib/ProvidePlugin.js');
module.exports = {
    entry: {
      "main": [
        "./frontend/javascripts/index.jsx"
      ]
    },
    output: {
        path: './public/assets',
        publicPath: "public/",
        filename: "index.js"
},

resolve: {
    extensions: ['', '.js', '.jsx']
},

module: {
    loaders: [
        { test: /\.sass$/, loader: "style!css!sass?indentedSyntax&includePaths[]=" + bourbon.includePaths },
        { test: /\.css$/, loader: "style!css"},
        {
            test: /\.jsx$/,
            loaders: ["react-hot", "babel-loader", "eslint"],
            exclude: [/node_modules/]
        }
    ]
},
plugins: [
  new ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    bourbon: "node-bourbon"
  }),
],
eslint: {
  configFile: '.eslintrc',
  formatter: require("eslint-friendly-formatter"),
  failOnWarning: false,
  failOnError: true
}
};
