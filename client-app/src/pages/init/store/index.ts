import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import { actions } from "pages/init/store/actions";
import { getters } from "pages/init/store/getters";
import { mutations } from "pages/init/store/mutations";
import { state, State } from "pages/init/store/state";
//import { RootState } from 'store/types';

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<State>  = {
  state,
  getters,
  actions,
  mutations
};

export default new Store<State>(store);


