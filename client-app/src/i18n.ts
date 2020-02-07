import Vue from "vue";
import VueI18n from "vue-i18n";
import LocalizationService from "@common/localization.service";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: {}
});

LocalizationService.get().then(({ data }) => {
  i18n.setLocaleMessage("en", data);
});

export default i18n;
