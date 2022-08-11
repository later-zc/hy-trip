<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <HomeSearch></HomeSearch>
    <HomeCategories></HomeCategories>
    <HomeContent></HomeContent>
  </div>
</template>

<script setup>
  import HomeNavBar from "./components/HomeNavBar.vue";
  import HomeSearch from "./components/HomeSearch.vue";
  import useHomeStore from "@/stores/modules/home";
  import HomeCategories from "./components/HomeCategories.vue";
  import HomeContent from "./components/HomeContent.vue";

  const homeStore = useHomeStore()
  // 获取热门建议
  homeStore.fetchHotSuggests()
  // 获取分类数据
  homeStore.fetchCategories()
  // 获取房屋数据
  homeStore.fetchHouseList(1)

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