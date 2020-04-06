import Vue from "vue";
import i18n from "@i18n";
import store from "store";
import AddToCartButton from "@catalog/components/add-to-cart-button/index.vue";
import CartComponent from "@catalog/components/cart-component/index.vue";
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
  render: h => h(CartComponent)
}).$mount("#app-cart", true);



new Vue({
  i18n,
  store,
  render: h => h(ActiveOrderSidebar)
}).$mount("#app-cart-sidebar");
