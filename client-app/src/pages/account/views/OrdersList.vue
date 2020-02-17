<template>
  <div>
    <h2>OrdersList</h2>
    <b-table id="orders-table"
             striped
             hover
             :items="ordersList.orders"
             :fields="ordersList.listConfig.columns">
    </b-table>
    <div class="d-flex justify-content-between">
      <b-pagination v-model="currentPage"
                    aria-controls="oders-table"
                    :total-rows="ordersList.totalCount"
                    :per-page="ordersList.listConfig.pageSize"
                    @change="pageChanged()"></b-pagination>
      <div>
        <select v-model="pageSize"
                class="form-control"
                @change="pageSizeChanged()">
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
export default class OrdersListPage extends Vue{


  @ordersListModule.Getter('ordersList')
  private ordersList!: OrdersList;

  @ordersListModule.Getter('isLoading')
  private isLoading!: boolean;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig:  OrdersListConfig) => void

  currentPage = 1;
  pageSize = 10;
  pageSizes = pageSizes;

  mounted() {
    this.currentPage = this.ordersList.listConfig.pageNumber;
    this.pageSize = this.ordersList.listConfig.pageSize || defaultPageSize;
    this.fetchOrders();
  }

  pageChanged() {
    this.setListConfig(({ ...this.ordersList.listConfig, pageNumber: this.currentPage }))
  }

  pageSizeChanged() {
    this.setListConfig(({ ...this.ordersList.listConfig, pageSize: this.pageSize }))
  }

}
</script>

<style>

</style>
