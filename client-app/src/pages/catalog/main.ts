import Vue from "vue";
import i18n from "@i18n";
import store from "store"
import App from "@catalog/App.vue";
import AddToCartButton from "@catalog/components/add-to-cart-button/index.vue";
import CartComponent from "@catalog/components/cart-component/index.vue";
import InitializationService from '@common/services/initialization.service';
import cartModule from "./store/modules/cart";

store.registerModule("cart", cartModule);

InitializationService.initializeCommon();

new Vue({
  i18n,
  store,
  components: {
    AddToCartButton
  }
}).$mount("#app");

// const elements = document.getElementsByClassName("add-item-to-cart") as any;

// for(const el of elements){
//   new Vue({
//     data: {
//       productId: 0
//     },
//     store,
//     mounted: function () {
//       this.productId = +this.$el.attributes.getNamedItem("product-id")!.value;
//     },
//     render ( h ) {
//       return h(AddToCartButton, {
//         props: {
//           productId: +this.productId
//         }
//       })
//     }
//   }).$mount(el, true);
// }


new Vue({
  i18n,
  store,
  render: h => h(CartComponent)
}).$mount("#cart-app", true);
