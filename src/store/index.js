import Vue from 'vue'
import Vuex from 'vuex'
import carsData from '@/utils/carsData';
import helpData from '@/utils/helpData';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorite: 0,
    cars: [],
    criticalError: false,
    helpData: {}
  },
  mutations: {
    favorite(state, data) {
      state.favorite = data;
    },
    loadCars(state, data) {
      state.cars = data.map((car) => {
        return car;
      });
    },
    loadHelp(state, data) {
      state.helpData = data;
    },
    loadError(state, data) {
      state.criticalError = data;
    },
  },
  actions: {
    async getCarData({ commit }) {
      try {
        commit('loadCars', await carsData);
      } catch (e) {
        commit('loadError', true);
        console.log(e);
      }
    },
    async getHelpData({ commit }) {
      try {
        commit('loadHelp', await helpData);
      } catch (e) {
        console.log(e);
      }
    },
    favorite({ commit }, data) {
      commit('favorite', data);
    },
  },
  modules: {},
});
