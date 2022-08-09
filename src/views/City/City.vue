<template>
  <div class="city top-page">
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置"
      show-action
      shape="round"
      @cancel="cancelClick" />
    <van-tabs v-model:active="tabActive">
      <van-tab title="国内.港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>

  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getCityAll } from '@/service'
  
  // 搜索框
  const searchValue = ref('')
  const router = useRouter()
  const cancelClick = () => {
    router.go(-1)
  }

  // tabs标签页
  const tabActive = ref(0)

  // 获取城市数据
  getCityAll().then(res => {
    console.log('res: ', res)
  })

</script>

<style lang="less" scoped>
  .city {
    --van-tabs-line-height: 30px;
    --van-tabs-bottom-bar-height: 3px;
    --van-tabs-bottom-bar-color: var(--theme-color);
  }
</style>