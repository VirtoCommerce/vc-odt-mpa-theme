import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  name: "ChangeItemQuantity"
})
export default class ChangeItemQuantity extends Vue {
  @Prop()
  quantity!: number;

  // @Prop()
  // max!: number;

  plusIcon = faPlusSquare;
  minusIcon = faMinusSquare;

  increment() {
    this.quantity++;
    this.onQuantityChanged(this.quantity);
  }

  decrement() {
    if(this.quantity > 0) {
      this.quantity--;
      this.onQuantityChanged(this.quantity);
    }
  }


  textChanged(value: string) {
    this.quantity = +value;
    this.onQuantityChanged(this.quantity);
  }

  keydown(event: any) {
    if (event.key === 'Enter') {
      this.textChanged(event.target.value);
    }
  }

  onQuantityChanged(value: number) {
    this.$emit("quantity-changed", value);
  }

}
