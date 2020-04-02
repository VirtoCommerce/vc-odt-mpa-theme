import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "AddToCartButton"
})
export default class CartComponent extends Vue {


  @Getter("counter")
  counter!: number;
}
