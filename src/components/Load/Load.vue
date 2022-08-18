<template>
  <div class="load" v-if="loadStore.isLoading" @click="hideLoadMask">
    <div class="bg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
  import useLoadStore from '@/stores/modules/load.js'

  const loadStore = useLoadStore()
  const hideLoadMask = () => loadStore.isLoading = false

</script>

<style lang="less" scoped>
  .load {
    position: fixed;
    z-index: 99;
    inset: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.3);

    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

      img {
        width: 70px;
        height: 70px;
        margin-top: -10px;
      }
    }
  }
</style>