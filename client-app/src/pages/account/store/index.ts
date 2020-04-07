import Vue from "vue";
import Vuex, { Store, StoreOptions } from "vuex";
import draftsListModule from "@account/store/modules/drafts-list";
import invoicesListModule from "@account/store/modules/invoices-list";
import ordersListModule from "@account/store/modules/orders-list";
import paymentsListModule from "@account/store/modules/payments-list";
import usersListModule from "@account/store/modules/users-list";
import { RootState } from "./types";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    isLoading: false,
    loaded: false,
    errors: null
  },
  modules: {
    invoicesListModule,
    ordersListModule,
    paymentsListModule,
    usersListModule,
    draftsListModule
  },
  strict: debug
};

export default new Store<RootState>(store);
