import { BvTableFieldArray } from "bootstrap-vue";
import { IOrganizationContactsSearchCriteria, IUserSearchResult, IUser } from "@common/api/api-clients";
import { AsyncState } from '@account/store/types';

// state type
export interface UsersListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: IOrganizationContactsSearchCriteria;
  users: IUserSearchResult;
  selectedUser: IUser | null;
}

