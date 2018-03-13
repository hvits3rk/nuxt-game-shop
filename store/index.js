import vuex from 'vuex';
import dummyData from '~/static/dummyData';

export default new vuex.Store({
  state: {
    games: [],
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return new Promise((resolve, reject) => {
        vuexContext.commit('setGames', dummyData);
        resolve();
      });
    },
    setGames(vuexContext, games) {
      vuexContext.commit('setGames', games);
    },
  },
  getters: {
    loadedGames(state) {
      return state.games;
    },
  },
});
