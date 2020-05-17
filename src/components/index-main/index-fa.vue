<template>
    <div>
        <son v-for="(v,i) in mainfaarr" :key="i" :img="v.img" :title="v.title" :text="v.text"></son>
    </div>
</template>
<script>
    import son from "./index-son.vue";
    export default {
        components: {
            son
        },
        props: {
            mainfaarr: Array
        }
    }
</script>
<style scoped>

</style>