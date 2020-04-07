import { BvTableFieldArray } from "bootstrap-vue";
import { AsyncState } from '@account/store/types';
import { ICartSearchCriteria, IShoppingCart, IShoppingCartSearchResult } from '@common/api/api-clients';

// state type
export interface DraftsListState extends AsyncState {
  columns: BvTableFieldArray;
  searchCriteria: ICartSearchCriteria;
  drafts: IShoppingCartSearchResult;
  selectedDraft: IShoppingCart | null;
}
