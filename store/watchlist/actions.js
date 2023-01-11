const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
  },
}

export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },

  addWatchList: function ({ commit }, payload) {
    const url = 'playlist'
    this.$axios
      .post(url, payload)
      .then((response) => {
        console.log('Response is ', response)
      })
      .catch((err) => {});
  },

  getAllPlaylistAction: function ({ commit }) {
    const url = "playlist";
    this.$axios
      .get(url)
      .then((response) => {
        commit("setPlaylists", response);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  getSinglePlaylistAction: function ({ commit }) {
    const url = "users/profile";
    this.$axios
      .get(url)
      .then((response) => {
        commit("setSinglePlaylist", response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
