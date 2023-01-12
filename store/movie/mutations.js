// /store/mutations.js
export default {
  setMovie(state, val) {
    state.single = val;
  },
  setAllMovies(state, val) {
    state.movies = val;
  },
};
