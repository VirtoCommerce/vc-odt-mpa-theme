import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import OrderDetailsItem from "@account/components/order-details/order-details-item/index.vue";
import OrderDetailsTotals from "@account/components/order-details/order-details-totals/index.vue";
import { CLEAR_SELECTED_ORDER } from "@account/store/modules/orders-list/definitions";

const ordersListModule = namespace("ordersListModule");

@Component({
  props: {
    order: Object,
    showDetails: Boolean,
    showOrderDetails: Boolean
  },
  components: {
    OrderDetailsItem,
    OrderDetailsTotals
  }
})
export default class AccountOrderDetails extends Vue {
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  @ordersListModule.Action(CLEAR_SELECTED_ORDER)
  private hideModal!: () => void;
}
