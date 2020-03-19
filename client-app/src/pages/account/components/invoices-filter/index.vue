<template>
  <div v-if="invoicesFilter && availableInvoicesStatuses">
    <div class="d-flex flex-wrap flex-sm-row flex-column">
      <div class="col col-sm-6 col-md-5 col-lg-4">
        <label for="begin-date">{{ $t("account.invoices.date-filter.from") }}</label>
        <b-form-datepicker
          id="begin-date"
          :value="invoicesFilter.startDate"
          value-as-date
          reset-button
          :label-reset-button="$t('account.invoices.date-filter.reset')"
          :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :max="new Date()"
          :class="{ 'is-invalid': !isDateValid && isDateValid != null }"
          :locale="locale"
          v-bind="datepickerLabels"
          class="mb-2"
          @input="changeStartDate($event)"></b-form-datepicker>
      </div>
      <div class="col col-sm-6 col-md-5 col-lg-4">
        <label for="end-date">{{ $t("account.invoices.date-filter.to") }}</label>
        <b-form-datepicker
          id="end-date"
          :value="invoicesFilter.endDate"
          value-as-date
          reset-button
          :label-reset-button="$t('account.invoices.date-filter.reset')"
          :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
          :max="new Date()"
          :class="{ 'is-invalid': !isDateValid && isDateValid != null }"
          :locale="locale"
          v-bind="datepickerLabels"
          class="mb-2"
          @input="changeEndDate($event)"></b-form-datepicker>
      </div>
      <div class="d-flex flex-column justify-content-center col-sm-3 col-md-2 col-lg-2">
        <label for="dropdown-filters">{{ $t("account.invoices.status-filter.title") }}</label>
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
            {{ $t("account.invoices.status-filter.select-all") }}
          </b-form-checkbox>
          <b-dropdown-divider></b-dropdown-divider>
          <b-form-checkbox-group
            v-model="selectedStatuses"
            :options="availableInvoicesStatuses"
            stacked
            @change="selectedStatusesChanged($event)"></b-form-checkbox-group>
        </b-dropdown>
      </div>
    </div>
    <div v-if="!isDateValid && isDateValid != null">
      <span class="text-danger">{{ $t("account.invoices.date-filter.date-error") }}</span>
    </div>
  </div>
</template>

<script lang="ts" src="./invoices-filter"></script>
