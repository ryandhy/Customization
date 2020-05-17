<template>
    <div class="body">
        <div class="header">
            <van-icon name="arrow-left" @click="back()" />
            <p>确认订单</p>
        </div>
        <div class="addr">
            <van-icon name="add-o" />
            <span>请创建收货地址</span>
        </div>
        <div class="data">
            <p>量体数据确认</p>
            <p>姓名：</p>
            <p>身高：&nbsp;体重：</p>
            <van-icon name="arrow" />
        </div>
        <div class="coupon">
            <div class="left">
                <van-icon name="coupon-o" />
                <span>请选择优惠券</span>
            </div>
            <van-icon name="arrow" />
        </div>
        <div class="info">
            <van-card :num="total" :price="price" desc="属于你的私人定制" :title="title" :thumb="img">
                <div slot="footer">
                    <van-button size="mini" @click="reduce()">-</van-button>
                    <van-button size="mini" @click="add()">+</van-button>
                </div>
            </van-card>
        </div>
        <div class="price">
            <p><b>商品合计：</b><span>￥<i>{{totalprice}}</i>.00</span></p>
            <p><b>运费：</b><span>￥<i>0</i>.00</span></p>
            <p><b>优惠：</b><span>-￥<i>0</i>.00</span></p>
        </div>

        <div class="Footer">
            <p><b>总 计：</b><span>￥<i>{{totalprice}}</i>.00</span></p>
            <p @click="order()">下 单</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                total: 1, //数量
                img: "",
                title: "",
                price: ""
            };
        },
        computed: {
            totalprice() {
                return this.price * this.total;
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            reduce() {
                if (this.total >= 1) {
                    this.total--;
                }
            },
            add() {
                this.total++;
            },
            order() {
                this.$toast("请填写完整信息后下单！");
            }
        },
        created() {
            this.img = this.$route.params.img;
            this.title = this.$route.params.title;
            this.price = this.$route.params.price.slice(1);
        }
    };
</script>
<style scoped>
    .body {
        background-color: #ededed;
    }

    .header {
        width: 100%;
        height: 0.46rem;
        background-color: #151515;
        position: relative;
    }

    .header .van-icon {
        display: inline-block;
        color: #fff;
        font-size: 0.15rem;
        position: absolute;
        top: 0.16rem;
        left: 0.16rem;
    }

    .header p {
        color: #fff;
        text-align: center;
        font-size: 0.15rem;
        line-height: 0.46rem;
    }

    .addr {
        width: 100%;
        height: 0.79rem;
        line-height: 0.79rem;
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .addr .van-icon {
        display: block;
        font-size: 0.14rem;
        margin: 0 0.15rem;
    }

    .addr span {
        display: block;
        font-size: 0.13rem;
    }

    .data {
        width: 100%;
        height: 0.88rem;
        font-size: 0.13rem;
        background-color: #fff;
        margin-top: 0.08rem;
        padding-top: 0.1rem;
        position: relative;
    }

    .data p {
        margin: 0.08rem 0;
        margin-left: 0.16rem;
    }

    .data .van-icon {
        position: absolute;
        top: 0.73rem;
        right: 0.21rem;
    }

    .coupon {
        width: 100%;
        height: 0.52rem;
        background-color: #fff;
        margin-top: 0.08rem;
        font-size: 0.13rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .coupon .left {
        display: flex;
        align-items: center;
    }

    .coupon .van-icon:nth-child(1) {
        margin-left: 0.21rem;
        margin-right: 0.15rem;
    }

    .coupon .van-icon:nth-child(2) {
        margin-right: 0.21rem;
    }

    .info {
        width: 100%;
        height: 1.34rem;
        margin-top: 0.08rem;
    }

    .price {
        width: 100%;
        height: auto;
        font-size: 0.13rem;
        background-color: #fff;
    }

    .price p {
        width: 100%;
        height: 0.41rem;
        line-height: 0.41rem;
        border-bottom: 1px solid #ededed;
        position: relative;
    }

    .price b {
        font-weight: normal;
        margin-left: 0.15rem;
    }

    .price i {
        font-style: normal;
        margin-left: 0.15rem;
    }

    .price span {
        position: absolute;
        right: 0.15rem;
    }

    .Footer {
        width: 100%;
        height: .51rem;
        display: flex;
        position: fixed;
        bottom: 0;
    }

    .Footer p {
        width: 50%;
        height: 100%;
        font-size: .13rem;
        text-align: center;
        line-height: .51rem;
    }

    .Footer b {
        font-weight: normal;
    }

    .Footer i {
        font-style: normal;
    }

    .Footer span {
        color: #f00;
    }

    .Footer p:nth-child(1) {
        background-color: #fff;
    }

    .Footer p:nth-child(2) {
        color: #fff;
        background-color: #000;
    }
</style>