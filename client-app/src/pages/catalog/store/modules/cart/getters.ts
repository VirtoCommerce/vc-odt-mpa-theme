import { GetterTree } from "vuex";
import { RootState } from 'store/types';
import { ShoppingCart } from "@common/api/api-clients";
import {  CartState } from "./types";

// getters
export const getters: GetterTree<CartState, RootState> = {
  isLoading: (state: CartState): boolean => {
    return state.isLoading;
  },
  cart: (state: CartState): ShoppingCart | null => {
    return state.cart;
  },
  itemsQuantity: (state: CartState): number  => {
    return state.cartItemsCount;
  }
};
