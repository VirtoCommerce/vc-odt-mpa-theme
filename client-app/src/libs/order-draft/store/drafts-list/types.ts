import { BvTableFieldArray } from "bootstrap-vue";
import { AsyncState } from "core/models/asyncState";
import { ICartSearchCriteria, IShoppingCart, IShoppingCartSearchResult } from "core/api/api-clients";

// state type
export interface DraftsListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: ICartSearchCriteria;
  drafts: IShoppingCartSearchResult;
  selectedDraft: IShoppingCart | null;
}
