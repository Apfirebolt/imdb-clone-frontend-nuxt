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
        this.$toast.success("Watch list added successfully!").goAway(1500);
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
      });
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
        this.$toast.success("Playlist deleted successfully!").goAway(1500);
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        console.error(err);
        this.$toast.error("Some error occurred!").goAway(1500);
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
        this.$toast.success("Playlist updated successfully!").goAway(1500);
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        console.error(err);
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },

  addMovieToWatchlist: function ({ commit, dispatch }, payload) {
    const url = `playlist/${payload.playlistId}/add-movie`;
    let token = localStorage.getItem("Token");
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    this.$axios
      .patch(url, payload, config)
      .then((response) => {
        this.$toast.success("Movie added to watch list successfully!").goAway(1500);
        dispatch('getAllPlaylistAction')
      })
      .catch((err) => {
        console.error(err);
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },
};
