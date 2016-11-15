const join = require('path').join;
const webpack = require('webpack');

const LOCALES = [ 'en_US', 'de_DE' ];

const babelConfig = JSON.stringify({
  presets: [
    [ 'babel-preset-es2015', { modules: false } ]
  ]
});

module.exports = LOCALES.map(locale => ({
  entry: `./i18n/${locale}.js`,
  output: {
    library: '@foo/i18n',
    libraryTarget: 'umd',
    filename: `${locale}.js`,
    path: join(process.cwd(), 'dist-i18n')
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: `babel-loader?${babelConfig}`
      }
    ]
  }
}));
