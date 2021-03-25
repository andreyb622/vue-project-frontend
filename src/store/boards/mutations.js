export default {
  setBoards(state, boards) {
    state.boards = boards;
  },
  setBoard(state, { board, users }) {
    state.board = board;
    state.users = users;
  },
};
