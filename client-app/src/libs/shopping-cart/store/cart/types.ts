import { BvTableFieldArray } from "bootstrap-vue";
import { ShoppingCart } from "@common/api/api-clients";

// state type
export interface CartState {
  cart: ShoppingCart | null;
  cartItemsCount: number;
  isLoading: boolean;
  loaded: boolean;
}
