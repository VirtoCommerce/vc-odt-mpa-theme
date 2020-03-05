<template>
  <div>
    <loading :active.sync="isLoading" :z-index="5000"></loading>
    <account-order-details-modal :order-id="selectedOrderId">
    </account-order-details-modal>
    <div class="d-flex flex-wrap">
      <div class="flex-grow-1">
        <label for="begin-date">{{ $t("account.orders.from") }}</label>
        <b-form-datepicker id="begin-date"
                           :value="ordersList.listConfig.filters.startDate"
                           value-as-date
                           reset-button
                           :label-reset-button="$t('account.orders.reset')"
                           :date-format-options="{ 'year': 'numeric', 'month': 'long', 'day': 'numeric' }"
                           :max="new Date()"
                           :state="isDateValid"
                           :locale="locale"
                           v-bind="datepickerLabels"
                           class="mb-2"
                           @input="changeStartDate($event)"></b-form-datepicker>
      </div>
      <div class="flex-grow-1 ml-2">
        <label for="end-date">{{ $t("account.orders.to") }}</label>
        <b-form-datepicker id="end-date"
                           :value="ordersList.listConfig.filters.endDate"
                           value-as-date
                           reset-button
                           :label-reset-button="$t('account.orders.reset')"
                           :date-format-options="{ 'year': 'numeric', 'month': 'long', 'day': 'numeric' }"
                           :max="new Date()"
                           :state="isDateValid"
                           :locale="locale"
                           v-bind="datepickerLabels"
                           class="mb-2"
                           @input="changeEndDate($event)"></b-form-datepicker>
      </div>
      <div class="flex-grow-1 ml-2">
        <label for="keyword-search">{{ $t("account.orders.keyword-search-title") }}</label>
        <b-form-input id="keyword-search"
                      type="text"
                      :debounce="1000"
                      :placeholder="$t('account.orders.enter-keyword')"
                      :value="activeKeyword"
                      @update="changeKeyword($event)"></b-form-input>
      </div>
      <div class="d-flex flex-column justify-content-center flex-grow-1 ml-2">
        <label for="dropdown-filters">{{ $t("account.orders.status-filter.filter-by") }}</label>
        <b-dropdown id="dropdown-filters"
                    class="mb-2"
                    variant="outline-primary"
                    toggle-class="text-left"
                    menu-class="p-2">
          <template v-slot:button-content>
            {{ allStatusesSelected || activeStatuses.length == 0 ? $t("account.orders.status-filter.all") : activeStatuses.length == 1 ? activeStatuses[0] : '...' }}
          </template>
          <b-form-checkbox
            v-model="allStatusesSelected"
            @change="toggleAllStatuses">
            {{ $t("account.orders.status-filter.select-all") }}
          </b-form-checkbox>
          <b-dropdown-divider></b-dropdown-divider>
          <b-form-checkbox-group
            :checked="activeStatuses"
            :options="availableOrderStatuses"
            stacked
            @change="selectedStatusesChanged($event)"></b-form-checkbox-group>
        </b-dropdown>
      </div>
    </div>
    <div v-if="!isDateValid && isDateValid != null">
      <span class="text-danger">{{ $t("account.orders.date-error") }}</span>
    </div>
    <div v-if="!isLoading">
      <b-table
        id="orders-list"
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages } from 'vue-i18n';
import { namespace } from "vuex-class";
import i18n from "@i18n";
import { BvTableCtxObject } from "bootstrap-vue";
import { FETCH_ORDERS, SET_ORDERS_LIST_CONFIG } from "@account/store/modules/orders-list/definitions";
import { OrdersList, OrdersListConfig } from "@account/store/modules/orders-list/types";
import { CustomerOrder } from "@common/api/api-clients";
import { pageSizes, locale, ordersStatuses } from "@common/constants";
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

  @ordersListModule.Getter("activeKeyword")
  private activeKeyword!: string | undefined;

  @ordersListModule.Getter("activeStatuses")
  private activeStatuses!: string[];

  @ordersListModule.Action(FETCH_ORDERS)
  private fetchOrders!: () => OrdersList;

  @ordersListModule.Action(SET_ORDERS_LIST_CONFIG)
  private setListConfig!: (listConfig: OrdersListConfig) => void;

  selectedOrder: CustomerOrder | null = null;

  selectedOrderId: string | null = null;

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  datepickerLabels: LocaleMessages | {} = {};

  pageSizes = pageSizes;

  availableOrderStatuses = ordersStatuses;

  allStatusesSelected = false;

  locale = locale;

  mounted() {
    this.getDatepickerLocalization()
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
    const listConfig = { ...this.ordersList.listConfig };
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate <= this.endDate;
      if (this.isDateValid) {
        listConfig.filters = { ...this.ordersList.listConfig.filters, startDate: this.startDate, endDate: this.prepareEndDate() };
        this.setListConfig(listConfig);
      }
    }
    else  {
      this.endDate == null && this.startDate == null ? this.isDateValid = null : this.isDateValid = true;
      listConfig.filters = { ...this.ordersList.listConfig.filters, startDate: this.startDate, endDate: this.endDate
        ? this.prepareEndDate()
        : undefined };
      this.setListConfig(listConfig);
    }
  }

  getDatepickerLocalization() {
    typeof i18n.t(`account.orders.datepicker`) === "string" ? this.datepickerLabels = {} : this.datepickerLabels = i18n.t(`account.orders.datepicker`);
  }

  changeStartDate(date: Date) {
    this.startDate = date;
    this.dateChanged();
  }

  changeEndDate(date: Date) {
    this.endDate = date;
    this.dateChanged();
  }

  changeKeyword(value: string) {
    const listConfig = { ...this.ordersList.listConfig };
    listConfig.filters = { ...this.ordersList.listConfig.filters, keyword: value };
    this.setListConfig(listConfig);
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    selectedStatuses.length != this.availableOrderStatuses.length ? this.allStatusesSelected = false : this.allStatusesSelected = true;
    const listConfig = { ...this.ordersList.listConfig };
    listConfig.filters = { ...this.ordersList.listConfig.filters, statuses: selectedStatuses };
    this.setListConfig(listConfig);
  }

  toggleAllStatuses(selectedStatuses: boolean) {
    const listConfig = { ...this.ordersList.listConfig };
    selectedStatuses ? listConfig.filters = { ...this.ordersList.listConfig.filters, statuses: this.availableOrderStatuses } : listConfig.filters = { ...this.ordersList.listConfig.filters, statuses: [] };
    this.setListConfig(listConfig);
  }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate).add(1, "days").subtract(1, "seconds").toDate();
  }

}
</script>
