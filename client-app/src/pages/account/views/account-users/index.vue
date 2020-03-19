<template>
  <div class="mt-3">
    <loading :active.sync="isLoading"></loading>
    <b-button v-b-modal.addUserModal variant="primary">
      {{ $t("account.users.add-user.add-user") }}
    </b-button>
    <add-user-modal @userAdded="userAdded($event)"></add-user-modal>
    <edit-user-modal :user="selectedUser" @userChanged="userChanged($event)"></edit-user-modal>
    <users-filter class="mt-3"
                  :users-filter="usersList.listConfig.filters"
                  @filtersChanged="filtersChanged"></users-filter>
    <div v-if="!isLoading" class="mt-3">
      <p>{{ $t("account.users.grid.text-above") }}</p>
      <b-table
        id="users-table"
        stacked="md"
        striped
        hover
        :show-empty="true"
        :empty-text="$t('account.users.no-users')"
        :items="usersList.users"
        :fields="usersList.listConfig.columns"
        no-local-sorting
        @sort-changed="sortChanged">
        <template v-slot:cell(actions)="row">
          <font-awesome-layers class="mr-3 btn" @click="openEditUserModal(row.item)">
            <font-awesome-icon :icon="editIcon" size="lg"></font-awesome-icon>
          </font-awesome-layers>
          <font-awesome-layers class="btn" @click="confirmDeleteUser(row.item)">
            <font-awesome-icon :icon="deleteIcon" size="lg"></font-awesome-icon>
          </font-awesome-layers>
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
          <select
            :value="usersList.listConfig.pageSize"
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
      <p>{{ $t("account.users.grid.text-below") }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="./account-users.ts"></script>