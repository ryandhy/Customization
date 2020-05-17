<template>
    <div>
        <div class="son">
            <!-- <router-link to="{name:'info',params:{_title:'title'}}"><img :src="img" /></router-link> -->
            <img :src="img" @click="to()" />
            <h1>{{title}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            img: String,
            title: String,
            text: String
        },
        methods: {
            to() {
                this.$router.push({
                    name: "info",
                    params: {
                        value: this.title,
                        img: this.img,
                        price: "￥589.00"
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .son {
        height: 2.86rem;
        text-align: center;
        margin-bottom: .51rem;
    }

    .son img {
        width: 3.5rem;
        height: 2.17rem;
        text-align: center;
    }

    .son h1 {
        font-size: .19rem;
    }

    .son p {
        font-size: .12rem;
    }
</style>