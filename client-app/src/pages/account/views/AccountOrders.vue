<template>
  <div>
    <loading :active.sync="isLoading" :z-index="5000"></loading>
    <account-order-details-modal :order-id="selectedOrderId">
    </account-order-details-modal>
    <div class="row">
      <div class="col-md-6">
        <label for="start-datepicker">{{ $t("account.orders.from") }}</label>
        <b-form-datepicker id="start-datepicker"
                           :value="ordersList.listConfig.filters.startDate"
                           value-as-date
                           reset-button
                           :label-reset-button="$t('account.orders.reset')"
                           :state="isDateValid"
                           :locale="locale"
                           v-bind="datepickerLabels"
                           class="mb-2"
                           @input="changeStartDate($event)"></b-form-datepicker>
      </div>
      <div class="col-md-6">
        <label for="end-datepicker">{{ $t("account.orders.to") }}</label>
        <b-form-datepicker id="end-datepicker"
                           :value="ordersList.listConfig.filters.endDate"
                           value-as-date
                           reset-button
                           :label-reset-button="$t('account.orders.reset')"
                           :state="isDateValid"
                           :locale="locale"
                           v-bind="datepickerLabels"
                           class="mb-2"
                           @input="changeEndDate($event)"></b-form-datepicker>
      </div>
      <div class="col-md-12">
        <span v-if="!isDateValid && isDateValid != null" class="text-danger">{{ $t("account.orders.date-error") }}</span>
      </div>
    </div>
    <div v-if="ordersList.totalCount > 0">
      <b-table
        id="orders-list"
        stacked="md"
        striped
        hover
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
          aria-controls="oders-table"
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
    </div>
    <div v-if="!isLoading && ordersList.totalCount == 0" class="mt-3">
      <span>{{ $t("account.orders.no-orders") }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages } from 'vue-i18n';
import { namespace } from "vuex-class";
import { BvTableCtxObject } from "bootstrap-vue";
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig } from "@account/store/modules/orders-list/types";
import { CustomerOrder } from "@common/api/api-clients";
import { pageSizes, locale } from "@common/constants";
import AccountOrderDetailsModal from "./AccountOrderDetailsModal.vue";

const ordersListModule = namespace("ordersListModule");

@Component({
  components: {
    AccountOrderDetailsModal
  }
})
export default class AccountOrders extends Vue {
  @ordersListModule.Getter("ordersList")
  private ordersList!: OrdersList;

  @ordersListModule.Getter("isLoading")
  private isLoading!: boolean;

  @ordersListModule.Getter("getDatepickerLocales")
  private datepickerLabels!: LocaleMessages | {};

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList;

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig: OrdersListConfig) => void;

  selectedOrder: CustomerOrder | null = null;

  selectedOrderId: string | null = null;

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  pageSizes = pageSizes;

  locale = locale;

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

  dateChanged() {
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate < this.endDate;
      if (this.isDateValid) {
        this.setListConfig({ ...this.ordersList.listConfig, filters: {startDate: this.startDate, endDate: this.endDate} })
      }
    }
    else  {
      this.isDateValid = true;
      this.setListConfig({ ...this.ordersList.listConfig, filters: {startDate: this.startDate, endDate: this.endDate} })
    }
  }

  changeStartDate(date: Date) {
    this.startDate = date;
    this.dateChanged();
  }

  changeEndDate(date: Date) {
    this.endDate = date;
    this.dateChanged();
  }
}
</script>
