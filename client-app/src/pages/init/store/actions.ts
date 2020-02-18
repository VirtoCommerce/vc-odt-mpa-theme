import { ActionTree } from "vuex";
import ErrorInfo from '@common/models/error-info.model';
import { ADD_ERROR, REMOVE_ERROR } from "@init-app/store/definitions";
import { State } from "@init-app/store/state";

//actions
export const actions: ActionTree<State, State> = {
  [ADD_ERROR](context, error: ErrorInfo) {
    context.commit(ADD_ERROR, error);
  },
  [REMOVE_ERROR](context, error: ErrorInfo) {
    context.commit(REMOVE_ERROR, error);
  }
};
