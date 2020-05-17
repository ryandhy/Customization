<template>
  <div class="Son">
    <div class="son">
      <!-- <img :src="v.img" v-for="(v, i) in sonarr" :key="i"/>
      <p class="p1">{{ v.title }}</p>
      <p class="p2">{{ v.price }}</p> -->
      <img :src="img" @click="to()" />
      <p class="p1">{{ title }}</p>
      <p class="p2">{{ price }}</p>
    </div>
  </div>
</template>

<script>
  //  
  export default {
    props: {
      img: String,
      title: String,
      price: String
    },
    methods: {
      to() {
        this.$router.push({
          name: "info",
          params: {
            value: this.title,
            img: this.img,
            price: this.price
          }
        });
      }
    }
  };
</script>

<style scoped>
  .Son {
    display: flex;
  }

  .son {
    width: 1.45rem;
    height: 1.8rem;
    font-size: 0.12rem;
  }

  .son p {
    text-align: center;
  }

  .son .p1 {
    margin-top: .22rem;
  }

  .son .p1 {
    margin-bottom: 0;
  }

  .son img {
    width: 1.45rem;
    height: 1.25rem;
  }
</style>