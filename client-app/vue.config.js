var webpack = require('webpack');

module.exports = {
  pages: {
    account: "src/pages/account/main.ts",
    catalog: "src/pages/catalog/main.ts"
  },

  outputDir: "../assets/static/bundle/dist",
  filenameHashing: false,
  
  devServer: {
    proxy: 'http://localhost:2083'
  },
  
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      enableInSFC: true
    }
  },

  chainWebpack(config) {
    config.resolve.alias.delete("@");
    config.resolve
      .plugin("tsconfig-paths")
      .use(require("tsconfig-paths-webpack-plugin"));
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true,
      });

    config.merge({
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /(\.(js|jsx|ts|tsx|vue|scss|css)$)/,
            use: ["source-map-loader"],
            enforce: "pre"
          }
        ]
      }
    });    
    config.output.devtoolModuleFilenameTemplate(info => {
      var $filename = 'sources://' + info.resourcePath;
      if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
        $filename = 'webpack-generated:///' + info.resourcePath + '?' + info.hash;
      } 
      return $filename;
    });
    config.output.devtoolFallbackModuleFilenameTemplate('webpack:///[resource-path]?[hash]');
  }
};
