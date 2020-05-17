<template>
  <div>
    <van-nav-bar
      title="搜索"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    ></van-nav-bar>
    <div class="search" v-for="(v,i) in arr" :key="i">
      <img :src="v.img" />
      <div class="text">
        <h1>{{v.title}}</h1>
        <p>{{v.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.arr = this.$route.params.arr;
  }
};
</script>
<style scoped>
.search {
  width: 100%;
  height: auto;
  padding: 0.1rem 0;
  display: flex;
}
.search img {
  display: block;
  width: 1.2rem;
  height: 1.5rem;
}
.search h1 {
  font-size: 0.15rem;
  font-weight: normal;
}
.search p {
  font-size: 0.13rem;
  margin-top: 0.5rem;
}
.search .text {
  margin-left: 0.1rem;
  margin-top: 0.3rem;
}
</style>
