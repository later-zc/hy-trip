import useHomeStore from '@/stores/modules/home';
import useHomeStore from '@/stores/modules/home';
import useHomeStore from '@/stores/modules/home';
<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <HouseItemType3 
          v-if="item.discoveryContentType == 3" 
          :itemData="item.data"
          @click="itemClick(item.data.houseId)">
        </HouseItemType3>
        <HouseItemType9 
          v-else-if="item.discoveryContentType == 9" :itemData="item.data"
          @click="itemClick(item.data.houseId)">
        </HouseItemType9>
      </template>
    </div>
  </div>
</template>

<script setup>
  import useHomeStore from '@/stores/modules/home.js';
  import HouseItemType3 from '@/components/HouseItem/HouseItemType3.vue';
  import HouseItemType9 from '@/components/HouseItem/HouseItemType9.vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  const homeStore = useHomeStore()
  const { houseList } = storeToRefs(homeStore)

  const router = useRouter()
  const itemClick = (houseId) => {
    router.push('/detail/' + houseId)
  }

</script>

<style lang="less" scoped>
  .content {
    margin: 0 20px;

    .title {
      font-size: 16px;
      padding: 10px 0;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>