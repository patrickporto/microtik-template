var path = require('path');

module.exports = {
  entry: {
    app: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, 'build', 'hotspot'),
    filename: './app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  externals: {
    'jquery/dist/jquery': 'jQuery'
  }
};
