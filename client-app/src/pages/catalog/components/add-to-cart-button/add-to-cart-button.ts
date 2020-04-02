import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "AddToCartButton"
})
export default class AddToCartButton extends Vue {
  @Prop()
  productId!: string;


  @Getter("counter")
  counter!: number;
  @Action("increment")
  increment() {
    this.counter++;
  }
}
