import { ActionTree } from "vuex";
import { RootState } from 'store/types';
import { AddCartItem } from '@common/api/api-clients';
import { storeName, locale } from '@common/constants';
import { cartClient} from '@common/services/api-clients.service';
import { FETCH_CART, ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART } from './definitions';
import { SET_CART } from "./mutations"
import { CartState } from "./types";


//actions
export const actions: ActionTree<CartState, RootState> = {
  async [FETCH_CART](context) {
    context.commit(FETCH_CART);
    const result = await cartClient.getCart(storeName, locale);
    context.commit(SET_CART, result);
  },
  async [ADD_ITEM_TO_CART](context , payload: AddCartItem) {
    context.commit(FETCH_CART);
    await cartClient.addItemToCart( payload, storeName, locale );
    context.dispatch(FETCH_CART);
  },
  async [DELETE_ITEM_FROM_CART](context, payload: string) {
    context.commit(FETCH_CART);
    await cartClient.removeCartItem( payload, storeName, locale );
    context.dispatch(FETCH_CART);
  }
};
