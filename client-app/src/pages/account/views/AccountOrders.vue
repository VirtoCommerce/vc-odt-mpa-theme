<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div v-if="ordersList.totalCount > 0">
      <b-table id="orders-list"
               striped
               hover
               :items="ordersList.orders"
               :fields="ordersList.listConfig.columns">
        <!-- A custom formatted header cell for field 'name' -->
        <template v-slot:head()="data">
          <span class="text-info">{{ $t( `account.orders.grid.columns.${data.column.split('.').join('_')}`) }}</span>
        </template>

        <!-- A custom formatted column -->
        <template v-slot:cell(createdDate)="data">
          <b class="text-info">{{ data.value | moment('ddd, DD/MM/YY') }}</b>, <b>{{ data.value.first }}</b>
        </template>
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
            <option v-for="pageSize in pageSizes"
                    :key="pageSize"
                    :value="pageSize">
              {{ pageSize }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div v-if="!isLoading && ordersList.totalCount == 0"
         class="mt-3">
      <span>{{ $t("account.orders.no-orders") }}</span>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from 'vuex-class';
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig  } from "@account/store/modules/orders-list/types";
import { pageSizes } from "@common/constants";

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
    this.setListConfig(({ ...this.ordersList.listConfig, pageNumber: 1, pageSize: pageSize }))
  }

}
</script>
