<template>
  <div class="city top-page">
    <div class="top-area">
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置"
        show-action
        shape="round"
        @cancel="cancelClick" />
      <van-tabs v-model:active="tabActive">
        <template v-for="(value, key, index) in allCity" :key="key">
          <van-tab :title="value?.title"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content-area">
      <template v-for="(value, key, index) in allCity" :key="index">
        <CityGroup v-show="index == tabActive" :cityGroup="value"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import useCityStore from "@/stores/modules/city";
  import { storeToRefs } from "pinia";

  import CityGroup from "./components/CityGroup.vue";
  
  // 搜索框
  const searchValue = ref('')
  const router = useRouter()
  const cancelClick = () => {
    router.go(-1)
  }

  // tabs标签页
  const tabActive = ref(0)
  // console.log(tabActive.value)

  // 获取城市数据
  // const allCity = ref({})
  // getCityAll().then(res => {
  //   allCity.value = res.data
  // })
  const cityStore = useCityStore()
  cityStore.fetchAllCityData()
  const { allCity } = storeToRefs(cityStore)

  // 获取当前选中标签后的城市数据
  // const curCityGroup = computed(() => allCity.value[tabActive.value])

</script>

<style lang="less" scoped>
  .city {
    --van-tabs-line-height: 36px;
    --van-tabs-bottom-bar-height: 3px;
    --van-tabs-bottom-bar-color: var(--theme-color);

    .top-area {
      // position: fixed;
      // top: 0;
      // left: 0;
      // right: 0;
      position: relative;
      z-index: 9;
    }

    .content-area {
      // margin-top: 98px;
      overflow: scroll;
      height: calc(100vh - 106px);
    }
  }
</style>