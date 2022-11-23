'use strict';
const path = require('path');

const ASSETSPUBLICPATH = process.env.PUBLIC_PATH || '/';

console.log('process.env.PUBLIC_PATH=', process.env.PUBLIC_PATH);

module.exports = {
  dev: {
    port: 8080,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    devtool: 'eval-cheap-module-source-map',
    cssSourceMap: true,
    autoOpenBrowser: false,
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
