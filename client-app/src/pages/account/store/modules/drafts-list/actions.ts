import { ActionTree } from "vuex";
import { AddDraft } from "@account/models/add-draft";
import { RootState } from '@account/store/types';
import { CartSearchCriteria } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { listClient } from '@common/services/api-clients.service';
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA, ADD_DRAFT, SET_DRAFTS, DELETE_DRAFT } from "./definitions";
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
  async [ADD_DRAFT](context, payload: AddDraft) {
    context.commit(FETCH_DRAFTS);
    await listClient.createList(payload.listName, payload.type, storeName, locale);
    context.dispatch(FETCH_DRAFTS);
  },
  async [DELETE_DRAFT](context, payload: string[]) {
    await listClient.deleteListsByIds(payload, storeName, locale);
    context.dispatch(FETCH_DRAFTS);
  }
};
