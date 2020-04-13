import { MutationTree } from "vuex";
import { ShoppingCart } from 'core/api/api-clients';
import { FETCH_CART } from "./definitions";
import { CartState } from "./types";

export const SET_CART = "setCart";
export const SET_CART_ITEMS_COUNT = "setCartItemsCount";


//mutations
export const mutations: MutationTree<CartState> = {

  [FETCH_CART](state) {
    state.isLoading = true;
    state.loaded = false;
  },
  [SET_CART](state, payload: ShoppingCart) {
    state.cart = payload;
    state.loaded = true;
    state.isLoading = false;
  },
  [SET_CART_ITEMS_COUNT](state, payload: number){
    state.cartItemsCount = payload;
  }
};
