<template>
  <div>
    <loading :active.sync="isLoading" :z-index="5000"></loading>
    <account-order-details-modal :order-id="selectedOrderId">
    </account-order-details-modal>
    <order-filter :orders-filter="ordersList.listConfig.filters"
                  :available-order-statuses="availableOrderStatuses"
                  @filtersChanged="filtersChanged"></order-filter>
    <div v-if="!isLoading">
      <p>{{ $t("account.orders.grid.text-above") }}</p>
      <b-table
        id="orders-table"
        stacked="md"
        striped
        hover
        :show-empty="true"
        :empty-text="$t('account.orders.no-orders')"
        :items="ordersList.orders"
        :fields="ordersList.listConfig.columns"
        no-local-sorting
        @sort-changed="sortChanged">
        <template v-slot:cell(number)="data">
          <a class="text-primary btn d-inline p-0" @click="openOrderDetails(data.value)">
            {{ data.value }}
          </a>
        </template>
        <template v-slot:cell(createdDate)="data">
          <span>{{ data.value | moment("ddd, DD/MM/YY") }}</span>
        </template>
      </b-table>

      <div class="d-flex justify-content-between">
        <b-pagination
          :value="ordersList.listConfig.pageNumber"
          aria-controls="orders-table"
          :total-rows="ordersList.totalCount"
          :per-page="ordersList.listConfig.pageSize"
          @change="pageChanged($event)"></b-pagination>
        <div>
          <select
            :value="ordersList.listConfig.pageSize"
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
      <p>{{ $t("account.orders.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import OrderFilter from "@account/components/orders-filter/index.vue";
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig, OrdersListFilters } from "@account/store/modules/orders-list/types";
import { CustomerOrder } from "@common/api/api-clients";
import { pageSizes, ordersStatuses } from "@common/constants";
import AccountOrderDetailsModal from "./account-order-details-modal/index.vue";

const ordersListModule = namespace("ordersListModule");

@Component({
  components: {
    AccountOrderDetailsModal,
    OrderFilter
  }
})
export default class AccountOrders extends Vue {
  @ordersListModule.Getter("ordersList")
  private ordersList!: OrdersList;

  @ordersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList;

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig: OrdersListConfig) => void;

  selectedOrder: CustomerOrder | null = null;

  selectedOrderId: string | null = null;

  pageSizes = pageSizes;

  availableOrderStatuses = ordersStatuses;

  mounted() {
    this.fetchOrders();
  }

  pageChanged(page: number) {
    this.setListConfig({ ...this.ordersList.listConfig, pageNumber: page });
  }

  pageSizeChanged(pageSize: number) {
    this.setListConfig({ ...this.ordersList.listConfig, pageNumber: 1, pageSize: pageSize });
  }

  sortChanged(ctx: BvTableCtxObject) {
    const sortDirection = ctx.sortDesc ? "desc" : "asc";
    const sortExpression = `${ctx.sortBy}:${sortDirection}`;
    const listConfig = { ...this.ordersList.listConfig, pageNumber: 1 };
    listConfig.filters = { ...this.ordersList.listConfig.filters, sort: sortExpression };
    this.setListConfig(listConfig);
  }

  openOrderDetails(orderId: string) {
    this.selectedOrderId = orderId;
    this.$bvModal.show("orderDetailsModal");
  }

  filtersChanged(filters: OrdersListFilters) {
    this.setListConfig({ ...this.ordersList.listConfig, filters });
  }

}
</script>
