<template>
    <div>
        <div class="father">
            <son v-for="(v,i) in goodsfaarr" :key="i" :img="v.img" :title="v.title" :text="v.text"></son>
        </div>
    </div>
</template>
<script>
    import son from './goods-son.vue';
    export default {
        components: {
            son
        },
        props:{
            goodsfaarr:Array
        }
    }
</script>
<style scoped>
.father{
    margin-top: .44rem;
    margin-bottom: .51rem;
}
</style>