<template>
  <div>
    <h2>OrdersList</h2>
    <b-table striped
             hover
             :items="ordersList.orders"
             :fields="ordersList.listConfig.columns"></b-table>

    <button class="btn btn-primary"
            @click.prevent="setPage(2)">
      Next page
    </button>
  </div>
</template>

<script lang="ts">
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig  } from "@account/store/modules/orders-list/types";
import Component from "vue-class-component";
import Vue from "vue";
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
const ordersListModule = namespace('ordersListModule');


@Component
export default class OrdersListPage extends Vue{


  @ordersListModule.Getter('ordersList')
  private ordersList!: OrdersList;

  @ordersListModule.Getter('isLoading')
  private isLoading!: boolean;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig:  OrdersListConfig) => void

  mounted() {
    this.fetchOrders();
  }

  setPage(page: number) {
    this.setListConfig({ ...this.ordersList.listConfig, pageNumber: page });
  }

}
</script>

<style>

</style>
