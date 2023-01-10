export default {
  getMovieAction({ commit }, payload) {
    commit("setMovie", payload);
  },

  registerUser: ({ commit }, payload) => {
    const url = `${process.env.VUE_APP_ROOT_API}accounts/api/register`;
    axios
      .post(url, payload)
      .then((response) => {})
      .catch((err) => {});
  },

  setTokenAction: ({ commit }, payload) => {
    const url = "api/users/login";
    axios
      .post(url, payload)
      .then((response) => {
        commit(types.SET_TOKEN, response.data.token);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("userId", response.data._id);
        router.push({ name: "Dashboard" });
      })
      .catch((err) => {
        console.log(err);
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
    } catch (err) {
      console.error(err);
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
