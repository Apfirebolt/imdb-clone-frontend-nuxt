export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },
  getAllMoviesAction({ commit }) {
    const url = 'movie'
    let token = localStorage.getItem("Token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    this.$axios
      .get(url, config)
      .then((response) => {
        console.log('Response is ', response)
        commit("setAllMovies", response.data)
      })
      .catch((err) => {});
  },
  saveMovieAction: function ({ commit, dispatch }, payload) {
    const url = 'movie'
    let token = localStorage.getItem("Token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    this.$axios
      .post(url, payload, config)
      .then((response) => {
        dispatch('getAllMoviesAction')
      })
      .catch((err) => {});
  },
  deleteMovieAction: function ({ commit, dispatch }, payload) {
    const url = `movie/${payload._id}`;
    let token = localStorage.getItem("Token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    this.$axios
      .delete(url, config)
      .then((response) => {
        dispatch('getAllMoviesAction')
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
