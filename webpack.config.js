/* eslint-env node */
var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: './app/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  //serveCustomHtmlInDev: true,
  clearBeforeBuild: true
});

