import { GetterTree } from "vuex";
import { ProfileState } from "./types";
import { RootState } from "../../types";

// getters
export const getters: GetterTree<ProfileState, RootState> = {
  profile: (state: ProfileState) => {
    return state.profile;
  },
  isLoading: (state: ProfileState): boolean => {
    return state.isLoading;
  }
};
