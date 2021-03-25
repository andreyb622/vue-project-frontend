import { createStore } from "vuex";
import boards from "./boards";
import auth from "./auth";

export default createStore({
  modules: {
    boards,
    auth,
  },
});
