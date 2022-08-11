<template>
  <div class="app">
    <router-view></router-view>
    <!-- <TabBar v-if="!route.meta.hideTabBar"></TabBar> -->
    <TabBar></TabBar>
  </div>
</template>

<script setup>
  import TabBar from "@/components/TabBar/TabBar.vue";
  import { useRoute } from "vue-router";

  const route = useRoute()

</script>

<style scoped>

</style>
