<template>
  <div>
    <div class="cross" @click="back()">
      <van-icon name="cross" />
    </div>
    <div class="customization">
      CUSTOMIZATION
    </div>
    <div class="login-reg">
      <van-cell-group>
        <van-field v-model="value1" left-icon="contact" placeholder="请输入11位手机号码" @blur="input1()" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="value2" center clearable left-icon="closed-eye" placeholder="请输入验证码" @blur="input2()">
          <van-button slot="button" round size="small" type="default" color="#3d3d3d" @click="code()">获取验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button type="default" round size="large" @click="enter()">进入APP</van-button>
    </div>
    <p class="warn">
      温馨提示:未注册的手机号将自动注册，且代表已阅读并同意<a>《用户协议》</a>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        randcode: 0
      };
    },
    methods: {
      back() {
        this.$router.push("/index");
      },
      input1() {
        if (this.value1 == "") {
          this.$toast("手机号不能为空！");
        }
        if (!/^1[3456789]\d{9}$/.test(this.value1)) {
          this.$toast("请输入11位有效手机号！");
        }
      },
      code() {
        this.randcode = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        this.$toast(this.randcode);
      },
      input2() {
        if (this.randcode != Number(this.value2)) {
          this.$toast("请输入正确验证码！");
        }
      },
      enter() {
        if (this.value1 != "" && this.value2 != "" && this.randcode == Number(this.value2) && /^1[3456789]\d{9}$/.test(
            this.value1)) {
          this.axios({
            url: "http://localhost:13000/enter",
            type: "get",
            params: {
              value1: this.value1,
              value2: this.value2
            }
          }).then((ok) => {
            // window.console.log(ok.data.data.data);
            if (ok.data.data.id == 1 || ok.data.data.id == 11) {
              localStorage.setItem("data", JSON.stringify(ok.data.data.data));
              this.$router.push({
                name: "index"
              });
            }
          });
        } else {
          this.$toast("请输入正确完整的手机号和验证码！");
        }
      }
    }
  };
</script>

<style scoped>
  .cross {
    width: 100%;
    height: 0.85rem;
    position: relative;
  }

  .cross .van-icon {
    font-size: 0.3rem;
    position: absolute;
    top: 0.16rem;
    right: 0.16rem;
  }

  .customization {
    width: 100%;
    height: 0.95rem;
    line-height: 0.95rem;
    text-align: center;
    font-size: 0.2rem;
    font-weight: bold;
  }

  .login-reg {
    width: 100%;
    height: 1.24rem;
    margin-top: 1.48rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .warn {
    color: #b0b0b0;
    font-size: 0.09rem;
    text-align: center;
  }

  .warn a {
    color: #0c0c0c;
  }
</style>