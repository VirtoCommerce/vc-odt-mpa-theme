import { MutationTree } from "vuex";
import ErrorInfo from '@common/models/error-info.model';
import { ADD_ERROR, REMOVE_ERROR } from '@init-app/store/definitions';
import { State } from "@init-app/store/state";

//mutations
export const mutations: MutationTree<State> = {
  [ADD_ERROR](state, error: ErrorInfo) {
    state.errors.push(error);
  },
  [REMOVE_ERROR](state, error: ErrorInfo) {
    state.errors.splice(state.errors.indexOf(error));
  }
};
