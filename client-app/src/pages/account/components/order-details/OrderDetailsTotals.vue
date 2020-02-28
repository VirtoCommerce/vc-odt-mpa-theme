<template>
  <div class="row">
    <div class="col-md-6">
      <div class="list-group list-group-flush">
        <div class="list-group-item d-flex justify-content-between">
          <span class="font-weight-bold">{{ $t("account.orders.order-details.subtotal") }}</span>
          {{ order.subTotal ? order.subTotal.formattedAmount : "" }}
        </div>
        <div class="list-group-item d-flex justify-content-between">
          <span class="font-weight-bold">{{ $t("account.orders.order-details.shipping") }}</span>
          {{ shipping }}
        </div>
        <div class="list-group-item d-flex justify-content-between">
          <span class="font-weight-bold">{{ $t("account.orders.order-details.total") }}</span>
          {{ order.total ? order.total.formattedAmount : "" }}
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="list-group list-group-flush">
        <div class="list-group-item d-flex justify-content-between">
          <span class="font-weight-bold">{{ $t("account.orders.order-details.created-by") }}</span>
          {{ order.createdBy ? order.createdBy : "" }}
        </div>
        <div class="list-group-item d-flex justify-content-between">
          <span class="font-weight-bold">{{ $t("account.orders.order-details.status") }}</span>
          {{ order.status ? order.status : "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { CustomerOrder } from "@common/api/api-clients";

@Component
export default class OrderDetailsTotals extends Vue {
  @Prop()
  order!: CustomerOrder;

  get shipping(): string | undefined {
    return this.order.shippingTotal?.formattedAmount == "0,00 $" ? "Free" : this.order.shippingTotal?.formattedAmount;
  }
}
</script>
