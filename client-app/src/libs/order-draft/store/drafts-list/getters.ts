import { GetterTree } from "vuex";
import { BvTableFieldArray } from "bootstrap-vue";
import { RootState } from "store/types";
import { IShoppingCartSearchResult, ICartSearchCriteria, IShoppingCart } from "@common/api/api-clients";
import { DraftsListState } from "./types";

// getters
export const getters: GetterTree<DraftsListState, RootState> = {
  isLoading: (state: DraftsListState): boolean => {
    return state.isLoading;
  },
  columns: (state: DraftsListState): BvTableFieldArray => {
    return state.columns;
  },
  searchCriteria: (state: DraftsListState): ICartSearchCriteria => {
    return state.searchCriteria;
  },
  drafts: (state: DraftsListState): IShoppingCartSearchResult => {
    return state.drafts;
  },
  selectedDraft: (state: DraftsListState): IShoppingCart | null => {
    return state.selectedDraft;
  }
};
