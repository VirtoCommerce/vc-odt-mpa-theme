<template>
  <div class="mt-3">
    <span>{{ isLoading }}</span>
    <loading :active.sync="isLoading" :z-index="5000"></loading>
    <account-order-details-modal :order="selectedOrder"
                                 :show-details="true"
                                 :show-order-details="false">
    </account-order-details-modal>
    <order-filter :search-criteria="searchCriteria"
                  :available-order-statuses="availableOrderStatuses"
                  @searchCriteriaChanged="searchCriteriaChanged"></order-filter>
    <div v-if="!isLoading">
      <p>{{ $t("account.orders.grid.text-above") }}</p>
      <b-table
        id="orders-table"
        stacked="md"
        striped
        borderless
        hover
        :show-empty="true"
        :empty-text="$t('account.orders.no-orders')"
        :items="orders.results"
        :fields="columns"
        no-local-sorting
        @sort-changed="sortChanged">
        <template v-slot:cell(number)="data">
          <a class="text-primary btn d-inline p-0" @click="openOrderDetails(data.value)">
            {{ data.value }}
          </a>
        </template>
        <template v-slot:cell(createdDate)="data">
          <span>{{ data.value | moment("LL") }}</span>
        </template>
      </b-table>

      <div class="d-flex justify-content-between">
        <b-pagination
          :value="searchCriteria.pageNumber"
          aria-controls="orders-table"
          :total-rows="orders.totalCount"
          :per-page="searchCriteria.pageSize"
          @change="pageChanged($event)"></b-pagination>
        <div>
          <select
            :value="searchCriteria.pageSize"
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

<script lang="ts" src="./account-orders.ts"></script>
