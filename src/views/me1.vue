<template>
  <div class="body">
    <div class="header">
      <div class="header-top">
        <van-icon name="setting-o" @click="settings()" />
        <van-icon name="envelop-o" @click="news()" />
      </div>
      <div class="header-bottom">
        <div class="head-pic">
          <img src="head-pic.png" />
        </div>
      </div>
      <p class="welcome">欢迎您：{{ user }}</p>
    </div>

    <father></father>
    <menubar></menubar>
  </div>
</template>
<script>
import menubar from "@/components/menubar.vue";
import father from "@/components/me1/father.vue";
export default {
  components: {
    menubar,
    father
  },
  data() {
    return {
      user: ""
    };
  },
  created() {
    if (localStorage.getItem("data") == null) {
      this.$router.push({ name: "me" });
    } else {
      let data = JSON.parse(localStorage.getItem("data"));
      this.user = data.name;
    }
  },
  methods:{
    settings(){
      this.$router.push({name:"settings"});
    },
    news(){
      this.$toast("您暂无任何消息…");
    }
  }
};
</script>
<style scoped>
.body {
  background-color: #ededed;
}

.header {
  width: 100%;
  height: 2.11rem;
  background-image: linear-gradient(to bottom right, #2a0001, #0f0317, #000522);
}

.header-top {
  width: 100%;
  height: 0.42rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header-top .van-icon {
  font-size: 0.21rem;
  color: #fff;
}

.header-top .van-icon:nth-child(1) {
  margin-left: 0.125rem;
}

.header-top .van-icon:nth-child(2) {
  margin-right: 0.125rem;
}

.head-pic {
  text-align: center;
}

.head-pic img {
  width: 0.83rem;
  height: 0.83rem;
}

.header .welcome {
  color: #fff;
  text-align: center;
  font-size: 0.15rem;
  line-height: 0.35rem;
}
</style>
