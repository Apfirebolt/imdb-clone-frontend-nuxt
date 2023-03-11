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
        commit("setAllMovies", response.data)
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
      });
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
        this.$toast.success("Movie was successfully added!").goAway(1500);
        dispatch('getAllMoviesAction')
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
      });
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
        this.$toast.success("Movie was successfully deleted!").goAway(1500);
        dispatch('getAllMoviesAction')
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
        console.error(err);
      });
  },
};
