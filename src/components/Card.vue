<template>
  <div class="card">
    {{ cardName }}
  </div>
</template>

<script>
export default {
  props: ["cardName"],
};
</script>

<style scoped>
.card {
  border-radius: 3px;
  margin-top: 0.3rem;
  padding: 0.5rem;
  width: inherit;
  background: rgb(255, 255, 255);
  color: black;
}
</style>
