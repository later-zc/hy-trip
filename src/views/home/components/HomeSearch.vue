<template>
  <div class="search">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="posClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter()
  const cityClick = () => {
    router.push('/city')
  }
  
  const posClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
      console.log('res: ', res)
    }, err => {
      console.log('err: ', err)
    })
  }

</script>

<style lang="less" scoped>
  .search {
    .location {
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 20px;

      .city {
        flex: 1;
        color: #333;
      }

      .position {
        display: flex;
        align-items: center;
        width: 74px;

        .text {
          font-size: 12px;
          color: #666;
        }

        img {
          margin-left: 5px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
</style>