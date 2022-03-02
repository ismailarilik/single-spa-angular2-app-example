const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  if (!singleSpaWebpackConfig.externals) {
    singleSpaAngularWebpack.externals = {};
  }
  singleSpaAngularWebpack.externals['getAngularVersion'] = 'getAngularVersion';

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
