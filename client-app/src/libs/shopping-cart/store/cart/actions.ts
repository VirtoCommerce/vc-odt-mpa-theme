import { ActionTree } from "vuex";
import { AddCartItem, ChangeCartItemQty } from 'core/api/api-clients';
import { storeName, locale } from 'core/constants';
import { cartClient} from 'core/services/api-clients.service';
import { RootState } from 'store/types';
import { FETCH_CART, FETCH_CART_ITEMS_COUNT, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, CLEAR_CART, CHANGE_ITEM_QUANTITY, SHOW_CART_SIDEBAR, HIDE_CART_SIDEBAR, CHECKOUT } from './definitions';
import { SET_CART, SET_CART_ITEMS_COUNT, SET_SIDEBAR_VISIBLE } from "./mutations"
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
  async [CHANGE_ITEM_QUANTITY](context , payload: ChangeCartItemQty) {
    context.commit(FETCH_CART);
    await cartClient.changeCartItem(payload, storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  async [DELETE_ITEM_FROM_CART](context, payload: string) {
    context.commit(FETCH_CART);
    await cartClient.removeCartItem(payload, storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  async [CLEAR_CART](context) {
    context.commit(FETCH_CART);
    await cartClient.clearCart(storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  async [CHECKOUT](context) {
    context.commit(FETCH_CART);
    await cartClient.createOrder(null, storeName, locale);
    await context.dispatch(FETCH_CART_ITEMS_COUNT);
    await context.dispatch(FETCH_CART);
  },
  [SHOW_CART_SIDEBAR](context){
    context.commit(SET_SIDEBAR_VISIBLE, true);
  },
  [HIDE_CART_SIDEBAR](context){
    context.commit(SET_SIDEBAR_VISIBLE, false);
  }
};
