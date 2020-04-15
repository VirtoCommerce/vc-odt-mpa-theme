<template>
  <div class="app-add-item-to-draft w-100 h-100" @click.stop.prevent>
    <add-draft-modal @draftAdded="addToNewDraft($event)"></add-draft-modal>
    <b-dropdown ref="dropdown"
                class="w-100 h-100"
                right
                variant="outline-primary">
      <template v-slot:button-content>
        <i class="fas fa-file-alt"></i>
      </template>
      <b-overlay :show="isLoading"
                 rounded="sm"
                 :variant="'white'"
                 :opacity="0.69">
        <b-dropdown-item v-b-modal.addDraftModal>
          <font-awesome-icon :icon="plusIcon"></font-awesome-icon> Add to new order draft
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item v-for="draft in drafts.results"
                         :key="draft.name"
                         @click="addToDraft(draft)">
          {{ draft.name }}
        </b-dropdown-item>
      </b-overlay>
    </b-dropdown>
  </div>
</template>
<script lang="ts" src="./add-to-order-draft-button.ts"></script>
