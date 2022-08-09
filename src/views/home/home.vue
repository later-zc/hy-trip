<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import HomeNavBar from './components/HomeNavBar.vue'
  import HomeSearch from './components/HomeSearch.vue'
  


</script>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
  }
</style>