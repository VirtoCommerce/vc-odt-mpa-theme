<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import { OrderLineItem } from "@common/api/api-clients";

@Component
export default class OrderDetailsItem extends Vue {
  @Prop()
  item!: OrderLineItem
}
</script>
