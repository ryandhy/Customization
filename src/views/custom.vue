<template>
  <div>
    <div class="header">
      <div class="header-left">
        <van-tabs
          v-model="active"
          background="#151515"
          color="#fff"
          title-active-color="#fff"
          title-inactive-color="#fff"
        >
          <van-tab title="衬衫">
            <van-tabs
              background="#fff"
              color="#000"
              title-active-color="#000"
              title-inactive-color="#000"
              animated
              swipeable
            >
              <van-tab title="全部">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="白">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="蓝">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="格纹">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="条纹">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="暗纹">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
              <van-tab title="印花">
                <father></father>
                <father></father>
                <father></father>
                <father></father>
              </van-tab>
            </van-tabs>
          </van-tab>
          <van-tab title="西服上衣">
            <van-tabs
              background="#fff"
              color="#000"
              title-active-color="#000"
              title-inactive-color="#000"
              animated
            >
              <van-tab title="全部">
                <fatherjacket></fatherjacket>
              </van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
            </van-tabs>
          </van-tab>
          <van-tab title="西服套装">
            <van-tabs
              background="#fff"
              color="#000"
              title-active-color="#000"
              title-inactive-color="#000"
              animated
            >
              <van-tab title="全部">
                <fathersuit></fathersuit>
              </van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
            </van-tabs>
          </van-tab>
          <van-tab title="休闲裤">
            <van-tabs
              background="#fff"
              color="#000"
              title-active-color="#000"
              title-inactive-color="#000"
              animated
            >
              <van-tab title="全部">
                <!-- <father></father> -->
                <fatherpants></fatherpants>
              </van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
              <van-tab title="" disabled></van-tab>
            </van-tabs>
          </van-tab>
          <van-tab title="" disabled></van-tab>
        </van-tabs>
      </div>
      <div class="header-right">
        <van-icon name="search" @click="search()" />
        <van-popup v-model="show" position="top" :style="{ height: '10%' }">
          <van-search
            v-model="value"
            placeholder="关键词：上衣 套西 衬衫 西裤"
            show-action
            shape="round"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch()">搜索</div>
          </van-search>
        </van-popup>
      </div>
    </div>
    <!-- <router-view></router-view> -->
    <menubar></menubar>
  </div>
</template>

<script>
import menubar from "@/components/menubar.vue";
import father from "@/components/custom/father.vue";
import fatherjacket from "@/components/custom/fatherjacket.vue";
import fathersuit from "@/components/custom/fathersuit.vue";
import fatherpants from "@/components/custom/fatherpants.vue";
export default {
  data() {
    return {
      active: 0,
      value: "",
      show: false
    };
  },
  components: {
    menubar,
    father,
    fatherjacket,
    fathersuit,
    fatherpants
  },
  methods: {
    search() {
      this.show = true;
    },
    onSearch() {
      if (this.value != "") {
        this.axios({
          url: "http://localhost:13000/search",
          method: "get",
          params: { val: this.value }
        }).then(ok => {
          //   window.console.log(ok.data.data.data);
          this.$router.push({
            name: "search",
            params: { arr: ok.data.data.data }
          });
        });
      }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.46rem;
  display: flex;
  background-color: #151515;
  position: relative;
}

.header-left {
  /* width: 3.18rem; */
  width: 100%;
  height: 0.46rem;
}

.header-left .van-tabs__content {
  width: 100%;
}

.header-right {
  /* flex: 1; */
  /* height: .44rem; */
  width: 0.57rem;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10000;
}

.header-right .van-icon {
  display: block;
  color: #fff;
  font-size: 0.17rem;
  line-height: 0.46rem;
}
</style>
