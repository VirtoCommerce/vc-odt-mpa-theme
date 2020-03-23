import { ActionTree } from "vuex";
import { ADD_ERROR, REMOVE_ERROR } from "pages/init/store/definitions";
import { State } from "pages/init/store/state";
import ErrorInfo from 'pages/init/store/types';
import { RootState } from "store/types";

//actions
export const actions: ActionTree<State, RootState> = {
  [ADD_ERROR](context, error: ErrorInfo) {
    context.commit(ADD_ERROR, error);
  },
  [REMOVE_ERROR](context, error: ErrorInfo) {
    context.commit(REMOVE_ERROR, error);
  }
};
