export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },
};
