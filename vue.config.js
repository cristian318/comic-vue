const path = require('path');

module.exports = {
  devServer: {
    proxy: 'https://xkcd.com/',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
  },
};
