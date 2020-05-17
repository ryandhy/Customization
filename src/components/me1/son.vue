<template>
    <div>
        <div class="Son">
            <div class="son" v-for="(v,i) in arr" :key="i" @click="cart(v.title)">
                <van-icon :name="v.img" />
                <p>{{v.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch("axiosact");
        },
        computed: {
            arr() {
                return this.$store.state.arr;
            }
        },
        methods:{
            cart(value){
                if(value == "我的订单"){
                    this.$toast("您的订单空空如也…");
                }
                if(value == "购物袋"){
                    this.$toast("您的购物袋空空如也…");
                }
                if(value == "优惠券"){
                    this.$toast("您暂无可用优惠券…");
                }
                if(value == "我的收藏"){
                    this.$toast("您还未收藏任何物品…");
                }
                if(value == "预约量体"){
                    this.$toast("您暂无预约量体资格…");
                }
                if(value == "礼品卡"){
                    this.$toast("您暂无可用礼品卡…");
                }
                if(value == "拍照量体"){
                    this.$toast("您的设备不支持拍照量体…");
                }
                if(value == "形体数据"){
                    this.$toast("您还未保存任何形体数据…");
                }
                if(value == "邀请好友"){
                    this.$toast("您暂无邀请好友资格…");
                }
            }
        }
    }
</script>
<style scoped>
    .Son {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .son {
        width: 1.24rem;
        height: 1.14rem;
        text-align: center;
        margin-bottom: .01rem;
        background-color: #fff;
    }

    .son .van-icon {
        display: block;
        font-size: .285rem;
        padding-top: .29rem;
    }

    .son p {
        font-size: .13rem;
        margin-top: .15rem;
    }
</style>