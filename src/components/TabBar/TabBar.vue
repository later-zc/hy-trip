<template>
  <!-- <div class="tab-bar"> -->
    <van-tabbar v-model="curIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="getAssetsUrl(curIndex == index ? item.imageActive : item.image)" alt="">
            <!-- <img v-if="curIndex !== index" :src="getAssetsUrl(item.image)" alt="">
            <img v-else :src="getAssetsUrl(item.imageActive)" alt=""> -->
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  <!-- </div> -->
</template>
 
<script setup>
  import tabbarData from "@/assets/data/tabbar.js";
  import { getAssetsUrl } from "@/utils/loadAssets.js";
  import { computed, ref, watch } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute()
  const curIndex = ref(0)
  // const curIndex = computed(() => tabbarData.findIndex(item => item.path == route.path))
  // 监听路由改变时, 对应的索引
  watch(route, (newRoute) => {
    curIndex.value = tabbarData.findIndex(item => item.path == newRoute.path)
  })

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