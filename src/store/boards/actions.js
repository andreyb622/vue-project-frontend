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
      const users = await Promise.all(
        board.users.map((e) => service.getUsersForBoard(e))
      ).then((response) => response);
      commit("setBoard", { board, users });
    } catch (e) {
      console.log(e);
    }
  },
  // async ChangeListName ({commit}) {
  //   let boardlist = await serviceюг
  // }
};
