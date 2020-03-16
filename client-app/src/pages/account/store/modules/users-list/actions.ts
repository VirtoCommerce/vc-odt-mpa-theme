import { ActionTree } from "vuex";
import { OrganizationContactsSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { accountClient} from '@common/services/api-clients.service';
import { RootState } from "../../types";
import { FETCH_USERS, FETCH_USER, SET_USERS_LIST_CONFIG, CLEAR_SELECTED_USER, DELETE_USER } from "./definitions";
import { SET_USERS, SET_USER } from "./mutations"
import { UsersListState, UsersListConfig } from "./types";


//actions
export const actions: ActionTree<UsersListState, RootState> = {
  async [FETCH_USERS](context) {
    context.commit(FETCH_USERS);
    const searchCriteria = new OrganizationContactsSearchCriteria();
    searchCriteria.pageNumber = context.state.usersList.listConfig.pageNumber;
    searchCriteria.pageSize = context.state.usersList.listConfig.pageSize;
    searchCriteria.sort = context.state.usersList.listConfig.filters.sort;
    searchCriteria.searchPhrase = context.state.usersList.listConfig.filters.keyword;
    const result = await accountClient.searchOrganizationUsers(searchCriteria, storeName, locale);
    context.commit(SET_USERS, result);
  },
  async [SET_USERS_LIST_CONFIG](context , payload: UsersListConfig) {
    context.commit(SET_USERS_LIST_CONFIG, payload);
    context.dispatch(FETCH_USERS);
  },
  async [FETCH_USER](context, payload: string) {
    context.commit(FETCH_USER);
    const result = await accountClient.getUserById(payload, storeName, locale);
    context.commit(SET_USER, result);
  },
  [CLEAR_SELECTED_USER](context) {
    context.commit(CLEAR_SELECTED_USER);
  },
  async [DELETE_USER](context, payload: string) {
    await accountClient.deleteUser(payload, storeName, locale);
    context.dispatch(FETCH_USERS);
  }

};
