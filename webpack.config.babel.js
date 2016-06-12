import path from 'path';
import fs from 'fs';
import yml from 'js-yaml';

const config = yml.load(fs.readFileSync('./config.yml', 'utf-8'));
module.exports = {
  entry: {
    app: ['./app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build', 'hotspot'),
    filename: './bundle.js'
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'views'),
      path.resolve(__dirname, 'stylesheets')
    ]
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
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.(jade)$/,
        loader: `file?name=[name].html!jade-html?${JSON.stringify(config)}`
      }
    ]
  }
};
