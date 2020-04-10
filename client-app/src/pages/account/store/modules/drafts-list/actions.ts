import { ActionTree } from "vuex";
import { RootState } from '@account/store/types';
import { CartSearchCriteria, IShoppingCart, ChangeCartItemQty } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { listClient } from '@common/services/api-clients.service';
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA, ADD_DRAFT, SET_DRAFTS, DELETE_DRAFT, SET_SELECTED_DRAFT, DELETE_ITEM_FROM_DRAFT, CLEAR_DRAFT, CHANGE_DRAFT_ITEM_QUANTITY } from "./definitions";
import { DraftsListState } from "./types";


//actions
export const actions: ActionTree<DraftsListState, RootState> = {
  async [FETCH_DRAFTS](context) {
    context.commit(FETCH_DRAFTS);
    const result = await listClient.searchLists(new CartSearchCriteria(context.state.searchCriteria), storeName, locale);
    context.commit(SET_DRAFTS, result);
  },
  async [SET_DRAFTS_SEARCH_CRITERIA](context , payload: CartSearchCriteria) {
    context.commit(SET_DRAFTS_SEARCH_CRITERIA, payload);
    context.dispatch(FETCH_DRAFTS);
  },
  async [ADD_DRAFT](context, {listName, type}: {listName: string; type: string}) {
    context.commit(FETCH_DRAFTS);
    await listClient.createList(listName, type, storeName, locale);
    context.dispatch(FETCH_DRAFTS);
  },
  async [DELETE_DRAFT](context, payload: string[]) {
    await listClient.deleteListsByIds(payload, storeName, locale);
    context.dispatch(FETCH_DRAFTS);
  },
  async [DELETE_ITEM_FROM_DRAFT](context, {lineItemId, listName, type}: {lineItemId: string; listName: string; type: string}){
    context.commit(FETCH_DRAFTS);
    await listClient.removeItemFromList(lineItemId, listName, type, storeName, locale);
    await listClient.getListByName(listName, type, storeName, locale).then(list => {
      context.dispatch(SET_SELECTED_DRAFT, list);
    });
    context.dispatch(FETCH_DRAFTS);
  },
  async [CLEAR_DRAFT](context, {name, type}: {name: string; type: string}) {
    context.commit(FETCH_DRAFTS);
    await listClient.clearList(name, type, storeName, locale);
    await listClient.getListByName(name, type, storeName, locale).then(list => {
      context.dispatch(SET_SELECTED_DRAFT, list);
    });
    context.dispatch(FETCH_DRAFTS);
  },
  async [CHANGE_DRAFT_ITEM_QUANTITY](context, {listName, type, changeQty}: {listName: string; type: string; changeQty: ChangeCartItemQty | null | undefined }){
    context.commit(FETCH_DRAFTS);
    await listClient.changeListItem(listName, type, changeQty, storeName, locale);
    await listClient.getListByName(listName, type, storeName, locale).then(list => {
      context.dispatch(SET_SELECTED_DRAFT, list);
    });
    context.dispatch(FETCH_DRAFTS);
  },
  [SET_SELECTED_DRAFT](context, payload: IShoppingCart) {
    context.commit(SET_SELECTED_DRAFT, payload);
  }
};
