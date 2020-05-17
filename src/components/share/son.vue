<template>
    <div>
        <div class="Son">
            <div class="son" v-for="(v,i) in arr" :key="i">
                <img :src="v.img" />
                <p>{{v.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch("axiosactshare");
        },
        computed: {
            arr() {
                return this.$store.state.arrshare;
            }
        }
    }
</script>
<style scoped>
.Son{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: .4rem;
}
    .son {
        width: .4rem;
        height: .68rem;
    }

    .son img {
        display: block;
        width: .4rem;
        height: .4rem;
    }

    .son p {
        font-size: .13rem;
        text-align: center;
        margin-top: .14rem;
    }
</style>