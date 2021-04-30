import service from "../../services/service";

export default {
  async fetchBoards({ commit }) {
    try {
      const boards = await service.getBoards();
      commit("setBoards", boards);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchBoard({ commit }, id) {
    try {
      const board = await service.getBoard(id);
      commit("setBoard", board);
    } catch (e) {
      console.log(e);
    }
  },
  // async ChangeListName ({commit}) {
  //   let boardlist = await serviceюг
  // }
};
