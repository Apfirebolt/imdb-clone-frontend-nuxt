export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },

  addWatchList: function ({ commit, dispatch }, payload) {
    const url = 'playlist'
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
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {});
  },

  getAllPlaylistAction: function ({ commit }) {
    const url = "playlist";
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
        commit("setPlaylists", response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  deleteSinglePlaylistAction: function ({ commit, dispatch }, payload) {
    const url = `playlist/${payload._id}`;
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
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        console.error(err);
      });
  },

  updateSinglePlaylistAction: function ({ commit, dispatch }, payload) {
    const url = `playlist/${payload._id}`;
    let token = localStorage.getItem("Token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    this.$axios
      .put(url, payload, config)
      .then((response) => {
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
