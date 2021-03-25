<template>
  <div class="list">
    <div class="list-header">
      <div v-if="!listNameIsChange" @click="listNameIsChange = true">
        {{ listHeader }}
      </div>
      <input
        v-else
        type="text"
        :onChange="changeListName"
        v-model="listHeader"
      />
    </div>
    <div class="cards">
      <cards
        v-for="card in cards"
        :key="card._id"
        :cardName="card.cardName"
      ></cards>
    </div>
  </div>
</template>
<script>
import Cards from "./Card";
import service from "../services/service";

export default {
  props: ["boardListName", "id", "cards"],
  components: {
    Cards,
  },
  data() {
    return {
      listHeader: this.boardListName,
      listNameIsChange: false,
    };
  },
  methods: {
    changeListName() {
      this.listNameIsChange = false;
      service.updateList({
        id: this.id,
        boardListName: this.listHeader,
      });
    },
  },
};
</script>

<style scoped>
.list {
  width: 15%;
  padding: 0.5rem;
  background-color: rgb(93 86 86 / 30%);
  border-radius: 3px;
  font: inherit;
  color: rgb(255, 255, 255);
}
</style>
