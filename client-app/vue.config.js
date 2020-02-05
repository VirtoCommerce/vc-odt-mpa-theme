var webpack = require('webpack');

module.exports = {
  pages: {
    account: "src/pages/account/main.ts",
    catalog: "src/pages/catalog/main.ts"
  },

  outputDir: "../assets/static/bundle/dist",
  filenameHashing: false,

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
    config.merge({ devtool: "source-map" });
  }
};
