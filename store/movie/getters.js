// /store/getters.js
export default {
  movieGetter(state) {
    return state.single;
  },
  getAllMovies(state) {
    return state.movies;
  }
};
