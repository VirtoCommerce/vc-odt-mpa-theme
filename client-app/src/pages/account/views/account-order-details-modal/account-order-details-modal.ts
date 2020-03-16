import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import OrderDetailsItem from "@account/components/order-details/order-details-item/index.vue";
import OrderDetailsTotals from "@account/components/order-details/order-details-totals/index.vue";
import { FETCH_ORDER, CLEAR_SELECTED_ORDER} from "@account/store/modules/orders-list/definitions";
import { CustomerOrder } from "@common/api/api-clients";

const ordersListModule = namespace("ordersListModule");

@Component({
  props: {
    orderId: String
  },
  components: {
    OrderDetailsItem,
    OrderDetailsTotals
  }
})
export default class AccountOrderDetails extends Vue {
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  showDetails = true;
  showOrderDetails = false;

  @Watch("orderId")
  onPropertyChanged(value: string) {
    this.fetchOrder(value);
  }

  @ordersListModule.Getter("selectedOrder")
  private order!: CustomerOrder;

  @ordersListModule.Getter("orderIsLoaded")
  private orderIsLoaded!: boolean;

  @ordersListModule.Action(FETCH_ORDER)
  private fetchOrder!: (orderId: string) => CustomerOrder;

  @ordersListModule.Action(CLEAR_SELECTED_ORDER)
  private hideModal!: () => void;
}
