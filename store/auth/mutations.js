// /store/mutations.js
export default {
  setMovie(state, val) {
    state.token = val;
    state.isAuthenticated = true;
  },
  setLogOutSuccess(state, val) {
    state.token = null;
    state.isAuthenticated = false;
    state.profileData = null;
  },
  setProfileData(state, val) {
    state.profileData = val;
  },
};
