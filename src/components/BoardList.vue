<template>
  <div id="list" class="list">
    <div class="list-header">
      <div v-if="!listNameIsChange" @click="focusInput"> {{ listHeader }} </div>
      <textarea
        :rows="textareaSize"
        v-else
        type="text"
        @blur="changeListName"
        v-model="listHeader"
        class="list-name"
        ref="inputName"
      ></textarea>
    </div>
    <div class="cards">
      <cards
        v-for="card in cards"
        :key="card._id"
        :cardName="card.cardName"
      ></cards>
    </div>
    <button type="buttin">Добавить карту</button>
  </div>
</template>
<script>
import Cards from "./Card";
import service from "../services/service";

export default {
  el: "#list",
  props: ["boardListName", "id", "cards"],
  components: {
    Cards,
  },
  data() {
    return {
      textareaSize: 1,
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
    focusInput() {
      this.listNameIsChange = true
      this.$nextTick(() => {
        this.$refs.inputName.select()
        this.$refs.inputName.focus()
      })
    }
  },
};
</script>

<style scoped>
.list {
  padding: 0.5rem;
  background-color: rgb(93 86 86 / 30%);
  border-radius: 3px;
  font: inherit;
  background-color: rgb(235,236,240);
}

button {
  border-radius: 3px;
  margin-top: 0.3rem;
  padding: 0.5rem;
  width: inherit;
  background: rgb(255, 255, 255);
  color: black;
  border: none;
}


.list-name {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  resize: none;
  border: none;
  width: 100%;
}

</style>
