import { MutationTree } from "vuex";
import { CartSearchCriteria, ShoppingCartSearchResult, IShoppingCart } from "@common/api/api-clients";
import { fetchAsync, setAsync } from "@common/helpers/async-state";
import { FETCH_DRAFTS, SET_DRAFTS_SEARCH_CRITERIA, SET_DRAFTS, SET_SELECTED_DRAFT } from "./definitions";
import { DraftsListState } from "./types";

//mutations
export const mutations: MutationTree<DraftsListState> = {
  [FETCH_DRAFTS](state) {
    fetchAsync(state);
  },
  [SET_DRAFTS](state, payload: ShoppingCartSearchResult) {
    state.drafts.results = payload.results  || [];
    state.drafts.totalCount = payload.totalCount || 0;
    setAsync(state);
  },
  [SET_DRAFTS_SEARCH_CRITERIA](state, payload: CartSearchCriteria) {
    state.searchCriteria = payload;
  },
  [SET_SELECTED_DRAFT](state, payload: IShoppingCart) {
    state.selectedDraft = payload;
  }
};
