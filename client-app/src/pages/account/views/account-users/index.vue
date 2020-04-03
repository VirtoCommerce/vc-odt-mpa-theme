<template>
  <div class="mt-3">
    <loading :active.sync="isLoading"></loading>
    <add-user-modal @userAdded="userAdded($event)"></add-user-modal>
    <edit-user-modal :user="selectedUser" @userChanged="userChanged($event)"></edit-user-modal>
    <div class="d-flex flex-wrap flex-sm-row flex-column justify-content-between">
      <users-filter class="col col-sm-6 col-md-5 col-lg-3"
                    :users-filter="usersList.listConfig.filters"
                    @filtersChanged="filtersChanged"></users-filter>
      <b-button v-can="$permissions.CanCreateUsers"
                v-b-modal.addUserModal
                variant="primary"
                class="col col-sm-auto col-md-auto col-lg-auto align-self-sm-end mt-3">
        {{ $t("account.users.add-user.add-user") }}
      </b-button>
    </div>
    <div v-if="!isLoading" class="mt-3">
      <p>{{ $t("account.users.grid.text-above") }}</p>
      <b-table
        id="users-table"
        stacked="md"
        striped
        borderless
        hover
        :show-empty="true"
        tbody-tr-class="text-break"
        :empty-text="$t('account.users.no-users')"
        :items="usersList.users"
        :fields="usersList.listConfig.columns"
        no-local-sorting
        @sort-changed="sortChanged">
        <template v-slot:cell(actions)="row">
          <div class="d-flex justify-content-md-around">
            <font-awesome-layers v-if="$can($permissions.CanEditUsers)"
                                 class="mr-3 btn"
                                 @click="openEditUserModal(row.item)">
              <font-awesome-icon :icon="editIcon" size="lg"></font-awesome-icon>
            </font-awesome-layers>
            <font-awesome-layers v-if="$can($permissions.CanDeleteUsers)"
                                 class="btn"
                                 @click="confirmDeleteUser(row.item)">
              <font-awesome-icon :icon="deleteIcon" size="lg"></font-awesome-icon>
            </font-awesome-layers>
          </div>
        </template>
      </b-table>

      <div class="d-flex justify-content-between">
        <b-pagination
          :value="usersList.listConfig.pageNumber"
          aria-controls="users-table"
          :total-rows="usersList.totalCount"
          :per-page="usersList.listConfig.pageSize"
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
              {{ usersList.listConfig.pageSize }}
            </template>
            <b-dropdown-item v-for="pageSize in pageSizes"
                             :key="pageSize"
                             :active="checkActivePageSize(pageSize)"
                             link-class="pr-0"
                             @click="pageSizeChanged(pageSize)">
              {{ pageSize }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <p>{{ $t("account.users.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./account-users.ts"></script>
