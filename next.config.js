const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');

module.exports = withTypescript(withCss(withOptimizedImages()));
