<template>
    <div>
        <div class="father">
            <son></son>
        </div>
    </div>
</template>
<script>
    import son from './sonjacket.vue'
    export default {
        components: {
            son
        }
    }
</script>
<style scoped>
    .father {
        margin-top: 0.1rem;
    }
</style>