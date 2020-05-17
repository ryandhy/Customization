<template>
  <div class="index">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/banner.png"/></van-swipe-item>
      <van-swipe-item><img src="@/assets/banner.png"/></van-swipe-item>
    </van-swipe>
    <p class="hot">热销商品</p>
    <hotfa :hotfaarr="hotarr"></hotfa>
    <!-- <hotfa></hotfa> -->

    <mainfa :mainfaarr="mainarr"></mainfa>
    <menubar></menubar>
  </div>
</template>

<script>
import menubar from "@/components/menubar.vue";
import hotfa from "@/components/hot/hot-fa.vue";
import mainfa from "@/components/index-main/index-fa.vue";
export default {
  components: {
    menubar,
    hotfa,
    mainfa
  },
    created() {
      this.axios({
        url: "/api/index_hot",
        method: "get"
      }).then(ok => {
        // window.console.log(ok.data.hot);
        this.hotarr = ok.data.hot;
      });

      this.axios({
        url: "/api/index_main",
        method: "get"
      }).then(ok => {
        // window.console.log(ok.data.main);
        this.mainarr = ok.data.main;
      });
    },
    data() {
      return {
        hotarr: [],
        mainarr:[]
      };
    }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 2.34rem;
}

.index img {
  width: 100%;
  height: 100%;
}

.hot {
  font-size: 0.13rem;
  text-align: center;
  margin-bottom: 0.13rem;
}
</style>
