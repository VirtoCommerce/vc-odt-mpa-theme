import Vue from "vue";
import i18n from "@i18n";
import App from "@catalog/App.vue";
import AddToCartButton from "@catalog/components/add-to-cart-button/index.vue";
import CartComponent from "@catalog/components/cart-component/index.vue";
import InitializationService from '@common/services/initialization.service';
import store from "./store"

InitializationService.initializeCommon();

new Vue({
  //delimiters: [ "${", "}$" ], //it works only into server rendered. It does not inherit by child components
  i18n,
  store,
  components: {
    AddToCartButton,
    CartComponent
  }
}).$mount("#app");
