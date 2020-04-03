import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { FETCH_CART } from '@catalog/store/modules/cart/definitions';
import { ShoppingCart } from '@common/api/api-clients';


const cartModule = namespace("cart");


@Component({
  name: "CartDetailsComponent"
})
export default class CartComponent extends Vue {

  @cartModule.Getter("cart")
  cart!: ShoppingCart;

  @cartModule.Action(FETCH_CART)
  fetchCart!: () => void;

  mounted(){
    this.fetchCart();
  }

  onClick() {
    // todo: open Cart Details page
  }
}
