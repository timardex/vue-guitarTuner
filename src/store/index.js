import Vue from 'vue'
import Vuex from 'vuex'
import state from './initialState'
import {playSound, pauseSound, animationEnd} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    TUNING_SELECT: (state, payload) => {
      state.selected = payload;
      state.animated_key = 'rotate';
      state.tuning = 'tuning';
      state.bounceIn = 'bounceIn';
    },
    SELECTED_TUNE: (state) => {
      state.animated_key = '';
      state.tuning = '';
      state.bounceIn = '';
    },
    PLAY: (state, payload) => {
      state.standards = playSound(state.standards, payload);
      state.down_halfs = playSound(state.down_halfs, payload);
      state.down_ones = playSound(state.down_ones, payload);
      state.down_twos = playSound(state.down_twos, payload);
    },
    PAUSE: (state, payload) => {
      state.standards = pauseSound(state.standards, payload);
      state.down_halfs = pauseSound(state.down_halfs, payload);
      state.down_ones = pauseSound(state.down_ones, payload);
      state.down_twos = pauseSound(state.down_twos, payload);
    },
    ANIMATION_END: (state, payload) => {
      state.standards = animationEnd(state.standards, payload);
      state.down_halfs = animationEnd(state.down_halfs, payload);
      state.down_ones = animationEnd(state.down_ones, payload);
      state.down_twos = animationEnd(state.down_twos, payload);
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
