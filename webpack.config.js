var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'bootstrap-loader',
    './assets/js/index.js',
  ],
  output: {
    path: path.resolve('./assets/'),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: [
        'style',
        'css',
        'postcss',
      ],
    },
    {
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'postcss',
        'sass',
      ],
    },
    {
      test: /bootstrap\/dist\/js\/umd\//,
      loader: 'imports?jQuery=jquery'
    },
    {
      test: /\.jsx?$/,
      exclude: [node_modules_dir],
      loader: 'babel?presets[]=react,presets[]=es2015'
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('bundle.css',{allChunks: true}),
    new BundleTracker({
      filename: './webpack-stats.json'
    })
  ]
};
