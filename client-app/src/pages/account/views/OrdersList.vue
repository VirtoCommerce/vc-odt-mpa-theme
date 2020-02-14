<template>
  <div>
    <h2>OrdersList</h2>
    <b-table striped
             hover
             :items="orders"
             :fields="fields"></b-table>
  </div>
</template>

<script>
import { GET_ORDERS } from "../store/modules/orders/action-types";
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class OrdersList extends Vue{
  get orders() {
    return this.$store.getters.ordersPage;
  }

  get fields() {
    return this.$store.getters.gridColumns;
  }
  // get isLoading() {
  //   return this.$store.getters.orders.isLoading;
  // }

  mounted() {
    this.$store.dispatch(GET_ORDERS);
  }

}
</script>

<style>

</style>
