<template>
  <div class="mt-3">
    <loading :active.sync="isLoading"></loading>
    <b-sidebar id="draft-details"
               v-model="showDraftDetailsSidebar"
               body-class="pl-3 pr-3"
               right
               shadow>
      <div v-if="!selectedDraft" class="d-flex flex-column">
        <span class="align-self-center">
          {{ $t("account.drafts.no-draft-selected") }}
        </span>
      </div>
      <div v-if="selectedDraft">
        <div v-if="selectedDraft.items.length > 0">
          <cart-header
            :cart="selectedDraft"
            :title="selectedDraft.name"
            clear-cart-clicked="confirmClearCart"></cart-header>
          <cart-items-list
            :items="selectedDraft.items"
            @itemDeleted="confirmDeleteItem"
            @quantityChanged="changeQuantity">
          </cart-items-list>
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-primary w-75 mb-3">
              Checkout
            </button>
          </div>
        </div>
        <div v-if="selectedDraft.items.length == 0" class="d-flex flex-column">
          <span class="align-self-center">{{ $t("account.drafts.empty-draft") }}</span>
        </div>
      </div>
    </b-sidebar>
    <add-draft-modal @draftAdded="draftAdded($event)"></add-draft-modal>
    <div class="d-flex flex-wrap flex-sm-row flex-column justify-content-between">
      <drafts-filter
        class="col col-sm-6 col-md-5 col-lg-3"
        :search-criteria="searchCriteria"
        @searchCriteriaChanged="filtersChanges($event)"></drafts-filter>
      <b-button
        v-b-modal.addDraftModal
        variant="outline-primary"
        class="col col-sm-auto col-md-auto col-lg-auto align-self-sm-end mt-3">
        {{ $t("account.drafts.add-draft.add-draft") }}
      </b-button>
    </div>
    <div v-if="!isLoading" class="mt-3">
      <p>{{ $t("account.drafts.grid.text-above") }}</p>
      <b-table
        id="drafts-table"
        stacked="md"
        striped
        borderless
        selectable
        hover
        :select-mode="'single'"
        selected-variant="primary"
        :show-empty="true"
        tbody-tr-class="text-break"
        :empty-text="$t('account.drafts.no-drafts')"
        :items="drafts.results"
        :fields="columns"
        aria-controls="draft-details"
        :aria-expanded="showDraftDetailsSidebar"
        no-local-sorting
        @row-clicked="showDraftDetails">
        <template v-slot:cell(actions)="row">
          <u
            class="btn d-inline p-0"
            @click="confirmDeleteDraft(row.item)">{{ $t("account.drafts.delete-draft") }}</u>
        </template>
      </b-table>
      <div class="d-flex justify-content-between">
        <b-pagination
          :value="searchCriteria.pageNumber"
          aria-controls="drafts-table"
          :total-rows="drafts.totalCount"
          :per-page="searchCriteria.pageSize"
          @change="pageChanged($event)"></b-pagination>
        <div>
          <b-dropdown
            id="page-sizes"
            class="form-control p-0"
            right
            variant="outline"
            menu-class="pt-0 pb-0"
            toggle-class="d-flex justify-content-between align-items-center">
            <template v-slot:button-content>
              {{ searchCriteria.pageSize }}
            </template>
            <b-dropdown-item
              v-for="pageSize in pageSizes"
              :key="pageSize"
              :active="checkActivePageSize(pageSize)"
              link-class="pr-0"
              @click="pageSizeChanged(pageSize)">
              {{ pageSize }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <p>{{ $t("account.drafts.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./account-drafts.ts"></script>
