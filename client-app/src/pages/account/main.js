import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LocalizationService } from "@/common/api.service";
import i18n from '@/i18n'


Vue.config.productionTip = false;

//TODO: Need to move loading localization from here into i18n.ts
//Load localization messages from storefront Api for current language (is taken from Url)
LocalizationService.get().then(({ data })  => {
    i18n.setLocaleMessage("en", data);
});

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
