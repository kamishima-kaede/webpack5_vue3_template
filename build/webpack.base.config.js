'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.config');
const config = require('../config');
const { resolve } = require('./utils');

module.exports = {
  context: path.resolve(__dirname, '../'),
  extry: ['./src/main.js'],
  output: {
    filename: '[name].[hash:8].js',
    path: config.build.assetsRoot,
    clean: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
      // 'api':resolve('src/api')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        resolve: { fullySpecified: false }
      },
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader', options: vueLoaderConfig }]
      },

      {
        test: /\.m?jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ],
        includes: [resolve('src/icons')]
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new NodePolyfillWebpackPlugin()],
  target: 'browserslist'
};
