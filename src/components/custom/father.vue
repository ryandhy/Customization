<template>
  <div>
    <div class="father">
      <son></son>
    </div>
  </div>
</template>
<script>
import son from "./son.vue";
export default {
  components: {
    son
  }
};
</script>
<style scoped>
.father{
    margin-bottom: .51rem;
}
</style>
