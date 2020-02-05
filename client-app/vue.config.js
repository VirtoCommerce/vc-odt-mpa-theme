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
      enableInSFC: false
    }
  },

  chainWebpack(config) {
    config.resolve.alias.delete("@");
    config.resolve.plugin("tsconfig-paths").use(require("tsconfig-paths-webpack-plugin"));
  }
};
