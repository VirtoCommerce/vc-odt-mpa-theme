import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import i18n from '@i18n';
import { ShoppingCart, CartLineItem, ChangeCartItemQty } from "core/api/api-clients";
import CartHeader from "libs/shopping-cart/components/cart-header/index.vue";
import CartItemsList from "libs/shopping-cart/components/cart-items-list/index.vue";
import CartSummary from "libs/shopping-cart/components/cart-summary/index.vue";
import { FETCH_CART, DELETE_ITEM_FROM_CART, CHANGE_ITEM_QUANTITY, CLEAR_CART } from "libs/shopping-cart/store/cart/definitions";

const cartModule = namespace("cart");


@Component({
  name: "ActiveOrderSidebar",
  components: {
    CartHeader,
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

  @cartModule.Action(CHANGE_ITEM_QUANTITY)
  changeLineItemQuantity!: (payload: ChangeCartItemQty) => void;

  @cartModule.Action(CLEAR_CART)
  clearCart!: () => void;

  mounted(){
    this.fetchCart();
  }

  confirmDeleteItem(item: CartLineItem) {
    this.$bvModal.msgBoxConfirm(i18n.t('shopping-cart.confirm-delete-modal.message', [ item.sku ]) as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('shopping-cart.confirm-delete-modal.title') as string,
      okTitle: i18n.t('shopping-cart.confirm-delete-modal.ok') as string,
      cancelTitle: i18n.t('shopping-cart.confirm-delete-modal.cancel') as string,
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

  confirmClearCart(){
    this.$bvModal.msgBoxConfirm(i18n.t('shopping-cart.confirm-clear-modal.message') as string, {
      size: 'md',
      buttonSize: 'md',
      title: i18n.t('shopping-cart.confirm-clear-modal.title') as string,
      okTitle: i18n.t('shopping-cart.confirm-clear-modal.ok') as string,
      cancelTitle: i18n.t('shopping-cart.confirm-clear-modal.cancel') as string,
      footerClass: ['p-2', 'flex-row-reverse justify-content-start'],
      hideHeaderClose: false,
      centered: true
    })
      .then(value => {
        if(value) {
          this.clearCart();
        }
      });
  }

  changeQuantity(item: CartLineItem, quantity: number) {
    const changeItemQty = new ChangeCartItemQty();
    changeItemQty.lineItemId = item.id;
    changeItemQty.quantity = quantity;
    this.changeLineItemQuantity(changeItemQty)
  }

}
