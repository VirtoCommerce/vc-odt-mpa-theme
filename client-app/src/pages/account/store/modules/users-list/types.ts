import { BvTableFieldArray } from "bootstrap-vue";
import { User } from "@common/api/api-clients";


export interface UsersListConfig {
  columns: BvTableFieldArray;
  pageNumber: number;
  pageSize: number;
  filters: UsersListFilters;
}

export interface UsersListFilters {
  sort?: string;
  keyword?: string;
}

export interface UsersList {
  listConfig: UsersListConfig;
  users: User[];
  totalCount: number;
}

// state type
export interface UsersListState {
  // todo: replace with real errors model
  errors: any;
  usersList: UsersList;
  isLoading: boolean;
  loaded: boolean;
  selectedUser: User | null;
  selectedUserIsLoaded: boolean;
}
