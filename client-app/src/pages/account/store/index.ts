import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import ordersListModule from "@account/store/modules/orders-list";
import profileModule from "@account/store/modules/profile";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading : false,
    loaded : false
  },
  modules: {
    ordersListModule,
    profileModule
  },
  strict: debug
};

export default new Vuex.Store<RootState>(store);
