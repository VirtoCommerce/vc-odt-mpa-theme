import { AsyncState } from './types';

export function fetchMutation(state: AsyncState) {
  state.isLoading = true;
  state.loaded = false;
  state.errors = null;
}

export function setMutation(state: AsyncState) {
  state.loaded = true;
  state.isLoading = false;
  // todo: add error handling
}
