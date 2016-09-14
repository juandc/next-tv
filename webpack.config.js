var getConfig = require('hjs-webpack')

// module.exports = getConfig({
//   // in: 'src/app.jsx',
//   // out: 'public/src/app.js',
//   // clearBeforeBuild: true,
//   module: {
//     loaders: [
//       {
//         test: /\.jsx/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel'
//       }
//     ]
//   },
// })

var config = {
  entry: './src/app.jsx',
  output: {
    path: 'public/src/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
}

module.exports = config