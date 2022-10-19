<template>
  <div class="app">
    <router-view v-slot="props">
      <keep-alive include="Home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- <TabBar v-show="!route.meta.hideTabBar"></TabBar> -->
    <TabBar></TabBar>
    <Load></Load>
  </div>
</template>

<script setup>
  import TabBar from '@/components/TabBar/TabBar.vue';
  import Load from '@/components/Load/Load.vue';
  import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<style scoped>

</style>
