import Vue from "vue";
import i18n from "@i18n";
import store from "store";
import App from "@catalog/App.vue";
import AddToCartButton from "@catalog/components/add-to-cart-button/index.vue";
import CartComponent from "@catalog/components/cart-component/index.vue";
import InitializationService from "@common/services/initialization.service";
import cartModule from "./store/modules/cart";

store.registerModule("cart", cartModule);

InitializationService.initializeCommon();

const addToCartElements = document.getElementsByClassName("app-add-item-to-cart");
for (let i = 0; i < addToCartElements.length; i++) {
  const addToCartEl = addToCartElements.item(i)!;
  new Vue({
    data: {
      productId: ""
    },
    i18n,
    store,
    mounted: function () {
      this.productId = this.$el.attributes.getNamedItem("product-id")!.value;
    },
    render ( h ) {
      return h(AddToCartButton, {
        props: {
          productId: this.productId
        }
      })
    }
  }).$mount(addToCartEl);
}
// for(const addToCartEl of addToCartElements){
//   new Vue({
//     data: {
//       productId: ""
//     },
//     i18n,
//     store,
//     mounted: function () {
//       this.productId = this.$el.attributes.getNamedItem("product-id")!.value;
//     },
//     render ( h ) {
//       return h(AddToCartButton, {
//         props: {
//           productId: this.productId
//         }
//       })
//     }
//   }).$mount(addToCartEl);
// }

new Vue({
  i18n,
  store,
  render: h => h(CartComponent)
}).$mount("#cart-app", true);
