const path = require("path");

module.exports = {
  pages: {
    account: "src/pages/account/main.ts",
    catalog: "src/pages/catalog/main.ts"
  },

  outputDir: "../assets/static/bundle/dist",
  filenameHashing: false,
  
  devServer: {
    proxy: "http://localhost:2083"
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

    config.module.rules.delete("scss");
    config.module.rule("default").test(/\.scss$/)
      .include.add(/default.scss$/).end()
      .use('file-loader').loader('file-loader').tap(options => ({ name: "default.scss" }))
      .before("exports-loader").end().use('exports-loader').loader('exports-loader')
      .before("postcss").end().use("postcss").loader("postcss-loader").tap(options => ({
        ident: "embedded",
        syntax: require("postcss-scss"),
        plugins: (loader) => [
            require("postcss-easy-import")({
                root: loader.resourcePath,
                prefix: "_",
                extensions: ".scss"
            }),
        ],
        sourceMap: "inline"
      })).end();

    config.devtool("source-map");
    config.module.rule("source-maps").test(/\.(js|jsx|ts|tsx|scss|css|vue)$/).enforce("pre").use('source-map-loader').loader('source-map-loader');
    config.output.devtoolModuleFilenameTemplate(info => {
      var $filename = "sources://" + info.resourcePath;
      if (info.resourcePath.match(/\.vue$/) && !info.query.match(/type=script/)) {
        $filename = "webpack-generated:///" + info.resourcePath + "?" + info.hash;
      } 
      return $filename;
    });
    config.output.devtoolFallbackModuleFilenameTemplate("webpack:///[resource-path]?[hash]");
  }
};
