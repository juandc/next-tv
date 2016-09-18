var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")

var config = {
  eslint: {
    configFile: '.eslintrc'
  },
  entry: {
    src: './src/app.jsx',
  },
  output: {
    path: 'public/src/',
    filename: 'app.js',
  },
  module: {
    // preLoaders: [{
    //   test: /\.jsx$/, loader: "eslint-loader", exclude: ['/node_modules/', '/public/src/']
    // }],
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
    ],
    resolve: {
      modulesDirectories: ['node-modules', 'src'],
      extensions: ['', '.jsx', '.styl']
    },
    stylus: {
      use: [require('nib')()],
      import: ['~nib/lib/index.styl']
    }
  },
  plugins: [ new ExtractTextPlugin('[name].css') ]
}

module.exports = config