<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import useHomeStore from '@/stores/modules/home';
  import { storeToRefs } from 'pinia';

  const homeStore = useHomeStore()
  const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  .categories {
    display: flex;
    margin: 20px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    
    .item {
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      align-items: center;
      width: 70px;

      img {
        width: 32px;
      }

      span {
        font-size: 12px;
      }
    }
  }
</style>