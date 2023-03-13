export default {
  registerUser: function ({ commit }, payload) {
    const url = "auth/register";
    this.$axios
      .post(url, payload)
      .then((response) => {
        this.$toast.success("Successfully registered, please login to continue!").goAway(1500);
        this.$router.push({ name: "login" });
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },

  setTokenAction: function ({ commit, dispatch }, payload) {
    const url = "auth/login";
    this.$axios
      .post(url, payload)
      .then((response) => {
        commit("setToken", response.data.token);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("userId", response.data._id);
        this.$toast.success("Logged in successfully!").goAway(1500);
        this.$router.push({ name: "movie" });
      })
      .then(() => {
        dispatch('getProfileDataAction');
      })
      .catch((err) => {
        console.log(err);
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },

  // Log out functionality
  logOutAction: function ({ commit }) {
    commit("setLogOutSuccess");
    try {
      localStorage.removeItem("Token");
      localStorage.removeItem("userId");
      this.$toast.success("Logged out successfully!").goAway(1500);
    } catch (err) {
      console.error(err);
      this.$toast.error("Some error occurred!").goAway(1500);
    }
    this.$router.push({ name: "login" });
  },

  checkUserAuthentication: ({ commit }) => {
    try {
      const storedToken = localStorage.getItem("Token");
      if (storedToken) {
        commit(types.SET_TOKEN, storedToken);
      }
    } catch (err) {
      console.error(err);
    }
  },

  getProfileDataAction: function ({ commit }) {
    const url = "auth/profile";
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
        commit("setProfileData", response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
