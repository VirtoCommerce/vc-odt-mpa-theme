import Vue from "vue";
import i18n from "@i18n";
import AddToCartButton from "components/shopping-cart/add-to-cart-button/index.vue";
import CartButton from "components/shopping-cart/cart-button/index.vue";
import store from "store";
import draftsListModule from "@account/store/modules/drafts-list"
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA } from '@account/store/modules/drafts-list/definitions';
import { CartSearchCriteria } from "@common/api/api-clients";
import { orderDraftType, startPageNumber } from "@common/constants";
import InitializationService from "@common/services/initialization.service";
import AddToDraftButton from "@components/shopping-cart/add-to-order-draft-button/index.vue";
import ActiveOrderSidebar from './components/active-order-sidebar/index.vue';
import cartModule from "./store/modules/cart";


store.registerModule("cart", cartModule);
store.registerModule("draftsListModule", draftsListModule)

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


const criteria = new CartSearchCriteria();
criteria.pageNumber = startPageNumber;
criteria.pageSize = Number.MAX_SAFE_INTEGER;
criteria.type = orderDraftType;
store.dispatch(`draftsListModule/${SET_DRAFTS_SEARCH_CRITERIA}`, criteria);


const addToDraftElements = document.getElementsByClassName("app-add-item-to-draft");

for(const addToDraftEl of addToDraftElements){
  const productId = addToDraftEl.attributes.getNamedItem("product-id")!.value
  new Vue({
    i18n,
    store,
    render ( h ) {
      return h(AddToDraftButton, {
        props: {
          productId: productId
        }
      })
    }
  }).$mount(addToDraftEl);
}
