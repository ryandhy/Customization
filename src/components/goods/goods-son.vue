<template>
    <div>
        <div class="son">
            <p>{{title}}</p>
            <div class="img">
                <img :src="img" @click="to()" />
            </div>
            <p>{{text}}</p>
            <div class="footer">
                <van-icon name="cluster-o" @click="like()" />
                <van-icon name="star-o" @click="like()" />
                <van-icon name="like-o" @click="like()" />
            </div>
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
                        price: "￥299.00"
                    }
                });
            },
            like() {
                if (localStorage.getItem("data") == null) {
                    this.$toast("请登录后访问！");
                    this.$router.push({
                        name: "me"
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .son {
        background-color: #fff;
        margin: .105rem 0;
        padding-top: .1rem;
    }

    .son .img {
        width: 3.5rem;
        height: 1.9rem;
        margin: 0 auto;
    }

    .son p {
        font-size: .13rem;
        margin: .11rem 0;
        margin-left: .14rem;
    }

    .son img {
        width: 100%;
        height: 100%;
    }

    .son .footer {
        width: 100%;
        height: .385rem;
        /* margin-top: .01rem; */
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: .01rem solid #ededed;
    }

    .son .footer .van-icon {
        display: block;
        font-size: .19rem;
        margin-right: .27rem;
        color: #a7a7a7;
    }
</style>