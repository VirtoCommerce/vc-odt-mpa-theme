import { ActionTree } from "vuex";
import { RootState } from 'store/types';
import { AddCartItem } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { cartClient} from '@common/services/api-clients.service';
import { FETCH_CART, FETCH_CART_ITEMS_COUNT, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART } from './definitions';
import { SET_CART, SET_CART_ITEMS_COUNT } from "./mutations"
import { CartState } from "./types";


//actions
export const actions: ActionTree<CartState, RootState> = {
  async [FETCH_CART](context) {
    context.commit(FETCH_CART);
    const result = await cartClient.getCart(storeName, locale);
    context.commit(SET_CART, result);
  },
  async [FETCH_CART_ITEMS_COUNT](context) {
    const result = await cartClient.getCartItemsCount(storeName, locale);
    context.commit(SET_CART_ITEMS_COUNT, result);
  },

  async [ADD_ITEM_TO_CART](context , payload: AddCartItem) {
    context.commit(FETCH_CART);
    await cartClient.addItemToCart(payload, storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  async [DELETE_ITEM_FROM_CART](context, payload: string) {
    context.commit(FETCH_CART);
    await cartClient.removeCartItem(payload, storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  async [CLEAR_CART](context, payload: string) {
    context.commit(FETCH_CART);
    await cartClient.clearCart(storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  }

};
