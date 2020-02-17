<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <h2>OrdersList</h2>
    <b-table id="orders-table"
             striped
             hover
             sele
             :items="ordersList.orders"
             :fields="ordersList.listConfig.columns">
    </b-table>
    <div class="d-flex justify-content-between">
      <b-pagination :value="ordersList.listConfig.pageNumber"
                    aria-controls="oders-table"
                    :total-rows="ordersList.totalCount"
                    :per-page="ordersList.listConfig.pageSize"
                    @change="pageChanged($event)"></b-pagination>
      <div>
        <select :value="ordersList.listConfig.pageSize"
                class="form-control"
                @change="pageSizeChanged($event.target.value)">
          <option v-for="ps in pageSizes"
                  :key="ps"
                  :value="ps">
            {{ ps }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig  } from "@account/store/modules/orders-list/types";
import Component from "vue-class-component";
import Vue from "vue";
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { pageSizes, defaultPageSize } from "@common/constants";

const ordersListModule = namespace('ordersListModule');

@Component
export default class AccountOrders extends Vue{


  @ordersListModule.Getter('ordersList')
  private ordersList!: OrdersList;

  @ordersListModule.Getter('isLoading')
  private isLoading!: boolean;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig:  OrdersListConfig) => void

  pageSizes = pageSizes;

  mounted() {
    this.fetchOrders();
  }

  pageChanged(page: number) {
    this.setListConfig(({ ...this.ordersList.listConfig, pageNumber: page }))
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig(({ ...this.ordersList.listConfig, pageSize: pageSize }))
  }

}
</script>

<style>

</style>
