import { MutationTree } from "vuex";
import { UserSearchResult, User } from "@common/api/api-clients";
import { FETCH_USERS, SET_USERS_LIST_CONFIG, FETCH_USER, CLEAR_SELECTED_USER } from "./definitions";
import { UsersListState, UsersListConfig } from "./types";

export const SET_USERS = "setUsers";
export const SET_USER = "setUser";

//mutations
export const mutations: MutationTree<UsersListState> = {
  [FETCH_USERS](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [FETCH_USER](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [SET_USERS](state, payload: UserSearchResult) {
    state.usersList.users = payload.results  || [];
    state.usersList.totalCount = payload.totalCount || 0;
    state.loaded = true;
    state.isLoading = false;
  },
  [SET_USERS_LIST_CONFIG](state, payload: UsersListConfig) {
    state.usersList.listConfig = payload;
  },
  [SET_USER](state, payload: User) {
    state.selectedUser = payload;
    state.loaded = true;
    state.isLoading = false;
    state.selectedUserIsLoaded = true;
  },
  [CLEAR_SELECTED_USER](state) {
    state.selectedUserIsLoaded = false;
    state.selectedUser = null;
  }
};
