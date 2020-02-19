<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <b-table id="orders-list"
             striped
             hover
             :bordered="true"
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
    this.resizeTableColumns();
  }

  resizeTableColumns() {
    let thElm: any;
    let startOffset: number;

    Array.prototype.forEach.call(
      document.querySelectorAll("table th"),
      function (th: any) {
        console.log(typeof th)
        th.style.position = 'relative';

        const grip = document.createElement('div');
        grip.style.top = '0';
        grip.style.right = '0';
        grip.style.bottom = '0';
        grip.style.width = '5px';
        grip.style.position = 'absolute';
        grip.style.cursor = 'col-resize';
        grip.addEventListener('mousedown', function (e) {
          thElm = th;
          startOffset = th.offsetWidth - e.pageX;
        });

        th.appendChild(grip);
      });

    document.addEventListener('mousemove', function (e) {
      if (thElm) {
        thElm.style.width = startOffset + e.pageX + 'px';
      }
    });

    document.addEventListener('mouseup', function () {
      thElm = undefined;
    });
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
