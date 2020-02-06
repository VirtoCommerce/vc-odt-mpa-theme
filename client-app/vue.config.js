module.exports = {
    pages: {
        account: "src/pages/account/main.js",
        catalog: "src/pages/catalog/main.js"
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
            localeDir: "locales",
            enableInSFC: true
        }
    }
};
