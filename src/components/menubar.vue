<template>
  <!-- <div> -->
  <div class="main">
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/custom" icon="orders-o">
        定制
      </van-tabbar-item>
      <van-tabbar-item replace to="/goods" icon="goods-collect-o">
        好物
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/me"
        icon="user-circle-o"
        v-if="!bool"
      >
        我
      </van-tabbar-item>
      <van-tabbar-item replace to="/me1" icon="user-circle-o" v-else>
        我
      </van-tabbar-item>
    </van-tabbar>
  </div>

  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      bool: false
    };
  },
  created() {
    let data = localStorage.getItem("data");
    if (data != null) {
      this.bool = true;
    }
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 0.51rem;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  font-size: 0.09rem;
  z-index: 111;
}

.main a {
  display: block;
  font-size: 0.09rem;
}
</style>
