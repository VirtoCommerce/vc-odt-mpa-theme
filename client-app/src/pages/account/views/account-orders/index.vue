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

<script lang="ts" src="./account-orders.ts"></script>
