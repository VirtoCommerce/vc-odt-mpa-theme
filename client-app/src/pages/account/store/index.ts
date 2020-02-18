import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import ordersListModule from "@account/store/modules/orders-list";
import profileModule from "@account/store/modules/profile";
import { RootState } from "./types";

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

export default new Store<RootState>(store);
