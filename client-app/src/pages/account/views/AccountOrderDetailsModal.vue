<template>
  <b-modal id="orderDetailsModal"
           :visible="orderIsLoaded"
           :no-enforce-focus="true"
           hide-footer
           size="lg"
           @hide="hideModal()">
    <div slot="modal-title">
      {{ $t("account.orders.order-details.title") }}
    </div>
    <div role="tablist">
      <b-card no-body class="mb-1 border-0">
        <b-card-header v-b-toggle.accordion-1
                       header-tag="header"
                       class="p-3 bg-white"
                       role="tab">
          <div class="d-flex justify-content-between align-items-center">
            <b :class="{ 'text-primary': showDetails }">{{ $t("account.orders.order-details.details") }}</b>
            <font-awesome-layers v-if="showDetails" :class="{ 'text-primary': showDetails }">
              <font-awesome-icon :icon="faAngleUp" size="lg"></font-awesome-icon>
            </font-awesome-layers>
            <font-awesome-layers v-if="!showDetails">
              <font-awesome-icon :icon="faAngleDown" size="lg"></font-awesome-icon>
            </font-awesome-layers>
          </div>
        </b-card-header>
        <b-collapse id="accordion-1"
                    v-model="showDetails"
                    visible
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body>
            <order-details-totals :order="order"></order-details-totals>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1 border-0">
        <b-card-header v-b-toggle.accordion-2
                       header-tag="header"
                       class="p-3 bg-white"
                       role="tab">
          <div class="d-flex justify-content-between align-items-center">
            <b :class="{ 'text-primary': showOrderDetails }">{{ $t("account.orders.order-details.order-details") }}</b>
            <font-awesome-layers v-if="showOrderDetails" :class="{ 'text-primary': showOrderDetails }">
              <font-awesome-icon :icon="faAngleUp" size="lg"></font-awesome-icon>
            </font-awesome-layers>
            <font-awesome-layers v-if="!showOrderDetails">
              <font-awesome-icon :icon="faAngleDown" size="lg"></font-awesome-icon>
            </font-awesome-layers>
          </div>
        </b-card-header>
        <b-collapse id="accordion-2"
                    v-model="showOrderDetails"
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body v-for="item in order.items" :key="item.id">
            <order-details-item :item="item"></order-details-item>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import OrderDetailsItem from "@account/components/order-details/OrderDetailsItem.vue";
import OrderDetailsTotals from "@account/components/order-details/OrderDetailsTotals.vue";
import { FETCH_ORDER, HIDE_MODAL} from "@account/store/modules/orders-list/definitions";
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

  @ordersListModule.Action(HIDE_MODAL)
  private hideModal!: () => void;
}
</script>
