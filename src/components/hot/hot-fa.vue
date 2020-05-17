<template>
  <div class="father">
    <son
      v-for="(v, i) in hotfaarr"
      :key="i"
      :img="v.img"
      :title="v.title"
      :price="v.price"
    ></son>
    <!-- <son></son> -->
  </div>
</template>

<script>
import son from "./hot-son.vue";
export default {
  components: {
    son
  },
  props: {
    hotfaarr: Array
  }
};
</script>

<style scoped>
.father {
  width: 100%;
  height: 2rem;
  display: flex;
  overflow-x: auto;
}
</style>
