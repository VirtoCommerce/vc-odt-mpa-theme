<template>
  <div class="app-add-item-to-draft w-100 h-100" @click.stop.prevent>
    <b-dropdown ref="dropdown"
                class="w-100 h-100"
                right
                variant="outline-primary">
      <template v-slot:button-content>
        <i class="fas fa-list"></i>
      </template>

      <b-dropdown-form inline>
        <div class="d-flex">
          <b-form-input
            v-model="newDraftName"
            size="sm"
            type="text"
            required
            placeholder="Enter list name"></b-form-input>

          <button class="btn btn-sm"
                  @click="addToNewDraft">
            <font-awesome-icon :icon="plusIcon" size="lg"></font-awesome-icon>
          </button>
        </div>
      </b-dropdown-form>

      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item v-for="draft in drafts.results"
                       :key="draft.name"
                       @click="addToDraft(draft)">
        {{ draft.name }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script lang="ts" src="./add-to-order-draft-button.ts"></script>
