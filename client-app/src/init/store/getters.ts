import { GetterTree } from "vuex";
import { interval } from 'rxjs';
import { map } from "rxjs/operators";
import { State } from "@init-app/store/state";
import { ReactiveErrorInfo } from '@init-app/store/types';

// getters
export const getters: GetterTree<State, State> = {
  errors: (state: State): ReactiveErrorInfo[] => {
    return state.errors.map(error => ({
      ...error,
      timestamp$: interval(1000).pipe(map(() => error.timestamp))
    }));
  },
};
