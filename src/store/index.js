import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
    TUNING_SELECT: (state, payload) => {
      state.initialState.selected = payload;
      state.initialState.animated_key = 'rotate';
      state.initialState.tuning = 'tuning';
      state.initialState.bounceIn = 'bounceIn';
    },
    SELECTED_TUNE: (state) => {
      state.initialState.animated_key = '';
      state.initialState.tuning = '';
      state.initialState.bounceIn = '';
    }
  },
  actions: {
    tuningSelect: (context, payload) => {
      context.commit('TUNING_SELECT', payload)
    },
    selectedTuned: (context) => {
      context.commit('SELECTED_TUNE')
    }
  }
})
