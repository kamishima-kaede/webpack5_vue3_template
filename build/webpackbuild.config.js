'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const vueLoaderConfig = require('./vue-loader.config');
const config = require('../config');


module.exports = {
  extry: ['./src/main.js'],
  output: {
    filename: '[name].[hash:8].js',
    path: config.build.assetsRoot,
    clean: true
  },
  module: {
    rules: [
      // images
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      // css
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: true, shadowMode: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      // less
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: true, shadowMode: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ]
      },
      // js
      {
        test: /\.m?jsx?$/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
