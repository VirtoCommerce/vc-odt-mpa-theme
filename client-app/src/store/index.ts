import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import profileModule from "store/modules/profile";
import { RootState } from './types';


const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading : false,
    loaded : false
  },
  modules: {
    profileModule
  },
  strict: debug
};

export default new Store<RootState>(store);
