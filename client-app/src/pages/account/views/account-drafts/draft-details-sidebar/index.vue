<template>
  <b-sidebar id="draft-details"
             :visible="showSidebar"
             body-class="pl-3 pr-3"
             right
             shadow
             @hidden="detailsSidebarHidden">
    <b-overlay :show="isLoading"
               rounded="sm"
               :opacity="0.33">
      <div v-if="selectedDraft">
        <div v-if="selectedDraft.items.length > 0">
          <cart-header
            :cart="selectedDraft"
            :title="selectedDraft.name"
            @clear-cart-clicked="confirmClearDraft"></cart-header>
          <cart-items-list
            :items="selectedDraft.items"
            @item-deleted="confirmDeleteItem"
            @quantity-changed="changeQuantity">
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
    </b-overlay>
  </b-sidebar>
</template>

<script lang="ts" src="./draft-details-sidebar.ts"></script>
