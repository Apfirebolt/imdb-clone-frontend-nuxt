export default {
  registerUser: function ({ commit }, payload) {
    const url = "auth/register";
    this.$axios
      .post(url, payload)
      .then((response) => {
        this.$toast.success("Successfully registered, please login to continue!").goAway(1500);
      })
      .catch((err) => {
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },

  setTokenAction: function ({ commit }, payload) {
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
      .catch((err) => {
        console.log(err);
        this.$toast.error("Some error occurred!").goAway(1500);
      });
  },

  // Log out functionality
  logOutAction: ({ commit }) => {
    commit(types.LOG_OUT_SUCCESS);
    try {
      events.emit("add_toast", {
        content: "Logged out successfully",
        type: "success",
      });
      localStorage.removeItem("Token");
      localStorage.removeItem("userId");
      this.$toast.success("Logged out successfully!").goAway(1500);
    } catch (err) {
      console.error(err);
      this.$toast.error("Some error occurred!").goAway(1500);
    }
    router.push({ name: "Login" });
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

  getProfileDataAction: ({ commit }) => {
    const url = "users/profile";
    interceptor
      .get(url)
      .then((response) => {
        commit(types.SET_PROFILE_DATA, response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
