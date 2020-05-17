<template>
    <div class="body">
        <div class="header">
            <van-icon name="arrow-left" @click="back()" />
            <p>设 置</p>
        </div>

        <div class="head-pic">
            <p>头像</p>
            <div class="right">
                <img src="head-pic.png" />
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="name">
            <p>昵称</p>
            <div class="right">
                <p>{{user}}</p>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="age">
            <p>年龄</p>
            <van-icon name="arrow" />
        </div>
        <settings></settings>

        <div class="footer" @click="logout()">
            退 出 登 录
        </div>
    </div>
</template>
<script>
    import settings from '@/components/settings/settings.vue'
    export default {
        components: {
            settings
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            logout() {
                localStorage.clear();
                this.$router.push({
                    name: "index"
                });
            }
        },
        data(){
            return {
                user:""
            }
        },
        created() {
            if (localStorage.getItem("data") == null) {
                this.$router.push({
                    name: "me"
                });
            } else {
                let data = JSON.parse(localStorage.getItem("data"));
                this.user = data.name;
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
        line-height: .46rem;
    }

    .footer {
        width: 100%;
        height: .51rem;
        font-size: .13rem;
        text-align: center;
        line-height: .51rem;
        color: #fff;
        background-color: #151515;
        position: fixed;
        bottom: 0;
    }

    .head-pic {
        width: 100%;
        height: .91rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .01rem;
    }

    .head-pic .right {
        width: 1.02rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: .15rem;
    }

    .head-pic p {
        font-size: .13rem;
        margin-left: .15rem;
    }

    .head-pic img {
        display: block;
        width: .83rem;
        height: .83rem;
    }

    .head-pic .van-icon {
        display: block;
        font-size: .13rem;
    }

    .name {
        width: 100%;
        height: .48rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name .right {
        /* width: 1.02rem; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: .15rem;
    }

    .name p {
        font-size: .13rem;
        margin-left: .15rem;
    }

    .name .van-icon {
        display: block;
        font-size: .13rem;
    }

    .age {
        width: 100%;
        height: .48rem;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .01rem;
        margin-bottom: .1rem;
    }

    .age p {
        font-size: .13rem;
        margin-left: .15rem;
    }

    .age .van-icon {
        display: block;
        font-size: .13rem;
        margin-right: .15rem;
    }
</style>