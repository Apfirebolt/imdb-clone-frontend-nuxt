export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },

  addWatchList: function ({ commit }, payload) {
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
        console.log('Response is ', response)
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

  deleteSinglePlaylistAction: function ({ commit }, payload) {
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
        console.log('Deleted')
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
