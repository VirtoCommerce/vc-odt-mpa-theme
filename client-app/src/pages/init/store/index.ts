import Vue from "vue";
import Vuex, { Store } from "vuex";
import { actions } from "@init-app/store/actions";
import { getters } from "@init-app/store/getters";
import { mutations } from "@init-app/store/mutations";
import { state } from "@init-app/store/state";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
});
