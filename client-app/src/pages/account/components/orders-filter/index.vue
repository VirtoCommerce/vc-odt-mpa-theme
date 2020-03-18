<template>
  <div v-if="ordersFilter && availableOrderStatuses">
    <div class="d-flex flex-wrap flex-sm-row flex-column">
      <div class="flex-grow-1 mr-sm-2">
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
      <div class="flex-grow-1 mr-sm-2">
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
      <div class="flex-grow-1 mr-sm-2">
        <label for="keyword-search">{{ $t("account.orders.keyword-search-title") }}</label>
        <b-form-input
          id="keyword-search"
          type="text"
          :debounce="1000"
          :placeholder="$t('account.orders.enter-keyword')"
          :value="ordersFilter.keyword"
          @update="changeKeyword($event)"></b-form-input>
      </div>
      <div class="d-flex flex-column justify-content-center flex-grow-1">
        <label for="dropdown-filters">{{ $t("account.orders.status-filter.filter-by") }}</label>
        <b-dropdown
          id="dropdown-filters"
          class="mb-2"
          variant="outline-primary"
          toggle-class="text-left"
          menu-class="p-2"
          no-caret
          @hide="toggleStatusDropdown()"
          @show="toggleStatusDropdown()">
          <template v-slot:button-content>
            <div class="d-flex justify-content-between align-items-center">
              {{ getCurrentStatusLabel() }}
              <font-awesome-layers v-if="showStatusDropdown">
                <font-awesome-icon :icon="faAngleUp" size="lg"></font-awesome-icon>
              </font-awesome-layers>
              <font-awesome-layers v-if="!showStatusDropdown">
                <font-awesome-icon :icon="faAngleDown" size="lg"></font-awesome-icon>
              </font-awesome-layers>
            </div>
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

<script lang="ts" src="./orders-filter"></script>
