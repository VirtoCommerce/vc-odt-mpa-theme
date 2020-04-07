import Vue from "vue";
import i18n from "@i18n";
import AddToCartButton from "components/shopping-cart/add-to-cart-button/index.vue";
import CartButton from "components/shopping-cart/cart-button/index.vue";
import store from "store";
import InitializationService from "@common/services/initialization.service";
import ActiveOrderSidebar from './components/active-order-sidebar/index.vue';
import cartModule from "./store/modules/cart";

store.registerModule("cart", cartModule);

InitializationService.initializeCommon();

const addToCartElements = document.getElementsByClassName("app-add-item-to-cart");

for(const addToCartEl of addToCartElements){
  const productId = addToCartEl.attributes.getNamedItem("product-id")!.value
  new Vue({
    i18n,
    store,
    render ( h ) {
      return h(AddToCartButton, {
        props: {
          productId: productId
        }
      })
    }
  }).$mount(addToCartEl, true);
}

new Vue({
  i18n,
  store,
  render: h => h(CartButton)
}).$mount("#app-cart", true);



new Vue({
  i18n,
  store,
  render: h => h(ActiveOrderSidebar)
}).$mount("#app-cart-sidebar");
