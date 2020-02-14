import { Module, GetterTree, ActionTree,  } from "vuex";
import { State } from "@account/store/state";
import { OrdersState, state } from './state';
import {getters} from "./getters";
import {actions} from "./actions";
import {mutations} from "./mutations";



const ordersModule: Module<OrdersState, State> = {
  //namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default ordersModule;

