<template>
  <div v-if="ordersFilter && availableOrderStatuses">
    <div class="d-flex flex-wrap">
      <div class="flex-grow-1">
        <label for="begin-date">{{ $t("account.orders.from") }}</label>
        <b-form-datepicker
          id="begin-date"
          :value="ordersFilter.startDate"
          value-as-date
          reset-button
          :label-reset-button="$t('account.orders.reset')"
          :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :max="new Date()"
          :state="isDateValid"
          :locale="locale"
          v-bind="datepickerLabels"
          class="mb-2"
          @input="changeStartDate($event)"></b-form-datepicker>
      </div>
      <div class="flex-grow-1 ml-2">
        <label for="end-date">{{ $t("account.orders.to") }}</label>
        <b-form-datepicker
          id="end-date"
          :value="ordersFilter.endDate"
          value-as-date
          reset-button
          :label-reset-button="$t('account.orders.reset')"
          :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :max="new Date()"
          :state="isDateValid"
          :locale="locale"
          v-bind="datepickerLabels"
          class="mb-2"
          @input="changeEndDate($event)"></b-form-datepicker>
      </div>
      <div class="flex-grow-1 ml-2">
        <label for="keyword-search">{{ $t("account.orders.keyword-search-title") }}</label>
        <b-form-input
          id="keyword-search"
          type="text"
          :debounce="1000"
          :placeholder="$t('account.orders.enter-keyword')"
          :value="ordersFilter.keyword"
          @update="changeKeyword($event)"></b-form-input>
      </div>
      <div class="d-flex flex-column justify-content-center flex-grow-1 ml-2">
        <label for="dropdown-filters">{{ $t("account.orders.status-filter.filter-by") }}</label>
        <b-dropdown
          id="dropdown-filters"
          class="mb-2"
          variant="outline-primary"
          toggle-class="text-left"
          menu-class="p-2">
          <template v-slot:button-content>
            {{ getCurrentStatusLabel() }}
          </template>
          <b-form-checkbox v-model="allStatusesSelected" @change="toggleAllStatuses">
            {{ $t("account.orders.status-filter.select-all") }}
          </b-form-checkbox>
          <b-dropdown-divider></b-dropdown-divider>
          <b-form-checkbox-group
            :checked="ordersFilter.statuses"
            :options="availableOrderStatuses"
            stacked
            @change="selectedStatusesChanged($event)"></b-form-checkbox-group>
        </b-dropdown>
      </div>
    </div>
    <div v-if="!isDateValid && isDateValid != null">
      <span class="text-danger">{{ $t("account.orders.date-error") }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LocaleMessages, TranslateResult } from "vue-i18n";
import { Prop } from "vue-property-decorator";
import i18n from "@i18n";
import { OrdersListFilters } from "@account/store/modules/orders-list/types";
import { locale } from "@common/constants";

@Component
export default class OrderFilter extends Vue {
  @Prop()
  ordersFilter!: OrdersListFilters;

  @Prop()
  availableOrderStatuses!: string[];

  startDate: Date | undefined = undefined;

  endDate: Date | undefined = undefined;

  isDateValid: boolean | null = null;

  allStatusesSelected = false;

  datepickerLabels: LocaleMessages | {} = {};

  locale = locale;

  emitChanges(updatedFilters: OrdersListFilters) {
    this.$emit("filtersChanged", updatedFilters);
  }

  mounted() {
    this.getDatepickerLocalization();
  }

  dateChanged() {
    if (this.startDate && this.endDate) {
      this.isDateValid = this.startDate <= this.endDate;
      if (this.isDateValid) {
        const updatedFilters = { ...this.ordersFilter, startDate: this.startDate, endDate: this.prepareEndDate() };
        this.emitChanges(updatedFilters);
      }
    } else {
      this.endDate == null && this.startDate == null ? (this.isDateValid = null) : (this.isDateValid = true);
      const updatedFilters = {
        ...this.ordersFilter,
        startDate: this.startDate,
        endDate: this.endDate ? this.prepareEndDate() : undefined
      };
      this.emitChanges(updatedFilters);
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

  getDatepickerLocalization() {
    typeof i18n.t(`account.orders.datepicker`) === "string"
      ? (this.datepickerLabels = {})
      : (this.datepickerLabels = i18n.t(`account.orders.datepicker`));
  }

  getCurrentStatusLabel(): TranslateResult {
    if (this.allStatusesSelected || this.ordersFilter.statuses.length == 0) {
      return i18n.t("account.orders.status-filter.all");
    } else {
      if (this.ordersFilter.statuses.length == 1) {
        return this.ordersFilter.statuses[0];
      } else return "...";
    }
  }

  changeKeyword(value: string) {
    const updatedFilters = { ...this.ordersFilter, keyword: value };
    this.emitChanges(updatedFilters);
  }

  selectedStatusesChanged(selectedStatuses: string[]) {
    selectedStatuses.length != this.availableOrderStatuses.length
      ? (this.allStatusesSelected = false)
      : (this.allStatusesSelected = true);
    const updatedFilters = { ...this.ordersFilter, statuses: selectedStatuses };
    this.emitChanges(updatedFilters);
  }

  toggleAllStatuses(checked: boolean) {
    let updatedFilters: OrdersListFilters;
    checked
      ? (updatedFilters = { ...this.ordersFilter, statuses: this.availableOrderStatuses })
      : (updatedFilters = { ...this.ordersFilter, statuses: [] });
    this.emitChanges(updatedFilters);
  }

  private prepareEndDate(): Date {
    return this.$moment(this.endDate)
      .add(1, "days")
      .subtract(1, "seconds")
      .toDate();
  }
}
</script>
