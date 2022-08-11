<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) in tabbarData">
      <div 
        class="item" 
        :class="{ active: curIndex == index }" 
        @click="itemClick(index, item)">
        <img :src="getAssetsUrl(curIndex == index ? item.imageActive : item.image)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->

    <!-- <van-tabbar v-model="curIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="getAssetsUrl(curIndex == index ? item.imageActive : item.image)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar> -->

    <van-tabbar v-model="curIndex">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
 
<script setup>
  import tabbarData from "@/assets/data/tabbar.js";
  import { getAssetsUrl } from "@/utils/loadAssets.js";
  import { ref } from "vue";
  // import { useRouter } from "vue-router";

  const curIndex = ref(0)
  // const router = useRouter()
  // const itemClick = (index, item) => {
  //   curIndex.value = index
  //   router.push(item.path)
  // }

</script>

<style lang="less" scoped>
  .tab-bar {
    // --van-tabbar-item-icon-size: 28px;

    // :deep()找到子组件的选择器，让子组件的选择器也可以生效
    :deep(.van-tabbar-item__icon) {
      font-size: 28px;
    }

    img {
      width: 32px;
    }
  }
</style>