import { MutationTree } from "vuex";
import { ADD_ERROR, REMOVE_ERROR } from 'pages/init/store/definitions';
import { State } from "pages/init/store/state";
import ErrorInfo from 'pages/init/store/types';

//mutations
export const mutations: MutationTree<State> = {
  [ADD_ERROR](state, error: ErrorInfo) {
    state.errors.push(error);
  },
  [REMOVE_ERROR](state, error: ErrorInfo) {
    state.errors.splice(state.errors.indexOf(error));
  }
};
