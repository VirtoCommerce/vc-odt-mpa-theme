import { Module } from "vuex";
import { User } from '@common/api/api-clients';
import { RootState } from "../../types";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { ProfileState } from "./types";


// initial state
export const initialState: ProfileState = {
  errors: {},
  profile: new User,
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
