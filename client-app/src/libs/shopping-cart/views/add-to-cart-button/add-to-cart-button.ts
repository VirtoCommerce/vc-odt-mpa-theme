import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { AddCartItem } from 'core/api/api-clients';
import { ADD_ITEM_TO_CART } from 'libs/shopping-cart/store/cart/definitions';

const cartModule = namespace("cart");

@Component({
  name: "AddToCartButton"
})
export default class AddToCartButton extends Vue {
  @Prop()
  productId!: string;

  @cartModule.Action(ADD_ITEM_TO_CART)
  addItemToCart!: (addItem: AddCartItem) => void;

  onClick() {
    const addItem = new AddCartItem();
    addItem.productId = this.productId;
    addItem.quantity = 1;
    this.addItemToCart(addItem);
  }

}
