<template>
    <div class="body">
        <div class="header">
            好物
        </div>
        <goodsfa :goodsfaarr="goodsarr"></goodsfa>
        <menubar></menubar>
    </div>
</template>

<script>
    import menubar from "@/components/menubar.vue";
    import goodsfa from "@/components/goods/goods-fa.vue";
    export default {
        components: {
            menubar,
            goodsfa
        },
        created() {
            this.axios({
                url: "/api/goods",
                method: "get"
            }).then((ok) => {
                // window.console.log(ok.data.goods);
                this.goodsarr = ok.data.goods;
            });
        },
        data() {
            return {
                goodsarr: []
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
        height: 0.46rem;
        color: #fff;
        text-align: center;
        line-height: 0.46rem;
        font-size: 0.14rem;
        background-color: #151515;
        position: fixed;
        top: 0;
    }
</style>