<template>
  <div class="mt-3">
    <loading :active.sync="isLoading"></loading>
    <div v-if="!isLoading" class="mt-3">
      <p>{{ $t("account.payments.grid.text-above") }}</p>
      <b-table
        id="users-table"
        stacked="md"
        striped
        hover
        :show-empty="true"
        :empty-text="$t('account.payments.no-payments')"
        :items="paymentsList.payments"
        :fields="paymentsList.listConfig.columns"
        no-local-sorting
        @sort-changed="sortChanged">
        <template v-slot:cell(createdDate)="data">
          <span>{{ data.value | moment("ddd, DD/MM/YY") }}</span>
        </template>
      </b-table>

      <div class="d-flex justify-content-between">
        <b-pagination
          :value="paymentsList.listConfig.pageNumber"
          aria-controls="users-table"
          :total-rows="paymentsList.totalCount"
          :per-page="paymentsList.listConfig.pageSize"
          @change="pageChanged($event)"></b-pagination>
        <div>
          <select
            :value="paymentsList.listConfig.pageSize"
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
      <p>{{ $t("account.payments.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./account-payments.ts"></script>
