import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";


@Component({
  name: "ChangeItemQuantity"
})
export default class ChangeItemQuantity extends Vue {
  @Prop()
  quantity!: number;

  model = 0;

  mounted (){
    this.model = this.quantity;
  }

  plusIcon = faPlusCircle;
  minusIcon = faMinusCircle;

  increment() {
    this.model++;
    this.onQuantityChanged(this.model);
  }

  decrement() {
    if(this.model > 1) {
      this.model--;
      this.onQuantityChanged(this.model);
    }
  }

  textChanged(value: string) {
    this.model = +value;
    this.onQuantityChanged(this.model);
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
