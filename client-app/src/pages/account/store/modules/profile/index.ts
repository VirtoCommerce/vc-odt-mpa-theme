import { Module } from "vuex";
import { ProfileState } from "./types";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { RootState } from "../../types";


// initial state
export const initialState: ProfileState = {
  errors: {},
  profile: {},
  isLoading: false,
  loaded: false
};


const profileModule: Module<ProfileState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export default profileModule;