<template>
  <b-modal id="orderDetailsModal"
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
            <div class="row">
              <div class="col-md-6">
                <div class="list-group list-group-flush">
                  <div class="list-group-item d-flex justify-content-between">
                    <span class="font-weight-bold">{{ $t("account.orders.order-details.subtotal") }}</span>
                    {{ subtotal }}
                  </div>
                  <div class="list-group-item d-flex justify-content-between">
                    <span class="font-weight-bold">{{ $t("account.orders.order-details.shipping") }}</span>
                    {{ shipping }}
                  </div>
                  <div class="list-group-item d-flex justify-content-between">
                    <span class="font-weight-bold">{{ $t("account.orders.order-details.total") }}</span>
                    {{ total }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="list-group list-group-flush">
                  <div class="list-group-item d-flex justify-content-between">
                    <span class="font-weight-bold">{{ $t("account.orders.order-details.created-by") }}</span>
                    {{ createdBy }}
                  </div>
                  <div class="list-group-item d-flex justify-content-between">
                    <span class="font-weight-bold">{{ $t("account.orders.order-details.status") }}</span>
                    {{ status }}
                  </div>
                </div>
              </div>
            </div>
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
            <b-card-text>{{ item.name }}</b-card-text>
            <b-card-text>
              <span class="font-weight-bold">{{ $t("account.orders.order-details.sku") }}</span>
              {{ item.sku }}
            </b-card-text>
            <b-card-text>
              <span class="font-weight-bold">{{ $t("account.orders.order-details.unit-price") }}</span>
              {{ item.placedPrice.formattedAmount }}
            </b-card-text>
            <b-card-text>
              <span class="font-weight-bold">{{ $t("account.orders.order-details.quantity") }}</span>
              {{ item.quantity }}
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div slot="modal-cancel">
      {{ $t("account.orders.order-details.cancel") }}
    </div>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from 'vue-property-decorator';
import { namespace } from "vuex-class";
import { FETCH_ORDER } from "@account/store/modules/orders-list/definitions";
import { CustomerOrder } from "@common/api/api-clients";

const ordersListModule = namespace("ordersListModule");

@Component({
  props: {
    orderId: String
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

  get subtotal(): string | undefined {
    return this.order.subTotal?.formattedAmount;
  }
  get shipping(): string | undefined {
    return this.order.shippingTotal?.formattedAmount == "$0.00"
      ? "Free"
      : this.order.shippingTotal?.formattedAmount;
  }
  get total(): string | undefined {
    return this.order.total?.formattedAmount;
  }
  get createdBy(): string | undefined {
    return this.order.createdBy;
  }
  get status(): string | undefined {
    return this.order.status;
  }

}
</script>
