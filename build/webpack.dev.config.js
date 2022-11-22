'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWeboackConfig = require('./webpack.base.config');
const config = require('../config');
const { resolve } = require('./utils');

module.exports = merge(baseWeboackConfig, {
  mode: 'development',
  devtool: config.dev.devtool,
  devServer: {
    hot: true,
    port: config.dev.port || 8080,
    client: {
      logging: 'info',
      overlay: config.dev.errorOverlay
        ? {
            warnings: false,
            errors: true
          }
        : false
    },
    compress: true,
    historyApiFallback: true,
    open: config.dev.autoOpenBrowser
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: config.dev.cssSourceMap, shadowMode: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: config.dev.cssSourceMap, importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: config.dev.cssSourceMap }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: config.dev.cssSourceMap, shadowMode: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: config.dev.cssSourceMap, importLoaders: 2 }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: config.dev.cssSourceMap }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: config.dev.cssSourceMap }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template:resolve('public/index.html'),
      filename: 'index.html',
      title: 'vueconfig',
      scriptLoading: 'defer',
    })
  ]
});
