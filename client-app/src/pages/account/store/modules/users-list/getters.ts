import { GetterTree } from "vuex";
import { BvTableFieldArray } from 'bootstrap-vue';
import { UsersListState } from "@account/store/modules/users-list/types";
import { RootState } from '@account/store/types';
import { User, IOrganizationContactsSearchCriteria, IUserSearchResult, IUser } from "@common/api/api-clients";

// getters
export const getters: GetterTree<UsersListState, RootState> = {
  isLoading: (state: UsersListState): boolean => {
    return state.isLoading;
  },
  columns: (state: UsersListState): BvTableFieldArray => {
    return state.columns;
  },
  searchCriteria: (state: UsersListState): IOrganizationContactsSearchCriteria => {
    return state.searchCriteria;
  },
  users: (state: UsersListState): IUserSearchResult => {
    return state.users;
  },
  selectedUser: (state: UsersListState): IUser | null => {
    return state.selectedUser;
  }
};
