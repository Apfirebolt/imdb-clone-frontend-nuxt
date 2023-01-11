// /store/getters.js
export default {
  getAllPlayList(state) {
    return state.playlists;
  },
  getSinglePlayList(state) {
    return state.playlist;
  },
};
