import { MutationTree } from "vuex";
import { ShoppingCart } from '@common/api/api-clients';
import { FETCH_CART } from "./definitions";
import { CartState } from "./types";

export const SET_CART = "setCart";


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
  }
};
