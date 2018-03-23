import vuex from 'vuex';
import dummyData from '~/static/dummyData';

export default () => new vuex.Store({
  state: {
    games: [],
    genres: [],
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    setGenres(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    nuxtServerInit(vuexContext, context) {
      return new Promise((resolve, reject) => {
        vuexContext.commit('setGames', dummyData.gameList);
        vuexContext.commit('setGenres', dummyData.gameGenres);
        resolve();
      });
    },
    setGames(vuexContext, games) {
      vuexContext.commit('setGames', games);
    },
    setGenres(vuexContext, genres) {
      vuexContext.commit('setGenres', genres);
    },
  },
  getters: {
    loadedGames(state) {
      return state.games;
    },
    genres(state) {
      return state.genres;
    },
  },
});
