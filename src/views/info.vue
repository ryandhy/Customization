<template>
  <div class="body">
    <div class="header">
      <van-icon name="arrow-left" @click="back()" />
      <van-icon name="ellipsis" @click="share()" />
      <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '20%' }">
        <share></share>
      </van-popup>
      <img src="info-bg.png" />
    </div>
    <div class="explain">
      <h1>{{title}}</h1>
      <h5>每一个做小的细节，只为成就一位绅士的不凡</h5>
    </div>
    <div class="image1">
      <img src="image1.png" />
    </div>
    <div class="image2">
      <img src="image2.png" />
    </div>

    <father></father>

    <div class="text">
      采用天然深海白蝶贝贝母扣，传承经典的精致用料。
    </div>
    <div class="info4">
      <img src="info4.png" />
    </div>
    <div class="info5">
      <img src="info5.png" />
    </div>

    <div class="table">
      <table align="center" cellspacing="0">
        <tr>
          <td colspan="2">品牌: MORDER</td>
        </tr>
        <tr>
          <td>系列: G系列</td>
          <td>版型:量身定制</td>
        </tr>
        <tr>
          <td>面料品牌: SOKTAS</td>
          <td>面料产地: 土耳其</td>
        </tr>
        <tr>
          <td>面料材质: 100%</td>
          <td>棉针脚数: 3cm 21针</td>
        </tr>
        <tr>
          <td>领型:温莎领门</td>
          <td>门襟:明门襟</td>
        </tr>
        <tr>
          <td>袖口:法式袖口领</td>
          <td>插片: 活领插片</td>
        </tr>
        <tr>
          <td>补强工艺:侧缝三角布</td>
          <td>后背: 后背收省</td>
        </tr>
        <tr>
          <td>钉扣:十字钉扣</td>
          <td>调节扣眼:肚围45度斜扣</td>
        </tr>
        <tr>
          <td>纽扣:天然贝母扣</td>
          <td>领衬:德国wendier衬</td>
        </tr>
        <tr>
          <td colspan="2">缝线:英国高士线</td>
        </tr>
      </table>
    </div>

    <div class="info6">
      <img src="info6.png" />
    </div>

    <div class="text1">
      因摄影过程中有灯光，摄影器材等原因，实际商品或与图片存在细微差异，颜色请以实物为准。
    </div>

    <div class="footer">
      <div class="left">
        <van-icon name="star-o" />
        <van-icon name="service-o" />
      </div>
      <div class="right" @click="buy()">购&nbsp;买</div>
    </div>
  </div>
</template>
<script>
  import father from "@/components/info/father.vue";
  import share from "@/components/share/father.vue";
  export default {
    components: {
      father,
      share
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      share() {
        this.show = true;
      },
      buy() {
        if (localStorage.getItem("data") != null) {
          this.$router.push({
            name: "cart",
            params: {
              img: this.img,
              title: this.title,
              price: this.price
            }
          });
        } else {
          this.$toast("请登录后访问！");
          this.$router.push({
            name: "me"
          });
        }
      }
    },
    data() {
      return {
        title: "",
        img: "",
        price: "",
        show: false
      }
    },
    created() {
      this.title = this.$route.params.value;
      this.img = this.$route.params.img;
      this.price = this.$route.params.price;
    }
  };
</script>
<style scoped>
  .body {
    background-color: #f0f0f0;
    padding-bottom: 0.5rem;
  }

  .header {
    width: 100%;
    height: 1.92rem;
    position: relative;
  }

  .header img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .header .van-icon {
    display: block;
    color: #fff;
    font-size: 0.16rem;
  }

  .header .van-icon:nth-child(1) {
    position: absolute;
    left: 0.175rem;
    top: 0.3rem;
  }

  .header .van-icon:nth-child(2) {
    position: absolute;
    right: 0.175rem;
    top: 0.3rem;
  }

  .explain {
    width: 3.55rem;
    height: 1.1rem;
    background-color: #fff;
    margin: 0.1rem;
    text-align: center;
  }

  .explain h1 {
    font-size: 0.17rem;
    font-weight: normal;
    padding-top: 0.33rem;
  }

  .explain h5 {
    font-size: 0.1rem;
    font-weight: normal;
    margin-top: 0.19rem;
  }

  .image1 {
    width: 100%;
    height: 4rem;
    background-color: #fff;
    margin-bottom: 0.1rem;
  }

  .image1 img {
    display: block;
    width: 2.65rem;
    height: 2.9rem;
    padding: 0.55rem;
  }

  .image2 {
    width: 100%;
    height: 4.23rem;
    background-color: #cbccce;
  }

  .image2 img {
    display: block;
    width: 2.65rem;
    height: 3.52rem;
    padding: 0.34rem 0.55rem;
  }

  .text {
    width: 100%;
    height: 0.84rem;
    font-size: 0.1rem;
    text-align: center;
    line-height: 1rem;
    background-color: #fff;
  }

  .info4 {
    width: 100%;
    height: 2.7rem;
    margin-bottom: 0.1rem;
  }

  .info4 img {
    width: 100%;
    height: 100%;
  }

  .info5 {
    width: 100%;
    height: 3.74rem;
    margin-bottom: 0.1rem;
  }

  .info5 img {
    width: 100%;
    height: 100%;
  }

  .table {
    width: 100%;
    height: 2.52rem;
    border-collapse: collapse;
    background-color: #fff;
    padding: 0.16rem 0;
    margin-bottom: 0.1rem;
  }

  table {
    width: 3.53rem;
    height: 2.49rem;
    font-size: 0.1rem;
    font-weight: bold;
  }

  td {
    width: 1.75rem;
    height: 0.24rem;
    text-indent: 0.24rem;
    border: 1px solid #ededed;
  }

  .info6 {
    width: 100%;
    height: 3.94rem;
    margin-bottom: 0.1rem;
  }

  .info6 img {
    width: 100%;
    height: 100%;
  }

  .text1 {
    width: 3.29rem;
    height: 0.23rem;
    font-size: 0.1rem;
    color: #8e8e8e;
    background-color: #fff;
    padding: 0.23rem;
  }

  .footer {
    width: 100%;
    height: 0.57rem;
    display: flex;
    position: fixed;
    bottom: 0;
  }

  .footer .left {
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer .left .van-icon {
    display: block;
    font-size: .23rem;
    color: #000;
  }

  .footer .right {
    width: 50%;
    height: 100%;
    color: #fff;
    text-align: center;
    line-height: 0.57rem;
    font-size: 0.13rem;
    background-color: #000;
  }
</style>