import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import { RootState } from './types';


const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    counter: 1
  },
  getters,
  actions,
  mutations,
  strict: debug,
};

export default new Store<RootState>(store);
