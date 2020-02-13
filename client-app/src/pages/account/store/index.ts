import Vue from "vue";
import Vuex, { Store } from "vuex";
import { actions } from "@account/store/actions";
import { getters } from "@account/store/getters";
import { mutations } from "@account/store/mutations";
import { state } from "@account/store/state";
import orders from './modules/orders'


const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  modules: {
    orders
  }
});
