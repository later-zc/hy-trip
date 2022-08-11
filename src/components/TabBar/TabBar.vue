<template>
  <!-- <div class="tab-bar"> -->
    <van-tabbar v-model="curIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="getAssetsUrl(curIndex == index ? item.imageActive : item.image)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  <!-- </div> -->
</template>
 
<script setup>
  import tabbarData from "@/assets/data/tabbar.js";
  import { getAssetsUrl } from "@/utils/loadAssets.js";
  import { ref } from "vue";

  const curIndex = ref(0)

</script>

<style lang="less" scoped>
  // .tab-bar {
    // border-top: 1px solid #eee;
    // display: flex;
    // --van-tabbar-item-icon-size: 28px;

    // :deep()找到子组件的选择器，让子组件的选择器也可以生效
    :deep(.van-tabbar-item__icon) {
      font-size: 28px;
    }

    img {
      width: 28px;
    }
  // }
</style>