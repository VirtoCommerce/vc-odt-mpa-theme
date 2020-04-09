import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import CartItem from "components/shopping-cart/cart-item/index.vue";
import { CartLineItem } from '@common/api/api-clients';


@Component({
  name: "CartItemsList",
  components: {
    CartItem
  }
})
export default class CartItemsList extends Vue {
  @Prop()
  items!: CartLineItem[];

  onItemDeleted(item: CartLineItem) {
    this.$emit("item-deleted", item);
  }

  onQuantityChanged(item: CartLineItem) {
    this.$emit("quantity-changed", item);
  }

}
