import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ShoppingCart } from '@common/api/api-clients';


@Component({
  name: "CartHeader"
})
export default class CartHeader extends Vue {
  @Prop()
  cart!: ShoppingCart;

  @Prop()
  title!: string;

  onClearCartClicked(){
    this.$emit("clearCartClicked");
  }
}
