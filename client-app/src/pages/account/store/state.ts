// state type
export interface State {
  // todo: replace with real errors model
  errors: any;
  // todo: replace with real profile model
  profile: any;
  isLoading: boolean;
  loaded: boolean;
}

// initial state
export const state: State = {
  errors: {},
  profile: {},
  isLoading: false,
  loaded: false
};
