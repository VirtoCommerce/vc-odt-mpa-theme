import { BvTableFieldArray } from "bootstrap-vue";
import { ShoppingCart } from "@common/api/api-clients";

// state type
export interface CartState {
  cart: ShoppingCart | null;
  isLoading: boolean;
  loaded: boolean;
}
