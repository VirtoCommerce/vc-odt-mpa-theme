//root actions
import { ActionTree } from 'vuex'
import { RootState } from 'store/types'

export const actions: ActionTree<RootState, RootState> = {
  increment(context) {
    context.commit("increment");
  }
}
export default actions;
