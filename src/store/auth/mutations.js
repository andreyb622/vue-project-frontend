export default {
  login(state, { token, id }) {
    state.token = token;
    state.userId = id;
    state.isAuth = true;
  },
  logout(state) {
    state.token = null;
    state.userId = null;
    state.isAuth = false;
  },
};
