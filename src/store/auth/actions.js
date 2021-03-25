import axios from "axios";

export default {
  async login({ commit }, payload) {
    try {
      const response = await axios.post("/auth/login", payload);
      const token = response.data.token;
      const id = response.data.user._id;
      console.l;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      commit("login", { token, id });
    } catch (e) {
      console.log("err", e);
    }
  },
  logout({ commit }) {
    commit("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    delete axios.defaults.headers.common["Authorization"];
  },
  async signUp({ commit }, user) {
    const response = await axios.post("/users", user);
    commit("signUp", response);
  },
};
