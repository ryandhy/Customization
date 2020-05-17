<template>
    <div>
        <div class="set" v-for="(v,i) in arr" :key="i">
            <p>{{v.name}}</p>
            <van-icon name="arrow" />
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch("axiosactset");
        },
        computed: {
            arr() {
                return this.$store.state.arrset;
            }
        }
    }
</script>
<style scoped>
    .set {
        width: 100%;
        height: .48rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .01rem;
        margin-bottom: .1rem;
    }

    .set p {
        font-size: .13rem;
        margin-left: .15rem;
    }

    .set .van-icon {
        display: block;
        font-size: .13rem;
        margin-right: .15rem;
    }
</style>