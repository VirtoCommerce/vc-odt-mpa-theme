import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import i18n from '@i18n';
import CartItemsList from "@catalog/components/cart-items-list/index.vue";
import CartSummary from "@catalog/components/cart-summary/index.vue";
import { FETCH_CART, DELETE_ITEM_FROM_CART, CHANGE_ITEM_QUANTITY } from "@catalog/store/modules/cart/definitions";
import { ShoppingCart, CartLineItem } from "@common/api/api-clients";

const cartModule = namespace("cart");


@Component({
  name: "ActiveOrderSidebar",
  components: {
    CartSummary,
    CartItemsList
  }
})
export default class ActiveOrderSidebar extends Vue {

  @cartModule.Getter("cart")
  cart!: ShoppingCart;

  @cartModule.Action(FETCH_CART)
  fetchCart!: () => void;

  @cartModule.Action(DELETE_ITEM_FROM_CART)
  deleteLineItem!: (id: string) => void;

  mounted(){
    this.fetchCart();
  }

  confirmDeleteItem(item: CartLineItem) {
    this.$bvModal.msgBoxConfirm(i18n.t('catalog.active-order.confirm-delete-modal.message', [ item.sku ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('catalog.active-order.confirm-delete-modal.title') as string,
      okTitle: i18n.t('catalog.active-order.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('catalog.active-order.confirm-delete-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          this.deleteLineItem(item.id!);
        }
      });
  }

  clearCart(){
    // todo:
  }

  changeQuantity(item: CartLineItem) {
    // todo:
  }
}
