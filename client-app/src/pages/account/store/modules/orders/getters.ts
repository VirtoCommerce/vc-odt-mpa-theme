import { GetterTree} from "vuex";
import { OrdersState } from './state';
import { State } from '@account/store/state';


// getters
export const getters: GetterTree<OrdersState, State> = {
  ordersPage: (state: OrdersState) => {
    return state.ordersPage;
  },
  isLoading: (state: OrdersState) => {
    return state.isLoading;
  },
  gridColumns: (state) => {
    return state.gridColumns;
  }

};
