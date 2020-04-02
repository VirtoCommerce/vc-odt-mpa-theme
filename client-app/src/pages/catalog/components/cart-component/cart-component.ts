import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { FETCH_CART } from '@catalog/store/modules/cart/definitions';


const cartModule = namespace("cart");


@Component({
  name: "AddToCartButton"
})
export default class CartComponent extends Vue {

  @cartModule.Getter("itemsQuantity")
  itemsQuantity!: number;

  @cartModule.Action(FETCH_CART)
  fetchCart!: () => void;

  mounted(){
    this.fetchCart();
  }

  onClick() {
    // todo: open Cart Details page
  }
}
