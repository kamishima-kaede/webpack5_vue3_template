'use strict';
const path = require('path');

const ASSETSPUBLICPATH = process.env.PUBLICPATH || '/';

module.exports = {
  dev: {
    port: 8080,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    devtool: 'eval-cheap-module-source-map',
    cssSourceMap: true,
    autoOpenBrowser: true,
    proxyTable: []
  },
  build: {
    assetsSubDirectory: './',
    assetsPublicPath: ASSETSPUBLICPATH, // 部署目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: false,
    cssSourceMap: false
  }
};
