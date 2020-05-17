<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name: "app",
    components: {}
  };
</script>

<style>
  body,
  p,
  ul,
  ol,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  td,
  input,
  textarea {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    border: 0;
  }

  body {
    font-family: "微软雅黑";
  }

  html {
    font-size: 26.67vw;
  }
</style>