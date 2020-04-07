import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { FETCH_CART_ITEMS_COUNT } from '@catalog/store/modules/cart/definitions';


const cartModule = namespace("cart");


@Component({
  name: "CartButton"
})
export default class CartButton extends Vue {

  @cartModule.Getter("itemsQuantity")
  itemsQuantity!: number;

  @cartModule.Action(FETCH_CART_ITEMS_COUNT)
  fetchItemsQuantity!: () => void;

  mounted(){
    this.fetchItemsQuantity();
  }

  onClick() {
    // todo: open Cart Details page
  }
}
