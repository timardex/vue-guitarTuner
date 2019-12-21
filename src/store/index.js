import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'
import {playSound, pauseSound, animationEnd} from './helpers'

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
    },
    PLAY: (state, payload) => {
      state.initialState.standards = playSound(state.initialState.standards, payload);
      state.initialState.down_halfs = playSound(state.initialState.down_halfs, payload);
      state.initialState.down_ones = playSound(state.initialState.down_ones, payload);
      state.initialState.down_twos = playSound(state.initialState.down_twos, payload);
    },
    PAUSE: (state, payload) => {
      state.initialState.standards = pauseSound(state.initialState.standards, payload);
      state.initialState.down_halfs = pauseSound(state.initialState.down_halfs, payload);
      state.initialState.down_ones = pauseSound(state.initialState.down_ones, payload);
      state.initialState.down_twos = pauseSound(state.initialState.down_twos, payload);
    },
    ANIMATION_END: (state, payload) => {
      state.initialState.standards = animationEnd(state.initialState.standards, payload);
      state.initialState.down_halfs = animationEnd(state.initialState.down_halfs, payload);
      state.initialState.down_ones = animationEnd(state.initialState.down_ones, payload);
      state.initialState.down_twos = animationEnd(state.initialState.down_twos, payload);
    },

  },
  actions: {
    tuningSelect: (context, payload) => {
      context.commit('TUNING_SELECT', payload)
    },
    selectedTuned: (context) => {
      context.commit('SELECTED_TUNE')
    },
    pause: (context, payload) => {
      context.commit('PAUSE', payload)
    },
    play: (context, payload) => {
      context.commit('PLAY', payload)
    },
    animationEnd: (context, payload) => {
      context.commit('ANIMATION_END', payload)
    }
  }
})
