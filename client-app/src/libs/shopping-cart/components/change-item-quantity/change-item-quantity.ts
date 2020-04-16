import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit, Watch } from "vue-property-decorator";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";


@Component({
  name: "ChangeItemQuantity"
})
export default class ChangeItemQuantity extends Vue {
  @Prop()
  quantity!: number;


  @Watch("quantity")
  watchQuantity(value: number) {
    this.model = value;
  }

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
    const intValue = parseInt(value, 10)
    if( !isNaN(intValue) ) {
      this.model = intValue;
      this.onQuantityChanged(this.model);
    } else {
      this.$forceUpdate();
    }

  }

  keydown(event: any) {
    const e = event as KeyboardEvent;

    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }


  onQuantityChanged(value: number) {
    this.$emit("quantity-changed", value);
  }
}
