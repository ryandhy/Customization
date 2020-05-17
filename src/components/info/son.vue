<template>
    <div>
        <div v-for="(v,i) in arr" :key="i">
            <div class="title">
                <div class="_title">
                    <div class="_title1">
                        <img :src="v.icon" />
                        <p>{{v.title}}</p>
                    </div>
                    <div class="_title2"></div>
                    <div class="_title3">
                        <p>{{v.text}}</p>
                    </div>
                </div>
            </div>
            <div class="image">
                <img :src="v.img" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch("axiosactinfo");
        },
        computed: {
            arr() {
                return this.$store.state.arrinfo;
            }
        }
    }
</script>
<style scoped>
    .title {
        width: 100%;
        height: .79rem;
        padding-top: .39rem;
        background-color: #fff;
    }

    ._title {
        width: 3.08rem;
        height: .57rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ._title img {
        display: block;
        width: .44rem;
        height: .44rem;
    }

    ._title1 p {
        font-size: .11rem;
        text-align: center;
    }

    ._title1 {
        width: .44rem;
        height: .57rem;
    }

    ._title2 {
        width: .01rem;
        height: .55rem;
        background-color: #8e8e8e;
    }

    ._title3 {
        width: 2.3rem;
        height: .26rem;
    }

    ._title3 p {
        font-size: .1rem;
    }
    .image{
        width: 100%;
        height: 2.635rem;
    }
    .image img {
        width: 100%;
        height: 100%;
    }
</style>