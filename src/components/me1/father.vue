<template>
    <div>
        <div class="father">
            <son></son>
        </div>
    </div>
</template>
<script>
    import son from './son.vue';
    export default {
        components: {
            son
        }
    }
</script>
<style scoped>
.father{
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
    margin-top: .09rem;
}
</style>