import { GetterTree } from "vuex";
import { RootState } from 'store/types';
import { User } from "@common/api/api-clients";
import { UsersListState, UsersList } from "./types";

// getters
export const getters: GetterTree<UsersListState, RootState> = {
  isLoading: (state: UsersListState): boolean => {
    return state.isLoading;
  },
  usersList: (state: UsersListState): UsersList => {
    return state.usersList;
  },
  selectedUser: (state: UsersListState): User | null => {
    return state.selectedUser;
  },
  userIsLoaded: (state: UsersListState): boolean => {
    return state.selectedUserIsLoaded;
  },
  activeKeyword: (state: UsersListState): string | undefined => {
    return state.usersList.listConfig.filters.keyword;
  }
};
