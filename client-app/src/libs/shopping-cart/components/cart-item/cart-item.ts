import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { CartLineItem } from "core/api/api-clients";
import ChangeItemQuantity from "libs/shopping-cart/components/change-item-quantity/index.vue";


@Component({
  name: "CartItem",
  components: {
    ChangeItemQuantity
  }
})
export default class CartItem extends Vue {
  @Prop()
  item!: CartLineItem;

  deleteIcon = faTrashAlt;

  onItemDeleted() {
    this.$emit("item-deleted", this.item);
  }

  onQuantityChanged(quantity: number) {
    this.$emit("quantity-changed", this.item, quantity);
  }

  quantityChanged(quantity: number) {
    this.onQuantityChanged(quantity);
  }

}
