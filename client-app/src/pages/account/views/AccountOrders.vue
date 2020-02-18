<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <b-table id="orders-list"
             striped
             hover
             :items="ordersList.orders"
             :fields="ordersList.listConfig.columns">
      <!-- A custom formatted header cell for field 'name' -->
      <template v-slot:head()="data">
        <span class="text-info">{{ $t( `grids.orders_list.columns.${data.column.split('.').join('_')}`) }}</span>
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
    this.setListConfig(({ ...this.ordersList.listConfig, pageNumber: 1, pageSize: pageSize }))
  }

}
</script>

<style>

</style>
