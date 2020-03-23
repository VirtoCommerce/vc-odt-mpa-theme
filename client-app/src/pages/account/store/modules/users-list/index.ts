import { Module } from "vuex";
import { RootState } from 'store/types';
import { defaultPageSize, usersGridFields, startPageNumber } from '@common/constants';
import { localizeGridColumns } from '@common/services/localization.helper.service';
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { UsersListState } from './types';


// initial state
export const initialState: UsersListState = {
  errors: {},
  usersList: {
    listConfig: {
      columns: usersGridFields,
      pageNumber: startPageNumber,
      pageSize: defaultPageSize,
      filters: {
      }
    },
    totalCount: 0,
    users: []
  },
  selectedUser: null,
  selectedUserIsLoaded: false,
  isLoading: false,
  loaded: false
};


const localizationUsersGridColumnsNode = "account.users.grid.columns"

// We need this because bootstrap-vue will directly use labels on stacked table
initialState.usersList.listConfig.columns = localizeGridColumns(localizationUsersGridColumnsNode, initialState.usersList.listConfig.columns);

const usersListModule: Module<UsersListState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default usersListModule;
