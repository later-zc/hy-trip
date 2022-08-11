<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div 
          class="item" 
          :class="{ active: curIndex == index }" 
          @click="itemClick(index, item)">
        <img :src="getAssetsUrl(curIndex == index ? item.imageActive : item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
 
<script setup>
  import tabbarData from "@/assets/data/tabbar.js";
  import { getAssetsUrl } from "@/utils/loadAssets.js";
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const curIndex = ref(0)
  const router = useRouter()
  const itemClick = (index, item) => {
    curIndex.value = index
    router.push(item.path)
  }

</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #eee;
    display: flex;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        color: var(--theme-color);
      }

      .text {
        margin-top: 2px;
        font-size: 12px;
      }

      img {
        width: 32px;
      }
    }
  }
</style>