import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { CartLineItem } from '@common/api/api-clients';


@Component({
  name: "CartItem"
})
export default class CartItem extends Vue {
  @Prop()
  item!: CartLineItem;

  deleteIcon = faTrashAlt;

  onItemDeleted() {
    this.$emit("itemDeleted", this.item);
  }

  onQuantityChanged() {
    this.$emit("quantityChanged", this.item);
  }


}
