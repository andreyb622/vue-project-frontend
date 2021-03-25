import axios from "axios";

class Service {
  async getBoards() {
    return await axios.get("/boards").then((response) => response.data);
  }
  async getBoard(id) {
    return await axios.get(`/boards/${id}`).then((response) => response.data);
  }
  async getUsersForBoard(id) {
    return await axios.get(`/users/${id}`).then((response) => response.data);
  }
  async updateList({ id, boardListName }) {
    return await axios.put(`/boardList/${id}`, {
      boardListName: boardListName,
    });
  }
}

const service = new Service();

export default service;
