<template>
  <b-modal
    id="orderDetailsModal"
    :no-enforce-focus="true"
    size="lg">
    <div slot="modal-title">
      {{ $t("account.orders.order-details.title") }}
    </div>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header"
                       class="p-1"
                       role="tab">
          <b-button
            v-b-toggle.accordion-1
            block
            variant="primary">
            {{ $t("account.orders.order-details.details") }}
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body>
            <order-details-totals :odrer="order"></order-details-totals>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header"
                       class="p-1"
                       role="tab">
          <b-button
            v-b-toggle.accordion-2
            block
            variant="primary">
            {{ $t("account.orders.order-details.order-details") }}
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel">
          <b-card-body v-for="item in order.items" :key="item.id">
            <order-details-item :item="item"></order-details-item>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div slot="modal-cancel" class="btn btn-secondary">
      {{ $t("account.orders.order-details.cancel") }}
    </div>
    <div slot="modal-ok" class="btn btn-primary">
      {{ $t("account.orders.order-details.ok") }}
    </div>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from 'vue-property-decorator';
import { namespace } from "vuex-class";
import OrderDetailsItem from '@account/components/order-details/OrderDetailsItem.vue';
import OrderDetailsTotals from '@account/components/order-details/OrderDetailsTotals.vue';
import { FETCH_ORDER } from "@account/store/modules/orders-list/definitions";
import { CustomerOrder } from "@common/api/api-clients";

const ordersListModule = namespace("ordersListModule");

@Component({
  props: {
    orderId: String
  },
  components: {
    OrderDetailsItem,
    OrderDetailsTotals,
  }
})
export default class AccountOrderDetails extends Vue {
  @Watch('orderId')
  onPropertyChanged(value: string) {
    this.fetchOrder(value)
  }

  @ordersListModule.Getter("selectedOrder")
  private order!: CustomerOrder;

  @ordersListModule.Action(FETCH_ORDER)
  private fetchOrder!: (orderId: string) => CustomerOrder;

}
</script>
