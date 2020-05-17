<template>
    <div>
        <div class="Son">
            <div class="son" v-for="(v, i) in arr" :key="i">
                <img :src="v.img" @click="to(v.title,v.img,v.price)" />
                <h2>{{ v.title }}</h2>
                <p>{{ v.text }}</p>
                <h1>{{ v.price }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch("axiosactjacket");
        },
        computed: {
            arr() {
                return this.$store.state.arrjacket;
            }
        },
        methods: {
            to(value, img, price) {
                this.$router.push({
                    name: "info",
                    params: {
                        value,
                        img,
                        price
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .Son {
        display: flex;
        flex-wrap: wrap;
    }

    .son {
        width: 50%;
        margin-bottom: 0.33rem;
    }

    .son img {
        display: block;
        width: 1.4rem;
        height: 1.65rem;
        margin: 0 auto;
    }

    .son h2 {
        font-size: 0.1rem;
    }

    .son p {
        font-size: 0.09rem;
        color: #5d5d5d;
        margin: 0.05rem 0;
    }

    .son h1 {
        font-size: 0.11rem;
    }

    .son h2,
    .son p,
    .son h1 {
        margin-left: 0.2rem;
    }
</style>