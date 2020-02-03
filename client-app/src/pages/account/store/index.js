import Vue from "vue";
import Vuex from "vuex";
import { AccountService } from "@/common/api.service";

// actions definition
export const UPDATE_USER = "updateUser";
export const FETCH_PROFILE = "fetchProfile";

//mutations definition
export const SET_ERROR = "setError";
export const SET_PROFILE = "setProfile";

// initial state
const state = {
    errors: {},
    profile: {},
    isLoading: {
        type: Boolean,
        default: false
    },
    loaded: {
        type: Boolean,
        default: false
    }
};

// getters
const getters = {
    profile: (state) => {
        return state.profile;
    },
    isLoading: (state) => {
        return state.isLoading;
    }
};

//actions
const actions = {
    [FETCH_PROFILE](context) {
    
        return AccountService.getUserAccount()
        .then(({ data }) => {
          context.commit(SET_PROFILE, data);
          
          return data;
        })
        .catch(() => {
          // #todo SET_ERROR cannot work in multiple states
          // context.commit(SET_ERROR, response.data.errors)
        });
    },
    [UPDATE_USER]() {
        //todo
    }
};

//mutations
const mutations = {
    // [SET_ERROR] (state, error) {
    //   state.errors = error
    // },
    [SET_PROFILE](state, profile) {
        state.profile = profile;
        state.isLoaded = true;
        state.isLoading = false;
        state.errors = {};
    },
    [FETCH_PROFILE](state) {
        state.profile.isLoading = true;
        state.isLoaded = false;
    },
};

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: debug
});
