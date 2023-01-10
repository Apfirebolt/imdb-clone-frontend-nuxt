// /store/getters.js
export default {
  getToken(state) {
    return state.token;
  },
  getIsUserAuthenticated(state) {
    return state.isAuthenticated;
  },
  getProfileData(state) {
    return state.profileData;
  },
};
